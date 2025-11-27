
// "use client";

// import { useState } from "react";
// import { Users, Mail, Lock } from "lucide-react";
// import "./LoginDashboard.css";

// const EmployeeLogin = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState(null);
//   const [messageType, setMessageType] = useState(null);

//   const handleInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     setMessageType(null);
//     try {
//       const response = await fetch("http://localhost:30025/api/auth/employee/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(credentials),
//       });
//       const result = await response.json();

//       if (result === true) {
//         setMessage("Login successful!");
//         setMessageType("success");
//         onLogin("employee", credentials);
//       } else {
//         setMessage("Invalid email or password.");
//         setMessageType("error");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage("Something went wrong. Please try again later.");
//       setMessageType("error");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="login-header">
//           <div className="login-header-title">
//             <Users className="icon" />
//             <h1>Employee Login</h1>
//           </div>
//           <p>Employee Management System</p>
//         </div>
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="form-group">
//               <label>
//                 <Mail className="label-icon" /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={credentials.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>
//                 <Lock className="label-icon" /> Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleInputChange}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <button type="submit" className="login-btn">
//               Sign In as Employee
//             </button>
//           </form>
//           {message && <div className={`message-box ${messageType}`}>{message}</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeLogin;


"use client";

import { useState } from "react";
import { Users, Mail, Lock } from "lucide-react";
import "./LoginDashboard.css";

const API_BASE_URL = "http://localhost:30025"; // Backend NodePort

const EmployeeLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setMessageType(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/employee/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("role", "employee");

        setMessage("Login successful!");
        setMessageType("success");

        // Redirect to dashboard
        window.location.href = "/employee-dashboard";
      } else {
        setMessage(data.message || "Invalid credentials");
        setMessageType("error");
      }

    } catch (error) {
      console.error("Login error:", error);
      setMessage("Backend not reachable. Check server.");
      setMessageType("error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-header-title">
            <Users className="icon" />
            <h1>Employee Login</h1>
          </div>
          <p>Employee Management System</p>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>
                <Mail className="label-icon" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Lock className="label-icon" /> Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In as Employee
            </button>
          </form>

          {message && <div className={`message-box ${messageType}`}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
