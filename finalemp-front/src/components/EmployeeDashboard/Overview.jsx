import "./EmployeeDashboard.css";
import StatCard from "./StatCard";
import { DollarSign, Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";

const Overview = ({ leaveBalance, recentPayslips }) => {
  return (
    <div className="overview">
      {/* Quick Stats */}
      <div className="stats-grid">
        <StatCard title="This Month" value="$6,250" subtitle="Gross salary" icon={DollarSign} />
        <StatCard
          title="Leave Balance"
          value={leaveBalance.vacation.total - leaveBalance.vacation.used}
          subtitle="Vacation days left"
          icon={Calendar}
        />
        <StatCard title="Attendance" value="96%" subtitle="This month" icon={Clock} />
        <StatCard title="Pending" value="1" subtitle="Leave request" icon={AlertCircle} />
      </div>

      {/* Recent Activity */}
      <div className="activity-grid">
        <div className="card">
          <h3>Recent Payslips</h3>
          <div className="list">
            {recentPayslips.slice(0, 3).map((payslip) => (
              <div key={payslip.id} className="list-item">
                <div>
                  <p className="font-medium">{payslip.month}</p>
                  <p className="text-sm">{payslip.date}</p>
                </div>
                <div className="payslip-right">
                  <span className="font-medium">${payslip.amount.toLocaleString()}</span>
                  <span className="status success">
                    <CheckCircle className="icon-small" />
                    {payslip.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Leave Summary</h3>
          <div className="list">
            {Object.entries(leaveBalance).map(([type, balance]) => (
              <div key={type}>
                <div className="flex-between">
                  <span className="capitalize">{type}</span>
                  <span>{balance.used}/{balance.total} days</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${(balance.used / balance.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
