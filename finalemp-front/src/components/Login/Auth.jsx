
"use client";

import { useState } from "react";
import { Users, Shield } from "lucide-react";
import EmployeeLogin from "./EmployeeLogin";
import HRLogin from "./HRLogin";
import "./LoginDashboard.css";

const Auth = ({ onLogin }) => {
  const [activeRole, setActiveRole] = useState("employee"); // 'employee' or 'hr'

  return (
    <div className="main-auth-container">
      <h1 className="auth-title">Employee Management System</h1>

      {/* Role Selection Buttons */}
      <div className="toggle-role-buttons">
        <button
          onClick={() => setActiveRole("employee")}
          className={activeRole === "employee" ? "active" : ""}
        >
          <Users className="icon" /> Employee Login
        </button>
        <button
          onClick={() => setActiveRole("hr")}
          className={activeRole === "hr" ? "active" : ""}
        >
          <Shield className="icon" /> HR Admin Login
        </button>
      </div>

      {/* Render the appropriate login form */}
      <div className="login-form-wrapper">
        {activeRole === "employee" ? (
          <EmployeeLogin onLogin={onLogin} />
        ) : (
          <HRLogin onLogin={onLogin} />
        )}
      </div>
    </div>
  );
};

export default Auth;