"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hey there! I'm Cortex, your AI career assistant. I'm here to help you navigate your career journey, answer questions about skills, job opportunities, and more. What can I help you with today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: generateMockResponse(input),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-background via-background to-background/50">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex", {
              "justify-end": message.role === "user",
              "justify-start": message.role === "assistant",
            })}
          >
            <div
              className={cn("max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg shadow-sm", {
                "bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-none": message.role === "user",
                "bg-card border border-border text-foreground rounded-bl-none": message.role === "assistant",
              })}
            >
              <p className="text-sm md:text-base leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-60 mt-1 block">
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-card border border-border px-4 py-3 rounded-lg shadow-sm rounded-bl-none">
              <div className="flex gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Cortex is thinking...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card/50 backdrop-blur-sm p-4 md:p-6">
        <form onSubmit={handleSendMessage} className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about your career..."
            disabled={isLoading}
            className="flex-1 bg-input border-border focus:border-blue-500 focus:ring-blue-500/20"
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-[1.02]"
            size="icon"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Cortex is an AI assistant powered by career insights
        </p>
      </div>
    </div>
  )
}

function generateMockResponse(userInput: string): string {
  const responses = [
    "That's a great question! Based on current market trends, I'd recommend focusing on developing skills in areas like AI, cloud computing, and data analysis.",
    "I can help you with that. Have you considered exploring roles in product management or technical leadership? These are high-demand positions right now.",
    "Excellent point! Building a strong portfolio is crucial. I'd suggest creating projects that showcase your problem-solving abilities and technical expertise.",
    "That aligns well with your career goals. Let me suggest some resources and next steps to help you advance in this direction.",
    "I've found that combining technical skills with strong communication abilities is key to career growth. What area would you like to focus on first?",
    "Great thinking! Networking and continuous learning are essential. Would you like me to suggest some relevant courses or communities to join?",
  ]

  return responses[Math.floor(Math.random() * responses.length)]
}
