# Parakeet AI Agent - Low Level Architecture

## File Storage

### PDF File Naming Convention

PDF files will be stored with the following naming convention:

```
{timestamp}_{random_string}.pdf
```

Where:

- `timestamp`: Unix timestamp in milliseconds (e.g., 1700000000000)
- `random_string`: 8-character alphanumeric string (e.g., a1b2c3d4)

Example: `1700000000000_a1b2c3d4.pdf`

## API Endpoints

### 1. Chat API

```
POST /api/chat
```

Request:

```typescript
{
  messages: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
}
```

Response: Streaming text response with tool calls

### 2. Tool Definitions

```typescript
// PII Detection Tool
const detectPIITool = tool({
  description:
    "Scan a PDF document for Personally Identifiable Information (PII)",
  parameters: z.object({
    fileData: z.string().describe("Base64 encoded PDF file data"),
  }),
  execute: async ({ fileData }) => {
    // Implementation
  },
});
```

## Direct LLM Integration

The system will use Vercel AI SDK for LLM integration with the following workflow:

1. Client sends chat message with optional file data
2. Server processes message through Vercel AI SDK
3. AI SDK handles tool calling and streaming
4. Results are streamed back to client
