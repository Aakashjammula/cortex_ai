"use client"

import type React from "react"

import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatArea } from "@/components/chat-area"
import { useState, useEffect } from "react"

export default function ChatPage() {
  const [sidebarWidth, setSidebarWidth] = useState(260)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const newWidth = Math.max(200, Math.min(500, e.clientX))
      setSidebarWidth(newWidth)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "col-resize"
      document.body.style.userSelect = "none"
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = ""
      document.body.style.userSelect = ""
    }
  }, [isDragging])

  return (
    <div className="h-screen flex bg-black overflow-hidden">
      <div style={{ width: `${sidebarWidth}px` }} className="flex-shrink-0 relative">
        <ChatSidebar />
        <div
          onMouseDown={handleMouseDown}
          className="absolute right-0 top-0 h-full w-1 hover:w-1 hover:bg-slate-600 cursor-col-resize transition-all z-50 group"
          style={{ background: isDragging ? "#475569" : "transparent" }}
        >
          <div className="absolute right-0 top-0 h-full w-1 bg-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <ChatArea />
    </div>
  )
}
