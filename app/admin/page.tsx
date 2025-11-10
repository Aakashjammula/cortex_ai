import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CreditCard, TrendingUp, Activity } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "2,543",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Active Subscriptions",
    value: "1,234",
    change: "+8.2%",
    icon: CreditCard,
    color: "text-green-400",
  },
  {
    title: "Monthly Revenue",
    value: "$23,456",
    change: "+15.3%",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
  {
    title: "Active Sessions",
    value: "892",
    change: "+5.7%",
    icon: Activity,
    color: "text-purple-400",
  },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-400">Monitor and manage your CareerForge AI platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50 hover:border-blue-500/50 transition-all"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">{stat.title}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-xs text-green-400">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-300">New user registration: user{i}@example.com</p>
                    <p className="text-xs text-slate-500">{i} minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
