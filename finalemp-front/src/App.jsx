
// export default App
// "use client"

// import { useState } from "react"
// import EmployeeLogin from "./components/Login/EmployeeLogin"
// import HRLogin from "./components/Login/HRLogin"
// import HRDashboard from "./components/HRDashboard/HRDashboard"
// import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard"

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userRole, setUserRole] = useState(null)
//   const [currentUser, setCurrentUser] = useState(null)
//   const [activeTab, setActiveTab] = useState("employee") // toggle between Employee and HR login
//   const [loading, setLoading] = useState(false)

//   const handleLogin = async (role, credentials) => {
//     setLoading(true)
//     try {
//       const url = `http://localhost:8080/api/auth/${role}/login` // backend endpoint
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(credentials),
//       })

//       if (!response.ok) {
//         const err = await response.json()
//         throw new Error(err.message || "Login failed")
//       }

//       const data = await response.json()

//       // Save JWT token and role
//       localStorage.setItem("token", data.token)
//       localStorage.setItem("role", data.role)

//       setCurrentUser({ id: data.userId, role: data.role, email: credentials.email })
//       setUserRole(role)
//       setIsLoggedIn(true)
//     } catch (error) {
//       alert(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setCurrentUser(null)
//     setUserRole(null)
//     setActiveTab("employee") // reset tab to Employee on logout
//     localStorage.removeItem("token")
//     localStorage.removeItem("role")
//   }

//   if (!isLoggedIn) {
//     return (
//       <div>
//         {/* Tab selector */}
//         <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
//           <button
//             onClick={() => setActiveTab("employee")}
//             style={{
//               padding: "0.5rem 1rem",
//               marginRight: "0.5rem",
//               background: activeTab === "employee" ? "#2563eb" : "#e5e7eb",
//               color: activeTab === "employee" ? "#fff" : "#000",
//               border: "none",
//               borderRadius: "0.25rem",
//               cursor: "pointer",
//             }}
//           >
//             Employee Login
//           </button>
//           <button
//             onClick={() => setActiveTab("hr")}
//             style={{
//               padding: "0.5rem 1rem",
//               background: activeTab === "hr" ? "#2563eb" : "#e5e7eb",
//               color: activeTab === "hr" ? "#fff" : "#000",
//               border: "none",
//               borderRadius: "0.25rem",
//               cursor: "pointer",
//             }}
//           >
//             HR Login
//           </button>
//         </div>

//         {/* Render appropriate login form */}
//         {activeTab === "employee" ? (
//           <EmployeeLogin onLogin={handleLogin} />
//         ) : (
//           <HRLogin onLogin={handleLogin} />
//         )}

//         {loading && <p style={{ textAlign: "center" }}>Logging in...</p>}
//       </div>
//     )
//   }

//   return (
//     <div className="App">
//       {userRole === "hr" ? (
//         <HRDashboard user={currentUser} onLogout={handleLogout} />
//       ) : (
//         <EmployeeDashboard user={currentUser} onLogout={handleLogout} />
//       )}
//     </div>
//   )
// }

// export default App

// "use client"

// import { useState } from "react"
// import EmployeeLogin from "./components/Login/EmployeeLogin"
// import HRLogin from "./components/Login/HRLogin"
// import EmployeeSignUp from "./components/Login/EmployeeSignUp"
// import HRSignUp from "./components/Login/HRSignUp"
// import HRDashboard from "./components/HRDashboard/HRDashboard"
// import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard"

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userRole, setUserRole] = useState(null)
//   const [currentUser, setCurrentUser] = useState(null)
//   const [authType, setAuthType] = useState("login") // 'login' or 'signup'
//   const [activeRole, setActiveRole] = useState("employee") // 'employee' or 'hr'
//   const [loading, setLoading] = useState(false)

//   const handleLogin = async (role, credentials) => {
//     setLoading(true)
//     try {
//       const url = `http://localhost:8081/api/auth/${role}/login` // backend endpoint
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(credentials),
//       })

//       if (!response.ok) {
//         const err = await response.json()
//         throw new Error(err.message || "Login failed")
//       }

//       const data = await response.json()

//       // Save JWT token and role
//       localStorage.setItem("token", data.token)
//       localStorage.setItem("role", data.role)

//       setCurrentUser({ id: data.userId, role: data.role, email: credentials.email })
//       setUserRole(role)
//       setIsLoggedIn(true)
//     } catch (error) {
//       alert(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setCurrentUser(null)
//     setUserRole(null)
//     setActiveRole("employee") // reset tab to Employee on logout
//     localStorage.removeItem("token")
//     localStorage.removeItem("role")
//   }

