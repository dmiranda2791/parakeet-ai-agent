# Parakeet AI Agent - Architecture Document

## System Overview

The Parakeet AI Agent is a compliance assistant web application that helps users detect PII in PDF documents using AI capabilities. The system is built with modern web technologies and uses streaming responses for real-time communication.

## Technical Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context + Hooks
- **UI Components**: Shadcn/ui (built on Radix UI)

### Backend

- **Runtime**: Node.js
- **Framework**: Next.js API Routes
- **AI Integration**: Vercel AI SDK with custom tool calling
- **Validation**: Zod for runtime type safety
- **LLM Provider**: OpenAI API

### Database

- **Primary Database**: SQLite with Prisma ORM
- **File Storage**: Vercel Blob Storage

### Infrastructure

- **Containerization**: Docker
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Architecture Components

### 1. Frontend Layer

```
┌─────────────────────────────────────────────────┐
│                    Frontend                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │ Chat Interface │  │ File Upload │  │ Results │ │
│  └─────────────┘  └─────────────┘  └─────────┘ │
└─────────────────────────────────────────────────┘
```

### 2. Backend Layer

```
┌─────────────────────────────────────────────────┐
│                    Backend                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │ API Routes   │  │ AI Service   │  │ Tools   │ │
│  └─────────────┘  └─────────────┘  └─────────┘ │
└─────────────────────────────────────────────────┘
```

### 3. Data Layer

```
┌─────────────────────────────────────────────────┐
│                    Data Layer                   │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ SQLite DB    │  │ Blob Storage │              │
│  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────┘
```

## Key Features

### 1. PDF Processing

- File size limit: 10MB
- Supported format: PDF only
- Processing steps:
  1. File upload validation
  2. PDF text extraction
  3. PII detection
  4. Results streaming

### 2. AI Integration

- Vercel AI SDK integration with custom tool calling
- Runtime type safety with Zod validation
- Streaming response handling
- PII detection patterns:
  - Email addresses
  - Phone numbers
  - Social security numbers
  - Credit card numbers

### 3. Data Storage

- SQLite for metadata and user sessions
- Vercel Blob Storage for temporary PDF storage
- Automatic cleanup of processed files

## Security Considerations

- File upload validation
- Rate limiting
- Input sanitization
- Secure API endpoints

## Performance Considerations

- Client-side caching
- Optimized PDF processing
- Efficient AI API usage
- Responsive UI design
- Streaming response optimization

## Development Workflow

1. Local development with Docker
2. GitHub Actions for CI/CD
3. Automated testing
4. Vercel preview deployments

## Future Enhancements

1. Supplier Risk Search Tool integration
2. Additional file format support
3. Batch processing capabilities
4. User authentication
5. Advanced PII detection patterns

## Monitoring and Logging

- Vercel Analytics
- Error tracking
- Performance monitoring
- Usage metrics
