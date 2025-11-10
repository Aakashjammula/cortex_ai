"use client"

import type React from "react"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Play, Clock, Award, TrendingUp, Upload } from "lucide-react"
import { useState } from "react"

const courses = [
  {
    title: "Advanced React Patterns",
    provider: "Frontend Masters",
    progress: 65,
    duration: "8 hours",
    level: "Advanced",
    image: "/react-logo-abstract.png",
  },
  {
    title: "System Design Interview Prep",
    provider: "Educative",
    progress: 30,
    duration: "12 hours",
    level: "Intermediate",
    image: "/system-design.jpg",
  },
  {
    title: "TypeScript Deep Dive",
    provider: "Udemy",
    progress: 100,
    duration: "6 hours",
    level: "Intermediate",
    image: "/typescript-logo.png",
  },
  {
    title: "Leadership for Engineers",
    provider: "LinkedIn Learning",
    progress: 15,
    duration: "4 hours",
    level: "Beginner",
    image: "/diverse-group-leadership.png",
  },
]

const recommendations = [
  { title: "Docker & Kubernetes", reason: "Based on your DevOps interest", priority: "High" },
  { title: "GraphQL Fundamentals", reason: "Complements your React skills", priority: "Medium" },
  { title: "AWS Solutions Architect", reason: "Popular in your target roles", priority: "High" },
]

export default function LearningPage() {
  const [certificateFile, setCertificateFile] = useState<File | null>(null)

  const handleCertificateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCertificateFile(file)
      console.log("[v0] Certificate uploaded:", file.name)
    }
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-background pb-24">
        <div className="max-w-6xl mx-auto p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 gradient-text">Learning Resources</h1>
              <p className="text-muted-foreground">Continue your professional development journey</p>
            </div>
            <label htmlFor="certificate-upload">
              <Button variant="outline" className="cursor-pointer bg-transparent" asChild>
                <span>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Certificate
                </span>
              </Button>
              <input
                id="certificate-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleCertificateUpload}
              />
            </label>
          </div>

          {certificateFile && (
            <Card className="glass-effect border-blue-500/30 animate-pulse-glow">
              <CardContent className="p-4">
                <p className="text-sm text-blue-400">✓ Certificate uploaded: {certificateFile.name}</p>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="glass-effect card-hover">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Courses In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4</div>
                <p className="text-xs text-muted-foreground mt-1">2 completed this month</p>
              </CardContent>
            </Card>
            <Card className="glass-effect card-hover">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Learning Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">47h</div>
                <p className="text-xs text-muted-foreground mt-1">This quarter</p>
              </CardContent>
            </Card>
            <Card className="glass-effect card-hover">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Certificates Earned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">+3 this year</p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-effect border-blue-500/50 card-hover animate-pulse-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                AI-Recommended Courses
              </CardTitle>
              <CardDescription>Personalized learning paths based on your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/50"
                  >
                    <div>
                      <h4 className="font-medium">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground">{rec.reason}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={rec.priority === "High" ? "default" : "secondary"}>{rec.priority}</Badge>
                      <Button size="sm" variant="ghost">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold mb-4">My Courses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="glass-effect overflow-hidden card-hover">
                  <div className="aspect-video bg-muted relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 right-3">{course.level}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-xs">
                      <span>{course.provider}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      {course.progress === 100 ? (
                        <>
                          <Award className="h-4 w-4 mr-2" />
                          View Certificate
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass-effect card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Explore More Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                Browse Course Catalog
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