//   if (!isLoggedIn) {
//     return (
//       <div className="login-container">
//         <div className="login-card">
//           <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
//             <button onClick={() => setAuthType("login")} className={authType === "login" ? "active" : ""}>
//               Login
//             </button>
//             <button onClick={() => setAuthType("signup")} className={authType === "signup" ? "active" : ""}>
//               Sign Up
//             </button>
//           </div>

//           <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
//             <button onClick={() => setActiveRole("employee")} className={activeRole === "employee" ? "active" : ""}>
//               Employee
//             </button>
//             <button onClick={() => setActiveRole("hr")} className={activeRole === "hr" ? "active" : ""}>
//               HR Admin
//             </button>
//           </div>

//           {authType === "login" ? (
//             activeRole === "employee" ? (
//               <EmployeeLogin onLogin={handleLogin} />
//             ) : (
//               <HRLogin onLogin={handleLogin} />
//             )
//           ) : (
//             activeRole === "employee" ? (
//               <EmployeeSignUp />
//             ) : (
//               <HRSignUp />
//             )
//           )}
//           {loading && <p style={{ textAlign: "center", marginTop: "1rem" }}>Logging in...</p>}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="App">
//       {userRole === "hr" ? (
//         <HRDashboard user={currentUser} onLogout={handleLogout} />
//       ) : (
//         <EmployeeDashboard user={currentUser} onLogout={handleLogout} />
//       )}
//     </div>
//   )
// }

// export default App

// "use client";

// import { useState } from "react";
// import EmployeeLogin from "./components/Login/EmployeeLogin";
// import HRLogin from "./components/Login/HRLogin";
// import EmployeeSignUp from "./components/Login/EmployeeSignUp";
// import HRSignUp from "./components/Login/HRSignUp";
// import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard";
// import HRDashboard from "./components/HRDashboard/HRDashboard";
// import "./components/Login/LoginDashboard.css";

// function App() {
//   const [step, setStep] = useState("selectRole"); // "selectRole", "auth", "dashboard"
//   const [activeRole, setActiveRole] = useState(null); // "employee" | "hr"
//   const [authType, setAuthType] = useState("login"); // "login" | "signup"
//   const [user, setUser] = useState(null);

//   const handleRoleSelection = (role) => {
//     setActiveRole(role);
//     setStep("auth");
//   };

//   const handleLogin = (role, userData) => {
//     setUser({ ...userData, role });
//     setStep("dashboard");
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setActiveRole(null);
//     setStep("selectRole");
//   };

//   // --- Step 1: Select Role ---
//   if (step === "selectRole") {
//     return (
//       <div className="main-auth-container">
//         <h1 className="auth-title">EMS Access</h1>
//         <p className="auth-subtitle">
//           Select your role and authentication method below.
//         </p>

//         <div className="toggle-role-buttons">
//           <button onClick={() => handleRoleSelection("employee")} className="active">
//             👨‍💼 Employee
//           </button>
//           <button onClick={() => handleRoleSelection("hr")}>
//             🛡️ HR Admin
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // --- Step 2: Login / Signup ---
//   if (step === "auth") {
//     return (
//       <div className="main-auth-container">
//         <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
//           <button
//             onClick={() => setAuthType("login")}
//             className={authType === "login" ? "active" : ""}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setAuthType("signup")}
//             className={authType === "signup" ? "active" : ""}
//           >
//             Sign Up
//           </button>
//         </div>

//         {authType === "login" ? (
//           activeRole === "employee" ? (
//             <EmployeeLogin onLogin={handleLogin} />
//           ) : (
//             <HRLogin onLogin={handleLogin} />
//           )
//         ) : activeRole === "employee" ? (
//           <EmployeeSignUp />
//         ) : (
//           <HRSignUp />
//         )}

//         <div style={{ textAlign: "center", marginTop: "1rem" }}>
//           <button className="back-btn" onClick={() => setStep("selectRole")}>
//             ← Back to Role Selection
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // --- Step 3: Dashboard ---
//   if (step === "dashboard") {
//     return user?.role === "hr" ? (
//       <HRDashboard user={user} onLogout={handleLogout} />
//     ) : (
//       <EmployeeDashboard user={user} onLogout={handleLogout} />
//     );
//   }

//   return null;
// }

// export default App;


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
      const url = `http://localhost:7070/api/auth/${role}/login` // backend endpoint
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


