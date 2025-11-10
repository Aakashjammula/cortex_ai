"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, TrendingUp, Target, RefreshCw } from "lucide-react"

const insights = [
  {
    icon: Lightbulb,
    type: "Recommendation",
    title: "Skill Gap: Learn Docker",
    content:
      "Based on your career goals and current market trends, learning Docker would significantly boost your profile. Container technologies are mentioned in 78% of backend developer job postings.",
    score: 92,
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    type: "Trend",
    title: "AI/ML Skills in High Demand",
    content:
      "The demand for AI and machine learning skills has increased by 45% in the last quarter. Consider adding basic ML knowledge to your skillset to stay competitive.",
    score: 88,
    color: "text-chart-2",
  },
  {
    icon: Target,
    type: "Recommendation",
    title: "Optimize Your LinkedIn Profile",
    content:
      "Your LinkedIn profile is missing key skills that appear in your resume. Adding these could increase your profile views by up to 60% and attract more recruiter attention.",
    score: 85,
    color: "text-chart-3",
  },
  {
    icon: Lightbulb,
    type: "Skill Gap",
    title: "System Design Fundamentals",
    content:
      "Senior positions often require strong system design knowledge. Your current experience shows practical implementation, but formal system design study would prepare you for senior interviews.",
    score: 90,
    color: "text-primary",
  },
]

export function InsightsFeed() {
  return (
    <div className="space-y-6">
      {insights.map((insight, index) => (
        <Card
          key={index}
          className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0`}>
                  <insight.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {insight.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{insight.title}</CardTitle>
                </div>
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20 text-lg px-3 py-1">{insight.score}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-pretty">{insight.content}</p>
            <Button variant="ghost" className="gap-2 hover:bg-primary/10 hover:text-primary">
              <RefreshCw className="h-4 w-4" />
              Regenerate Insight
            </Button>
          </CardContent>
        </Card>
      ))}

      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-2xl font-bold">Unlock Unlimited Insights</h3>
            <p className="text-muted-foreground">
              Get personalized career recommendations, trend analysis, and skill gap identification with our premium
              plan.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Subscribe Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
