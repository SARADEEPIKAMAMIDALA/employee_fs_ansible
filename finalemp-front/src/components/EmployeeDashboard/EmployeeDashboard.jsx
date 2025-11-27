
import { useState } from "react";
import { Users, Calendar, Clock, DollarSign, LogOut, Plus, CheckCircle, AlertCircle, FileText, Settings } from "lucide-react";

import styles from "../styles/EmployeeDashboard.module.css";
import TabButton from "./TabButton";
import StatCard from "./StatCard";
import Overview from "./Overview";
import PayslipCard from "./PayslipCard";
import LeaveCard from "./LeaveCard";
import AttendanceCard from "./AttendanceCard";
import ProfileCard from "./ProfileCard";

const EmployeeDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const recentPayslips = [
    { id: 1, month: "November 2024", amount: 6250, status: "Paid", date: "2024-11-30" },
    { id: 2, month: "October 2024", amount: 6250, status: "Paid", date: "2024-10-31" },
    { id: 3, month: "September 2024", amount: 6250, status: "Paid", date: "2024-09-30" },
  ];

  const leaveBalance = {
    vacation: { used: 8, total: 20 },
    sick: { used: 3, total: 10 },
    personal: { used: 2, total: 5 },
  };

  const myLeaveRequests = [
    { id: 1, type: "Vacation", dates: "Dec 20-24, 2024", status: "Pending", reason: "Holiday vacation" },
    { id: 2, type: "Sick Leave", dates: "Nov 15, 2024", status: "Approved", reason: "Medical appointment" },
  ];

  const attendanceData = [
    { date: "2024-12-16", checkIn: "09:00 AM", checkOut: "05:30 PM", hours: "8.5", status: "Present" },
    { date: "2024-12-15", checkIn: "09:15 AM", checkOut: "05:45 PM", hours: "8.5", status: "Late" },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Employee Portal</h1>
        <div className={styles.userSection}>
          <span>Welcome, {user.name}</span>
          <button onClick={onLogout}><LogOut /> Logout</button>
        </div>
      </header>

      {/* Tabs */}
      <div className={styles.tabNav}>
        <TabButton id="overview" label="Overview" isActive={activeTab === "overview"} onClick={setActiveTab} />
        <TabButton id="payslips" label="Payslips" isActive={activeTab === "payslips"} onClick={setActiveTab} />
        <TabButton id="leaves" label="Leave" isActive={activeTab === "leaves"} onClick={setActiveTab} />
        <TabButton id="attendance" label="Attendance" isActive={activeTab === "attendance"} onClick={setActiveTab} />
        <TabButton id="profile" label="Profile" isActive={activeTab === "profile"} onClick={setActiveTab} />
      </div>

      {/* Tab Content */}
      
      {activeTab === "overview" && <Overview leaveBalance={leaveBalance} recentPayslips={recentPayslips} />}

      {activeTab === "payslips" && <PayslipCard recentPayslips={recentPayslips} />}
      {activeTab === "leaves" && <LeaveCard leaveBalance={leaveBalance} myLeaveRequests={myLeaveRequests} />}
      {activeTab === "attendance" && <AttendanceCard attendanceData={attendanceData} />}
      {activeTab === "profile" && <ProfileCard user={user} />}
    </div>
  );
};

export default EmployeeDashboard;

