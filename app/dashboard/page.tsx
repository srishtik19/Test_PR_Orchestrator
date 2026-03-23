import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard"
}

type Stat = {
  label: string
  value: string
  change: string
  up: boolean
}

type Activity = {
  user: string
  action: string
  time: string
  avatar: string
}

export default function DashboardPage() {
  const stats: Stat[] = [
    { label: "Total Revenue", value: "$48,295", change: "+12.5%", up: true },
    { label: "Active Users", value: "3,842", change: "+8.1%", up: true },
    { label: "New Orders", value: "214", change: "-3.2%", up: false },
    { label: "Conversion Rate", value: "4.7%", change: "+1.0%", up: true },
  ]

  const recentActivity: Activity[] = [
    { user: "Alice Chen", action: "Placed a new order", time: "2 min ago", avatar: "AC" },
    { user: "Bob Martinez", action: "Updated profile", time: "14 min ago", avatar: "BM" },
    { user: "Carol Smith", action: "Submitted ticket", time: "1 hr ago", avatar: "CS" },
  ]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="flex">
        <aside className="w-60 p-4">
          <div className="font-semibold mb-4">Acme Inc.</div>

          <nav className="space-y-2">
            {["Dashboard","Analytics","Orders","Customers","Settings"].map((x)=>(
              <Link key={x} href="#" className="block text-gray-500 hover:text-blue-500">
                {x}
              </Link>
            ))}
          </nav>

          <Link href="/login" className="block mt-6 text-sm text-red-500">
            Logout
          </Link>
        </aside>

        <div className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </header>

          <main className="space-y-6">
            <div>
              <h2 className="text-lg font-medium">Overview</h2>
              <p className="text-sm text-zinc-500">Latest stats</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-4 border rounded-lg">
                  <p className="text-sm text-zinc-500">{s.label}</p>
                  <p className="text-lg font-semibold">{s.value}</p>
                  <span className={s.up ? "text-green-600" : "text-red-600"}>
                    {s.change}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {recentActivity.map((a) => (
                <div key={a.user} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs">
                    {a.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{a.user}</p>
                    <p className="text-xs text-zinc-500">{a.action}</p>
                  </div>
                  <span className="ml-auto text-xs text-zinc-400">{a.time}</span>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}