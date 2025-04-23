"use client";

import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center mb-4">
          Parakeet AI Assistant
        </h1>
        <Chat />
      </div>
    </main>
  );
}
