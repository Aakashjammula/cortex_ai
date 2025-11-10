import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { AppLayout } from "@/components/app-layout"

export default function PortfolioPage() {
  return (
    <AppLayout>
      <div className="flex h-full">
        <PortfolioSidebar />
        <PortfolioPreview />
      </div>
    </AppLayout>
  )
}
