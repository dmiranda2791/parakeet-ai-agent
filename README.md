# Parakeet AI Agent - Compliance Assistant

A web application that helps users detect Personally Identifiable Information (PII) in PDF documents using AI capabilities. Built with Next.js and the Vercel AI SDK.

## Features

- 🤖 AI-powered chat interface for compliance assistance
- 📄 PDF document processing and PII detection
- 🔍 Detection of common PII patterns:
  - Email addresses
  - Phone numbers
  - Social security numbers
  - Credit card numbers
- ⚡ Real-time streaming responses
- 🎨 Modern UI with TailwindCSS and shadcn/ui

## Technical Stack

- **Frontend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **AI Integration**: Vercel AI SDK
- **LLM Provider**: OpenAI API
- **Deployment**: Vercel

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- OpenAI API key

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/parakeet-ai-agent.git
cd parakeet-ai-agent
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Open the application in your browser
2. Upload a PDF document using the file upload button
3. Chat with the AI assistant about the document
4. The AI will automatically detect and report any PII found in the document

## Architecture

The application follows a modern web architecture with the following components:

### Frontend Layer

- Chat interface for user interaction
- File upload component for PDF documents
- Real-time streaming response display

### Backend Layer

- Next.js API routes for handling requests
- Vercel AI SDK integration for AI capabilities
- Custom PII detection tool implementation

### Data Processing

- PDF text extraction
- PII pattern matching
- Real-time streaming of results

## Development

### Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utility functions and services
└── public/          # Static assets
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Deployment

The application is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Add your OpenAI API key as an environment variable
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Vercel AI SDK](https://sdk.vercel.ai)
- [OpenAI](https://openai.com)
- [TailwindCSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
