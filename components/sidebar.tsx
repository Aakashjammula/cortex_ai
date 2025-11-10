"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Briefcase,
  Target,
  TrendingUp,
  FileText,
  BookOpen,
  MessageSquare,
  Settings,
  Crown,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Skills Analysis", href: "/skills", icon: Target },
  { name: "Job Matching", href: "/jobs", icon: TrendingUp },
  { name: "Resume Builder", href: "/resume", icon: FileText },
  { name: "Interview Prep", href: "/interview", icon: MessageSquare },
  { name: "Learning", href: "/learning", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800/50">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/70 transition-all animate-glow">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CareerForge AI
            </h1>
            <p className="text-xs text-slate-500">Free Plan</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 transition-all",
                  isActive
                    ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Upgrade CTA */}
      <div className="p-4 border-t border-slate-800/50">
        <Link href="/pricing">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 hover:border-blue-500/50 transition-all cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="h-5 w-5 text-yellow-400 animate-pulse" />
              <h3 className="font-semibold text-white">Upgrade to Pro</h3>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Unlock AI-powered insights, unlimited projects, and priority support
            </p>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
              Upgrade Now
            </Button>
          </div>
        </Link>
      </div>
    </aside>
  )
}
