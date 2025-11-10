"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sparkles } from "lucide-react"

export function DashboardHero() {
  return (
    <section className="w-full py-20 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="glass-effect rounded-xl p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative group">
              <Avatar className="h-24 w-24 border-4 border-primary/20 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/50">
                <AvatarImage src="/professional-avatar.png" alt="User" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                  CF
                </AvatarFallback>
              </Avatar>
              <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-balance">Welcome to CareerForge AI</h1>
            <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI-Powered Career Builder
            </p>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Transform your career with intelligent insights, portfolio building, and personalized job matching powered
            by advanced AI
          </p>
        </div>
      </div>
    </section>
  )
}
