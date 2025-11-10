"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Filter } from "lucide-react"

export function InsightsHeader() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-4xl font-bold mb-2">Career Insights</h1>
        <p className="text-muted-foreground text-lg">AI-powered recommendations tailored for you</p>
      </div>

      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filter Insights
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>All Insights</DropdownMenuItem>
            <DropdownMenuItem>Recommendations</DropdownMenuItem>
            <DropdownMenuItem>Trends</DropdownMenuItem>
            <DropdownMenuItem>Skill Gaps</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
