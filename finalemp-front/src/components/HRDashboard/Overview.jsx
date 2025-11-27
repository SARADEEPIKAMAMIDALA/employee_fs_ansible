import StatCard from "./StatCard"
import { Users, TrendingUp, Calendar, DollarSign } from "lucide-react"

const Overview = () => {
  const stats = [
    { title: "Total Employees", value: "124", icon: Users, change: "+12%" },
    { title: "Active Projects", value: "18", icon: TrendingUp, change: "+5%" },
    { title: "Pending Leaves", value: "7", icon: Calendar, change: "-2%" },
    { title: "Monthly Payroll", value: "$485K", icon: DollarSign, change: "+8%" },
  ]

  const employees = [
    { id: 1, name: "John Smith", role: "Software Developer" },
    { id: 2, name: "Emily Davis", role: "UX Designer" },
    { id: 3, name: "Michael Brown", role: "Product Manager" },
  ]

  return (
    <div className="overview">
      <div className="stats-grid">
        {stats.map((stat, index) => <StatCard key={index} stat={stat} />)}
      </div>

      <div className="overview-grid">
        <div className="card">
          <h3 className="card-title">Recent Hires</h3>
          <div className="list">
            {employees.map(emp => (
              <div key={emp.id} className="list-item">
                <div className="avatar">{emp.name.split(" ").map(n => n[0]).join("")}</div>
                <div className="list-info">
                  <p className="name">{emp.name}</p>
                  <p className="role">{emp.role}</p>
                </div>
                <span className="status new">New</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
