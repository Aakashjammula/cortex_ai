"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const topSkills = [
  { name: "React", score: 8, color: "bg-chart-1" },
  { name: "TypeScript", score: 9, color: "bg-chart-2" },
  { name: "Leadership", score: 7, color: "bg-chart-3" },
  { name: "System Design", score: 8, color: "bg-chart-4" },
  { name: "Communication", score: 9, color: "bg-chart-5" },
]

export function SkillsChart() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Your Top Skills</CardTitle>
        <CardDescription>AI-generated skill assessment based on your experience</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {topSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-2xl font-bold text-primary">{skill.score}/10</span>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.score * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeDasharray={`${(topSkills.reduce((acc, s) => acc + s.score, 0) / topSkills.length) * 25.13} 251.3`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.55 0.2 264)" />
                    <stop offset="100%" stopColor="oklch(0.6 0.22 295)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-primary">
                  {Math.round((topSkills.reduce((acc, s) => acc + s.score, 0) / topSkills.length) * 10)}%
                </span>
                <span className="text-sm text-muted-foreground">Overall Score</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
