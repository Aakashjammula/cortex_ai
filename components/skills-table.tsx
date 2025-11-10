"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Backend" },
  { name: "Leadership", level: 80, category: "Soft Skills" },
  { name: "Communication", level: 85, category: "Soft Skills" },
]

export function SkillsTable() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">All Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Skill</th>
                <th className="text-left py-3 px-4 font-semibold">Level</th>
                <th className="text-left py-3 px-4 font-semibold">Category</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 font-medium">{skill.name}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Progress value={skill.level} className="w-32 h-2" />
                      <span className="text-sm text-muted-foreground min-w-12">{skill.level}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {skill.category}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
