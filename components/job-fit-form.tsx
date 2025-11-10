"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Sparkles } from "lucide-react"

export function JobFitForm() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Analyze Job Match</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="job-title">Job Title</Label>
          <Input id="job-title" placeholder="e.g., Senior Frontend Developer" className="bg-background/50" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="job-description">Job Description</Label>
          <Textarea
            id="job-description"
            placeholder="Paste the job description here..."
            className="min-h-40 resize-none bg-background/50"
          />
        </div>
        <Button className="w-full gap-2 bg-gradient-primary hover:opacity-90">
          <Sparkles className="h-5 w-5" />
          Analyze Fit
        </Button>
      </CardContent>
    </Card>
  )
}
