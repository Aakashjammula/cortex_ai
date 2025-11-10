"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Sparkles } from "lucide-react"

export function SkillsHeader() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Skill Analysis</h1>
        <p className="text-muted-foreground text-lg">AI-powered insights into your professional capabilities</p>
      </div>

      <Card className="glass-effect p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">AI Analysis Ready</h3>
              <p className="text-sm text-muted-foreground">Upload your resume for instant skill assessment</p>
            </div>
          </div>
          <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90">
            <Upload className="h-5 w-5" />
            Upload Resume
          </Button>
        </div>
      </Card>
    </div>
  )
}
