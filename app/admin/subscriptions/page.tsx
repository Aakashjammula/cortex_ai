import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const subscriptions = [
  {
    id: 1,
    user: "John Doe",
    plan: "Pro",
    amount: "$19",
    status: "Active",
    nextBilling: "2024-05-15",
    method: "Card •••• 4242",
  },
  {
    id: 2,
    user: "Bob Johnson",
    plan: "Enterprise",
    amount: "$99",
    status: "Active",
    nextBilling: "2024-05-10",
    method: "Card •••• 5555",
  },
  {
    id: 3,
    user: "Alice Brown",
    plan: "Pro",
    amount: "$19",
    status: "Cancelled",
    nextBilling: "-",
    method: "Card •••• 1234",
  },
  {
    id: 4,
    user: "Sarah Davis",
    plan: "Pro",
    amount: "$19",
    status: "Active",
    nextBilling: "2024-05-20",
    method: "Card •••• 6789",
  },
  {
    id: 5,
    user: "Mike Wilson",
    plan: "Enterprise",
    amount: "$99",
    status: "Active",
    nextBilling: "2024-05-12",
    method: "Card •••• 9876",
  },
]

export default function AdminSubscriptionsPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Subscription Management</h1>
            <p className="text-slate-400">Monitor and manage all active subscriptions</p>
          </div>
          <Button variant="outline" className="border-slate-700 hover:bg-slate-800/50 bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Total MRR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$23,456</div>
              <p className="text-xs text-green-400">+15.3% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Active Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-green-400">+8.2% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Churn Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2.3%</div>
              <p className="text-xs text-red-400">+0.5% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">All Subscriptions</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  type="search"
                  placeholder="Search subscriptions..."
                  className="pl-10 bg-slate-800/50 border-slate-700"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  <TableHead className="text-slate-400">User</TableHead>
                  <TableHead className="text-slate-400">Plan</TableHead>
                  <TableHead className="text-slate-400">Amount</TableHead>
                  <TableHead className="text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-400">Next Billing</TableHead>
                  <TableHead className="text-slate-400">Payment Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions.map((sub) => (
                  <TableRow key={sub.id} className="border-slate-800 hover:bg-slate-800/30">
                    <TableCell className="text-slate-200 font-medium">{sub.user}</TableCell>
                    <TableCell>
                      <Badge variant={sub.plan === "Enterprise" ? "default" : "secondary"}>{sub.plan}</Badge>
                    </TableCell>
                    <TableCell className="text-slate-200 font-semibold">{sub.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={sub.status === "Active" ? "default" : "secondary"}
                        className={
                          sub.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {sub.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-400">{sub.nextBilling}</TableCell>
                    <TableCell className="text-slate-400">{sub.method}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
