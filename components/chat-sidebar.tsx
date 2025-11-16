"use client"

import { Button } from "@/components/ui/button"
import { PenSquare, MessageSquare, Trash2, User, PanelLeft, Settings, LogOut } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function ChatSidebar() {
  const router = useRouter()
  const [chats, setChats] = useState([
    { id: 1, name: "Career Path Discussion" },
    { id: 2, name: "Skills Development Tips" },
    { id: 3, name: "Job Interview Prep" },
  ])
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleNewChat = () => {
    const newChat = {
      id: chats.length + 1,
      name: `New chat ${chats.length + 1}`,
    }
    setChats([newChat, ...chats])
  }

  const handleDeleteChat = (id: number) => {
    setChats(chats.filter((chat) => chat.id !== id))
  }

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    // Redirect to login
    router.push("/login")
  }

  return (
    <div className="w-full h-full bg-[#171717] flex flex-col">
        {/* Logo and Minimize Button */}
        <div className="flex items-center justify-between p-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-P9jArLRBCsMzOMP9bnPFEuMxda47cp.png"
            alt="Cortex"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:bg-white/10 hover:text-white h-9 w-9"
          >
            <PanelLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* New Chat Button */}
        <div className="px-2 pb-2">
          <Button
            onClick={handleNewChat}
            className="w-full bg-transparent hover:bg-white/10 text-white border-0 gap-3 justify-start px-3 h-11 rounded-lg"
            variant="outline"
          >
            <PenSquare className="h-5 w-5" />
            <span className="text-sm">New chat</span>
          </Button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="group flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors mb-1"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <MessageSquare className="h-4 w-4 text-white/70 flex-shrink-0" />
                <span className="text-sm text-white/90 truncate">{chat.name}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDeleteChat(chat.id)
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded"
              >
                <Trash2 className="h-4 w-4 text-white/70 hover:text-red-400" />
              </button>
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-2 border-t border-white/10 relative">
          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute bottom-full left-2 right-2 mb-2 bg-[#2f2f2f] rounded-xl shadow-2xl border border-white/10 overflow-hidden">
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-left">
                <Settings className="h-5 w-5 text-white/70" />
                <span className="text-white text-sm">Settings</span>
              </button>
              <div className="h-px bg-white/10" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-left"
              >
                <LogOut className="h-5 w-5 text-white/70" />
                <span className="text-white text-sm">Log out</span>
              </button>
            </div>
          )}

          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 transition-colors text-left"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white/90 truncate">User Account</p>
            </div>
          </button>
        </div>
      </div>
  )
}
