import { JobFitForm } from "@/components/job-fit-form"
import { JobFitResults } from "@/components/job-fit-results"
import { AppLayout } from "@/components/app-layout"

export default function JobsPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 gradient-text">Job-Fit Scoring</h1>
          <p className="text-muted-foreground text-lg">Discover how well you match with job opportunities</p>
        </div>
        <JobFitForm />
        <JobFitResults />
      </div>
    </AppLayout>
  )
}
