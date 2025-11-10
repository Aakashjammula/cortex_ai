import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus, MoreVertical } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", plan: "Pro", status: "Active", joined: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Free", status: "Active", joined: "2024-02-20" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", plan: "Enterprise", status: "Active", joined: "2024-01-10" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", plan: "Pro", status: "Inactive", joined: "2023-12-05" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", plan: "Free", status: "Active", joined: "2024-03-01" },
]

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
            <p className="text-slate-400">Manage and monitor all platform users</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/30">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>

        <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">All Users</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search users..." className="pl-10 bg-slate-800/50 border-slate-700" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  <TableHead className="text-slate-400">User</TableHead>
                  <TableHead className="text-slate-400">Email</TableHead>
                  <TableHead className="text-slate-400">Plan</TableHead>
                  <TableHead className="text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-400">Joined</TableHead>
                  <TableHead className="text-slate-400"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="border-slate-800 hover:bg-slate-800/30">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder-32px.png?height=32&width=32`} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-slate-200 font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-400">{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.plan === "Enterprise" ? "default" : user.plan === "Pro" ? "secondary" : "outline"}
                      >
                        {user.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === "Active" ? "default" : "secondary"}
                        className={user.status === "Active" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-400">{user.joined}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
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
