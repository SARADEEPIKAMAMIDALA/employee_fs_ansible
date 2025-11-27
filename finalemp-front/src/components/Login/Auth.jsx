// "use client"

// import { useState } from "react"
// import EmployeeLogin from "./EmployeeLogin.jsx"
// import HRLogin from "./HRLogin.jsx"
// import EmployeeSignUp from "./EmployeeSignUp.jsx"
// import HRSignUp from "./HRSignUp.jsx"
// import "./LoginDashboard.css"

// const Auth = ({ onLogin }) => {
//   const [authType, setAuthType] = useState("login") // 'login' or 'signup'
//   const [activeRole, setActiveRole] = useState("employee") // 'employee' or 'hr'

//   const renderAuthComponent = () => {
//     if (authType === "login") {
//       return activeRole === "employee" ? <EmployeeLogin onLogin={onLogin} /> : <HRLogin onLogin={onLogin} />
//     } else {
//       return activeRole === "employee" ? <EmployeeSignUp /> : <HRSignUp />
//     }
//   }

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
//         <button onClick={() => setAuthType("login")} className={authType === "login" ? "active" : ""}>
//           Login
//         </button>
//         <button onClick={() => setAuthType("signup")} className={authType === "signup" ? "active" : ""}>
//           Sign Up
//         </button>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
//         <button onClick={() => setActiveRole("employee")} className={activeRole === "employee" ? "active" : ""}>
//           Employee
//         </button>
//         <button onClick={() => setActiveRole("hr")} className={activeRole === "hr" ? "active" : ""}>
//           HR Admin
//         </button>
//       </div>

//       {renderAuthComponent()}
//     </div>
//   )
// }

// export default Auth;

// "use client";

// import { useState } from "react";
// import { Users, Shield, Mail, Lock, User } from "lucide-react";
// import "../components/LoginDashboard.css"; // The new combined CSS file

// const Auth = ({ onLogin }) => {
//   const [activePanel, setActivePanel] = useState("login-employee"); // Can be 'login-employee', 'login-hr', 'signup-employee', 'signup-hr'

//   const getActiveState = () => {
//     return activePanel.includes("signup") ? "active" : "";
//   };

//   const isEmployeeForm = activePanel.includes("employee");

//   const handleToggle = (formType, role) => {
//     setActivePanel(`${formType}-${role}`);
//   };

//   return (
//     <div className="main-auth-container">
//       <div className="toggle-role-buttons">
//         <button onClick={() => setActivePanel(activePanel.replace("hr", "employee"))} className={isEmployeeForm ? "active" : ""}>
//           Employee
//         </button>
//         <button onClick={() => setActivePanel(activePanel.replace("employee", "hr"))} className={!isEmployeeForm ? "active" : ""}>
//           HR Admin
//         </button>
//       </div>

//       <div className={`container ${getActiveState()}`} id="container">
//         {/* Sign Up Form Container */}
//         <div className="form-container sign-up">
//           <form>
//             <h1>{isEmployeeForm ? "Employee Sign Up" : "HR Admin Sign Up"}</h1>
//             {/* Social Icons (as in your original code, can be omitted) */}
//             <div className="social-icons">
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-google-plus-g"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-facebook-f"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-github"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span>or use your email for registration</span>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <button>Sign Up</button>
//           </form>
//         </div>

//         {/* Sign In Form Container */}
//         <div className="form-container sign-in">
//           <form>
//             <h1>{isEmployeeForm ? "Employee Sign In" : "HR Admin Sign In"}</h1>
//             {/* Social Icons */}
//             <div className="social-icons">
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-google-plus-g"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-facebook-f"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-github"></i>
//               </a>
//               <a href="#" className="icon">
//                 <i className="fa-brands fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span>or use your email password</span>
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <a href="#">Forget Your Password?</a>
//             <button>Sign In</button>
//           </form>
//         </div>

//         {/* Toggle Panel Container */}
//         <div className="toggle-container">
//           <div className="toggle">
//             <div className="toggle-panel toggle-left">
//               <h1>Welcome Back!</h1>
//               <p>Enter your personal details to use all of site features</p>
//               <button className="hidden" onClick={() => handleToggle("login", isEmployeeForm ? "employee" : "hr")}>
//                 Sign In
//               </button>
//             </div>
//             <div className="toggle-panel toggle-right">
//               <h1>Hello, Friend!</h1>
//               <p>Register with your personal details to use all of site features</p>
//               <button className="hidden" onClick={() => handleToggle("signup", isEmployeeForm ? "employee" : "hr")}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// "use client";

// import { useState } from "react";
// import { Users, Shield } from "lucide-react";
// import EmployeeLogin from "./EmployeeLogin";
// import HRLogin from "./HRLogin";
// import "./LoginDashboard.css";

// const Auth = ({ onLogin }) => {
//   const [activeRole, setActiveRole] = useState("employee"); // 'employee' or 'hr'

//   return (
//     <div className="main-auth-container">
//       <h1 className="auth-title">Employee Management System</h1>

//       {/* Role Selection Buttons */}
//       <div className="toggle-role-buttons">
//         <button
//           onClick={() => setActiveRole("employee")}
//           className={activeRole === "employee" ? "active" : ""}
//         >
//           <Users className="icon" /> Employee Login
//         </button>
//         <button
//           onClick={() => setActiveRole("hr")}
//           className={activeRole === "hr" ? "active" : ""}
//         >
//           <Shield className="icon" /> HR Admin Login
//         </button>
//       </div>

//       {/* Render the appropriate login form */}
//       <div className="login-form-wrapper">
//         {activeRole === "employee" ? (
//           <EmployeeLogin onLogin={onLogin} />
//         ) : (
//           <HRLogin onLogin={onLogin} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Auth;
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