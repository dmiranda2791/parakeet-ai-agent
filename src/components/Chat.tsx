import { useChat } from "@ai-sdk/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2, Send, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

export function Chat() {
  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: "/api/chat",
  });

  const isProcessing = status === "submitted" || status === "streaming";

  const clearFile = () => {
    setFiles(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-2xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case "text":
                    return (
                      <div
                        key={`${message.id}-${i}`}
                        className="prose prose-slate prose-sm max-w-none [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:space-y-2 [&>p]:mb-4 [&>ul]:my-4"
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeSanitize]}
                        >
                          {part.text.replace(/\\n/g, "\n")}
                        </ReactMarkdown>
                      </div>
                    );
                  case "tool-invocation":
                    return null;
                }
              })}
              {message.experimental_attachments
                ?.filter((attachment) =>
                  attachment?.contentType?.startsWith("application/pdf")
                )
                .map((attachment, index) => (
                  <iframe
                    key={`${message.id}-${index}`}
                    src={attachment.url}
                    width="100%"
                    height="500"
                    className="rounded-md border mt-2"
                    title={attachment.name ?? `PDF ${index + 1}`}
                  />
                ))}
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-4">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={async (e) => {
          handleSubmit(e, {
            experimental_attachments: files,
          });

          setFiles(undefined);

          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }}
        className="flex gap-2"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFiles(e.target.files || undefined)}
          accept=".pdf"
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessing}
        >
          <Upload className="h-4 w-4 mr-2" />
          PDF
        </Button>
        {files && files.length > 0 && (
          <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-md">
            <span className="text-sm text-muted-foreground">
              {files[0].name}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0"
              onClick={clearFile}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1"
          disabled={isProcessing}
        />
        <Button
          type="submit"
          disabled={isProcessing || (!input.trim() && !files)}
        >
          {isProcessing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    </div>
  );
}
