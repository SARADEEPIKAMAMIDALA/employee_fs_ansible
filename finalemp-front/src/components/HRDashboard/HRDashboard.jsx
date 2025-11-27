"use client"
import { useState } from "react"
import Header from "./Header"
import Tabs from "./Tabs"
import Overview from "./Overview"
import Employees from "./Employees"
import Leaves from "./Leaves"
import Reports from "./Reports"
import "./HRDashboard.css"

const HRDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="dashboard">
      <Header user={user} onLogout={onLogout} />
      <div className="container">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "overview" && <Overview />}
        {activeTab === "employees" && <Employees />}
        {activeTab === "leaves" && <Leaves />}
        {activeTab === "reports" && <Reports />}
      </div>
    </div>
  )
}

export default HRDashboard
