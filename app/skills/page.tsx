import { SkillsHeader } from "@/components/skills-header"
import { SkillsChart } from "@/components/skills-chart"
import { SkillsTable } from "@/components/skills-table"
import { SkillsSuggestions } from "@/components/skills-suggestions"
import { AppLayout } from "@/components/app-layout"

export default function SkillsPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <SkillsHeader />
        <SkillsChart />
        <SkillsTable />
        <SkillsSuggestions />
      </div>
    </AppLayout>
  )
}
