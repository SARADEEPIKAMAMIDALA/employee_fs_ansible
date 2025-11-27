
"use client"

import { useState } from "react"
import EmployeeLogin from "./components/Login/EmployeeLogin"
import HRLogin from "./components/Login/HRLogin"
import EmployeeSignUp from "./components/Login/EmployeeSignUp"
import HRSignUp from "./components/Login/HRSignUp"
import HRDashboard from "./components/HRDashboard/HRDashboard"
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [authType, setAuthType] = useState("login") // 'login' or 'signup'
  const [activeRole, setActiveRole] = useState("employee") // 'employee' or 'hr'
  const [loading, setLoading] = useState(false)

  const handleLogin = async (role, credentials) => {
    setLoading(true)
    try {
      const url = `http://localhost:30025/api/auth/${role}/login` // backend endpoint
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.message || "Login failed")
      }

      const data = await response.json()

      // Save JWT token and role
      localStorage.setItem("token", data.token)
      localStorage.setItem("role", data.role)

      setCurrentUser({ id: data.userId, role: data.role, email: credentials.email })
      setUserRole(role)
      setIsLoggedIn(true)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    setUserRole(null)
    setActiveRole("employee") // reset tab to Employee on logout
    localStorage.removeItem("token")
    localStorage.removeItem("role")
  }

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
            <button onClick={() => setAuthType("login")} className={authType === "login" ? "active" : ""}>
              Login
            </button>
            <button onClick={() => setAuthType("signup")} className={authType === "signup" ? "active" : ""}>
              Sign Up
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
            <button onClick={() => setActiveRole("employee")} className={activeRole === "employee" ? "active" : ""}>
              Employee
            </button>
            <button onClick={() => setActiveRole("hr")} className={activeRole === "hr" ? "active" : ""}>
              HR Admin
            </button>
          </div>

          {authType === "login" ? (
            activeRole === "employee" ? (
              <EmployeeLogin onLogin={handleLogin} />
            ) : (
              <HRLogin onLogin={handleLogin} />
            )
          ) : (
            activeRole === "employee" ? (
              <EmployeeSignUp />
            ) : (
              <HRSignUp />
            )
          )}
          {loading && <p style={{ textAlign: "center", marginTop: "1rem" }}>Logging in...</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {userRole === "hr" ? (
        <HRDashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <EmployeeDashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App


