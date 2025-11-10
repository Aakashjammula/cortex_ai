import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, BookOpen, CheckCircle2, Clock } from "lucide-react"

const interviewTopics = [
  {
    category: "Technical",
    topics: [
      { name: "Data Structures & Algorithms", questions: 45, completed: 12 },
      { name: "System Design", questions: 30, completed: 8 },
      { name: "JavaScript/TypeScript", questions: 50, completed: 25 },
      { name: "React & Frontend", questions: 40, completed: 18 },
    ],
  },
  {
    category: "Behavioral",
    topics: [
      { name: "Leadership & Teamwork", questions: 20, completed: 5 },
      { name: "Problem Solving", questions: 25, completed: 10 },
      { name: "Communication", questions: 15, completed: 7 },
      { name: "Conflict Resolution", questions: 18, completed: 4 },
    ],
  },
]

const recentPractice = [
  { question: "Implement a Binary Search Tree", difficulty: "Medium", time: "45 min", score: 85 },
  { question: "Tell me about a time you led a project", difficulty: "Behavioral", time: "15 min", score: 92 },
  { question: "Design a URL Shortener", difficulty: "Hard", time: "60 min", score: 78 },
]

export default function InterviewPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2 gradient-text">Interview Preparation</h1>
          <p className="text-muted-foreground">Practice and master your interview skills</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="glass-effect card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Questions Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">89</div>
              <p className="text-xs text-muted-foreground mt-1">+12 this week</p>
            </CardContent>
          </Card>
          <Card className="glass-effect card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground mt-1">+5% improvement</p>
            </CardContent>
          </Card>
          <Card className="glass-effect card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Practice Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24h</div>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-effect card-hover">
          <CardHeader>
            <CardTitle>Recent Practice Sessions</CardTitle>
            <CardDescription>Your latest interview practice attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPractice.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{session.question}</h4>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          session.difficulty === "Hard"
                            ? "destructive"
                            : session.difficulty === "Medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {session.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {session.time}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{session.score}%</div>
                    <Button size="sm" variant="ghost" className="mt-1">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {interviewTopics.map((category, idx) => (
          <Card key={idx} className="glass-effect card-hover">
            <CardHeader>
              <CardTitle>{category.category} Questions</CardTitle>
              <CardDescription>Practice {category.category.toLowerCase()} interview questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {category.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium mb-1">{topic.name}</h4>
                        <p className="text-sm text-muted-foreground">{topic.questions} questions</p>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">
                        {topic.completed} / {topic.questions} completed
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary"
                        style={{ width: `${(topic.completed / topic.questions) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="glass-effect border-blue-500/50 card-hover animate-pulse-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-400" />
              AI Mock Interview
            </CardTitle>
            <CardDescription>Practice with our AI interviewer for realistic interview experience</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/30 card-hover">
              Start AI Mock Interview
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
