"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Send,
  ChevronDown,
  Plus,
  Paperclip,
  Image as ImageIcon,
  Telescope,
  Lightbulb,
  BookOpen,
  MoreHorizontal,
} from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

function generateMockResponse(input: string): string {
  const responses = [
    "That's a great question! Based on current market trends, I'd recommend focusing on developing skills in areas like AI, cloud computing, and data analysis.",
    "I can help you with that. Have you considered exploring roles in product management or technical leadership? These are high-demand positions right now.",
    "Excellent point! Building a strong portfolio is crucial. I'd suggest creating projects that showcase your problem-solving abilities and technical expertise.",
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

export function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hey there! 👋 I'm Cortex, your AI career assistant. I'm here to help you navigate your career journey, answer questions about skills, job opportunities, and more. What can I help you with today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showToolsMenu, setShowToolsMenu] = useState(false)
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
    <div className="flex-1 flex flex-col bg-[#212121] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors">
          <span className="text-lg font-semibold">Cortex 5</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        <Button variant="ghost" className="text-white hover:bg-white/10 text-sm">
          Share
        </Button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="w-full py-6 px-4">
            {message.role === "assistant" ? (
              // AI Message - Left side, full width
              <div className="max-w-3xl mx-auto flex gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-P9jArLRBCsMzOMP9bnPFEuMxda47cp.png"
                    alt="Cortex"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white/90 text-[15px] leading-7 whitespace-pre-wrap break-words">
                    {message.content}
                  </div>
                </div>
              </div>
            ) : (
              // User Message - Right side, grey bubble
              <div className="max-w-3xl mx-auto flex justify-end">
                <div className="max-w-[70%] bg-[#2f2f2f] rounded-3xl px-5 py-3">
                  <div className="text-white/90 text-[15px] leading-7 whitespace-pre-wrap break-words">
                    {message.content}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="w-full py-6 px-4">
            <div className="max-w-3xl mx-auto flex gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-P9jArLRBCsMzOMP9bnPFEuMxda47cp.png"
                  alt="Cortex"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="flex-1">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div
                    className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-[#212121] px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Tools Dropdown Menu */}
            {showToolsMenu && (
              <div className="absolute bottom-full left-0 mb-2 bg-[#2f2f2f] rounded-xl shadow-2xl border border-white/10 p-2 min-w-[240px] z-50">
                <button
                  type="button"
                  onClick={() => setShowToolsMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <Paperclip className="h-5 w-5 text-white/70" />
                  <span className="text-white text-sm">Add photos & files</span>
                </button>
                <div className="h-px bg-white/10 my-2" />
                <button
                  type="button"
                  onClick={() => setShowToolsMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <Telescope className="h-5 w-5 text-white/70" />
                  <span className="text-white text-sm">Deep research</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowToolsMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <ImageIcon className="h-5 w-5 text-white/70" />
                  <span className="text-white text-sm">Create image</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowToolsMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <Lightbulb className="h-5 w-5 text-white/70" />
                  <span className="text-white text-sm">Thinking</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowToolsMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <BookOpen className="h-5 w-5 text-white/70" />
                  <span className="text-white text-sm">Study and learn</span>
                </button>
                <div className="h-px bg-white/10 my-2" />
                <button
                  type="button"
                  onClick={() => setShowToolsMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <MoreHorizontal className="h-5 w-5 text-white/70" />
                  <span className="text-white text-sm">More</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="relative">
              {/* Plus Button - Inside Input */}
              <Button
                type="button"
                onClick={() => setShowToolsMenu(!showToolsMenu)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10 text-white/70 hover:text-white h-8 w-8 p-0 rounded-full z-10"
                size="icon"
              >
                <Plus className="h-5 w-5" />
              </Button>

              {/* Input Field */}
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Cortex..."
                disabled={isLoading}
                className="w-full bg-[#2f2f2f] border border-white/10 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-3xl pl-12 pr-12 h-12 text-[15px]"
              />

              {/* Send Button */}
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-white/90 text-black h-8 w-8 p-0 rounded-full disabled:opacity-30 disabled:bg-white"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <p className="text-xs text-white/40 mt-2 text-center">
            Cortex can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  )
}
