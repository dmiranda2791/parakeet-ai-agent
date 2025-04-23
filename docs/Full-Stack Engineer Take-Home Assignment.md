# Full-Stack Engineer Take-Home Assignment

## Overview
This take-home assignment is designed to evaluate your skills as a full-stack engineer, with a focus on working with AI capabilities in modern web applications.  
You'll build and deploy a simple **compliance assistant** that leverages the **Vercel AI SDK** and implements **function/tool calling** to help automate basic compliance-related tasks.

## Challenge
Create a web application with a **chat interface** that helps users perform simple compliance-related tasks.  
The application must use the **Vercel AI SDK** with **custom tool calling functionality**.

## Time Constraint
For someone familiar with the Vercel AI SDK and deployment tools, it should take no more than **2 hours**.  
However, you're free to take as long as you want.

## Tools & Resources
- Use any tools, IDEs, or AI assistants of your choice.
- Code completion tools and AI troubleshooting are allowed.
- You’ll be evaluated based on delivery, not method.

## Requirements

### Technical Stack
- **Frontend:** Next.js
- **AI Integration:** Vercel AI SDK (mandatory)
- **Styling:** Your choice (TailwindCSS recommended)
- **Deployment:** Vercel, Cloudflare, or similar (preferably free-tier)
- **LLM API:** Claude, Google Gemini, OpenAI, Groq, or others (preferably free-tier)

### Core Features

#### 1. AI Chat Interface
- Implement a chat interface using Vercel AI SDK
- Text-based interaction with an AI assistant
- Show loading states during AI processing
- Display when tool actions are executing

#### 2. Tool Calling Implementation
- Implement one of the two tool options
- Include proper error handling for tool calls
- Ensure AI uses tool output in its responses

### Tool Options (Choose One)

#### Option 1: PII Detector
- Upload and scan PDF documents and/or images
- Detect common PII patterns like:
  - Email addresses
  - Phone numbers
  - Social security numbers
  - Credit card numbers
  - Names (optional/time-permitting)
- Return findings through the chat interface

#### Option 2: Supplier Risk Search Tool
- Create a mock database of 8–10 fictional suppliers, each with:
  - Name
  - Risk score (1–10)
  - Risk categories (2–3 per supplier)
  - Location
  - Industry
- Allow queries like:
  - "What are the top 3 suppliers with the highest risk scores?"
  - "Show me all suppliers in the healthcare industry"
  - "Which suppliers have financial compliance risks?"
- Return results formatted through the AI chat

## Deliverables

1. **GitHub Repository**
   - All source code
   - Clear commit history

2. **Deployed Application**
   - Live, functional version of the app

3. **README Documentation**
   - Setup instructions
   - Brief architecture and design explanation
   - Tool function description

## Evaluation Criteria

1. **Vercel AI SDK Implementation**
   - Proper setup and integration
   - Functional chat interface

2. **Tool Calling Implementation**
   - Working tool function
   - Clear tool output integration

3. **Code Quality**
   - Clean, maintainable code
   - Effective error handling

4. **User Experience**
   - Smooth and intuitive interface
   - Responsive feedback during processing

5. **Documentation**
   - Clear, complete README
   - Working setup instructions

## Submission Guidelines

- Provide GitHub access to: `jowanza@parakeetfinancial.com`
- Include your deployed application URL in the submission email

---

> 💡 Focus on the core requirements: a chat interface with Vercel AI SDK and one working tool function.  
> A simple but well-executed solution is preferred over an ambitious but incomplete one.

**Good luck!**