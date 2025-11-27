
"use client";

import { useState } from "react";
import { Users, Mail, Lock, User } from "lucide-react";

const EmployeeSignUp = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
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
      const response = await fetch("http://localhost:30025/api/auth/employee/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        setMessage("Employee account created successfully!");
        setMessageType("success");
        setCredentials({ name: "", email: "", password: "" });
      } else {
        const errorData = await response.json();
        setMessage(`Sign-up failed: ${errorData.message || "An error occurred."}`);
        setMessageType("error");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      setMessage("Something went wrong. Please try again later.");
      setMessageType("error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-header-title">
            <Users className="icon" />
            <h1>Employee Sign Up</h1>
          </div>
          <p>Create a new employee account</p>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>
                <User className="label-icon" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
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
                placeholder="Enter a password"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Sign Up as Employee
            </button>
          </form>
          {message && <div className={`message-box ${messageType}`}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default EmployeeSignUp;