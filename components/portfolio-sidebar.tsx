"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, GripVertical } from "lucide-react"
import { useState } from "react"
import { AddProjectDialog } from "./add-project-dialog"

const initialSkills = [
  { name: "React", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
]

export function PortfolioSidebar() {
  const [skills] = useState(initialSkills)

  return (
    <aside className="sticky top-0 h-screen w-80 bg-black/20 backdrop-blur-sm border-r border-border p-6 overflow-y-auto hidden lg:block">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Portfolio Builder</h2>
          <p className="text-sm text-muted-foreground">Customize your professional portfolio</p>
        </div>

        <AddProjectDialog />

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Tell us about yourself..."
              className="min-h-32 resize-none bg-background/50"
              defaultValue="Passionate developer with expertise in modern web technologies. I love building scalable applications that solve real-world problems."
            />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Skills</CardTitle>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Plus className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    <Badge variant="secondary">{skill.name}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">Export Portfolio</Button>
      </div>
    </aside>
  )
}
