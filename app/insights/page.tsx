import { InsightsHeader } from "@/components/insights-header"
import { InsightsFeed } from "@/components/insights-feed"
import { AppLayout } from "@/components/app-layout"

export default function InsightsPage() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <InsightsHeader />
        <InsightsFeed />
      </div>
    </AppLayout>
  )
}
