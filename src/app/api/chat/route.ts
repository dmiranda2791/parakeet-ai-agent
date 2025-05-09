import { openai } from '@ai-sdk/openai';
import { Message, streamText, tool } from 'ai';
import { z } from 'zod';
import { PIIDetector } from '@/lib/pii-detector';

export const maxDuration = 30;

function errorHandler(error: unknown) {
  if (error == null) {
    return 'unknown error';
  }

  if (typeof error === 'string') {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return JSON.stringify(error);
}

const piiDetector = new PIIDetector();

export async function POST(req: Request) {
  const { messages } = await req.json() as {
    messages: Message[];
  };

  const result = streamText({
    model: openai('gpt-4o'),
    messages: [
      {
        role: 'system',
        content: `You are a helpful AI assistant that helps detect PII in PDF documents. 
        IMPORTANT: You MUST use the detectPII tool to scan PDF files for sensitive information.
        DO NOT attempt to identify PII on your own - you must always use the tool.
        When a user uploads a PDF, you are required to use the detectPII tool to scan it.
        You cannot proceed with PII detection without using the tool.
        After receiving the tool's results, you can help interpret and explain the findings.`
      },
      ...messages,
    ],
    maxSteps: 5,
    tools: {
      detectPII: tool({
        description: 'Scan text content for Personally Identifiable Information (PII)',
        parameters: z.object({
          textContent: z.string().describe('Text content extracted from the PDF document'),
        }),
        execute: async ({ textContent }) => {
          try {
            console.log('Processing text content', typeof textContent, textContent);
            if (!textContent || typeof textContent !== 'string') {
              return 'No valid text content provided. Please upload a PDF file.';
            }

            const detections = await piiDetector.detectPII(textContent);

            return { detections };
          } catch (error) {
            console.error('Error processing text:', error);
            return 'Sorry, I encountered an error while processing the text. Please make sure you uploaded a valid PDF file.';
          }
        },
      }),
    },
  });

  return result.toDataStreamResponse(
    { getErrorMessage: errorHandler }
  );
}