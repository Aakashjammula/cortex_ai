"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Briefcase, Sparkles } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Analyze Resume",
    description: "Upload your resume for AI-powered insights",
    icon: FileText,
    href: "/skills",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Build Portfolio",
    description: "Create a stunning professional portfolio",
    icon: Briefcase,
    href: "/portfolio",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Get Insights",
    description: "Discover personalized career recommendations",
    icon: Sparkles,
    href: "/insights",
    gradient: "from-pink-500 to-rose-600",
  },
]

export function QuickActions() {
  return (
    <section className="w-full px-4 pb-32">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{action.title}</CardTitle>
                  <CardDescription className="text-pretty">{action.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
