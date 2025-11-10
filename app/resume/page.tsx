"use client"

import type React from "react"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, FileText, Plus, Upload } from "lucide-react"
import { useState } from "react"

export default function ResumePage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResumeFile(file)
      console.log("[v0] Resume file uploaded:", file.name)
    }
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-background pb-24">
        <div className="max-w-6xl mx-auto p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 gradient-text">Resume Builder</h1>
              <p className="text-muted-foreground">Create and customize your professional resume</p>
            </div>
            <div className="flex gap-2">
              <label htmlFor="resume-upload">
                <Button variant="outline" className="cursor-pointer bg-transparent" asChild>
                  <span>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Resume
                  </span>
                </Button>
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/30 card-hover">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          {resumeFile && (
            <Card className="glass-effect border-blue-500/30 animate-pulse-glow">
              <CardContent className="p-4">
                <p className="text-sm text-blue-400">✓ Uploaded: {resumeFile.name}</p>
              </CardContent>
            </Card>
          )}

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className="glass-effect card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-400" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" className="bg-background/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Professional Summary</label>
                    <Textarea placeholder="Brief summary of your experience..." className="min-h-24 bg-background/50" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect card-hover">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Work Experience</CardTitle>
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                    <Plus className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title</label>
                    <Input placeholder="Senior Developer" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <Input placeholder="Tech Corp" className="bg-background/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Start Date</label>
                      <Input type="month" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">End Date</label>
                      <Input type="month" className="bg-background/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      placeholder="Key responsibilities and achievements..."
                      className="min-h-24 bg-background/50"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect card-hover">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Education</CardTitle>
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                    <Plus className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Degree</label>
                    <Input placeholder="Bachelor of Science" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Institution</label>
                    <Input placeholder="University Name" className="bg-background/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Start Year</label>
                      <Input type="number" placeholder="2018" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">End Year</label>
                      <Input type="number" placeholder="2022" className="bg-background/50" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:sticky lg:top-6 h-fit">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Resume Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white text-black p-8 rounded-lg min-h-[800px] shadow-xl">
                    <div className="space-y-6">
                      <div className="border-b-2 border-blue-600 pb-4">
                        <h2 className="text-3xl font-bold">John Doe</h2>
                        <p className="text-gray-600">john@example.com | +1 (555) 000-0000</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Professional Summary</h3>
                        <p className="text-sm text-gray-700">
                          Experienced software developer with expertise in modern web technologies...
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Work Experience</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-bold">Senior Developer</h4>
                            <p className="text-sm text-gray-600">Tech Corp | 2020 - Present</p>
                            <p className="text-sm text-gray-700 mt-1">
                              Led development of key features and mentored junior developers...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Education</h3>
                        <div>
                          <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
                          <p className="text-sm text-gray-600">University Name | 2018 - 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
