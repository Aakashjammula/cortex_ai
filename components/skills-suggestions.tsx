"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, ExternalLink } from "lucide-react"

const suggestions = [
  {
    title: "Upskill in AWS",
    content: "Cloud computing skills are in high demand. Consider AWS certification.",
    tips: [
      "Start with AWS Cloud Practitioner certification",
      "Practice with AWS Free Tier",
      "Join AWS community events",
    ],
  },
  {
    title: "Master System Design",
    content: "System design is crucial for senior roles. Strengthen your architecture skills.",
    tips: [
      "Study distributed systems patterns",
      "Practice designing scalable applications",
      "Review case studies from tech companies",
    ],
  },
  {
    title: "Improve Docker Skills",
    content: "Containerization is essential for modern development workflows.",
    tips: ["Complete Docker official tutorials", "Containerize your existing projects", "Learn Kubernetes basics"],
  },
]

export function SkillsSuggestions() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {suggestions.map((suggestion, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                <span className="font-semibold">{suggestion.title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p className="text-muted-foreground">{suggestion.content}</p>
                  <ul className="space-y-2">
                    {suggestion.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">{i + 1}.</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="gap-2 hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Resources
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
