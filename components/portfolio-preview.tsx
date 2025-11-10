"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Plus } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/ecommerce-dashboard.png",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses",
    tech: ["React", "WebSocket", "OpenAI"],
    image: "/chat-application-interface.png",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with real-time updates",
    tech: ["TypeScript", "D3.js", "Node.js"],
    image: "/analytics-dashboard.png",
  },
]

export function PortfolioPreview() {
  return (
    <main className="flex-1 p-6 pb-32 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Live Preview</h1>
            <p className="text-muted-foreground">Your portfolio as visitors will see it</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
