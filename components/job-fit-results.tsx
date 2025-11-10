"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertCircle, Lightbulb, ArrowRight } from "lucide-react"

const strengths = [
  "Strong React and TypeScript experience",
  "Proven leadership in team environments",
  "Excellent communication skills",
]

const gaps = ["Limited AWS cloud experience", "No GraphQL background mentioned"]

const tips = [
  "Highlight your React projects in your application",
  "Mention any cloud computing exposure",
  "Prepare examples of team leadership",
  "Study GraphQL basics before interview",
]

export function JobFitResults() {
  return (
    <div className="space-y-6">
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
        <div className="bg-gradient-primary p-8 text-center">
          <div className="relative inline-block">
            <svg className="w-48 h-48" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="10"
                strokeDasharray="240 283"
                strokeLinecap="round"
                className="transition-all duration-1000"
                style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-bold text-white">85%</span>
              <span className="text-white/90 text-lg">Match</span>
            </div>
          </div>
          <p className="mt-4 text-white/90 text-lg">Excellent fit for this position!</p>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-green-500/30 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-500">
              <CheckCircle2 className="h-5 w-5" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-pretty">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-500/30 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-500">
              <AlertCircle className="h-5 w-5" />
              Skill Gaps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {gaps.map((gap, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-pretty">{gap}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Preparation Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <Badge className="shrink-0 bg-primary text-primary-foreground">{index + 1}</Badge>
                <span className="text-pretty pt-0.5">{tip}</span>
              </li>
            ))}
          </ol>
          <Button className="w-full mt-6 gap-2 bg-gradient-primary hover:opacity-90">
            Generate Interview Questions
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Want More Matches?</h3>
          <p className="text-muted-foreground mb-4">Unlock unlimited job-fit analysis with premium</p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Upgrade to Premium
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
