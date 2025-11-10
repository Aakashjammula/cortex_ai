"use client"

import { Button } from "@/components/ui/button"
import { Menu, LogOut, Settings } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

// Keeping for reference - can be deleted

export function ChatHeader() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-P9jArLRBCsMzOMP9bnPFEuMxda47cp.png"
              alt="Cortex"
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden sm:inline font-bold text-lg bg-gradient-to-r from-blue-500 via-magenta-500 to-purple-500 bg-clip-text text-transparent">
            Cortex
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
