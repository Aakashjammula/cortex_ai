import { DashboardHero } from "@/components/dashboard-hero"
import { QuickActions } from "@/components/quick-actions"
import { AppLayout } from "@/components/app-layout"

export default function DashboardPage() {
  return (
    <AppLayout>
      <DashboardHero />
      <QuickActions />
    </AppLayout>
  )
}
