// import { Plus, CheckCircle, Clock } from "lucide-react";
// import styles from "../styles/LeaveCard.module.css";

// const LeaveCard = ({ leaveBalance, myLeaveRequests }) => (
//   <div className={styles.container}>
//     <div className={styles.header}>
//       <div>
//         <h2>Leave Management</h2>
//         <p>Apply for leave and track your requests</p>
//       </div>
//       <button className={styles.applyBtn}>
//         <Plus /> Apply for Leave
//       </button>
//     </div>

//     <div className={styles.grid2}>
//       <div className={styles.balanceCard}>
//         <h3>Leave Balance</h3>
//         <div className={styles.list}>
//           {Object.entries(leaveBalance).map(([type, balance]) => (
//             <div key={type} className={styles.balanceItem}>
//               <div>
//                 <p>{type} Leave</p>
//                 <p>{balance.used} used of {balance.total} days</p>
//               </div>
//               <div>
//                 <p>{balance.total - balance.used}</p>
//                 <p>days left</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.applyCard}>
//         <h3>Apply for Leave</h3>
//         <form className={styles.form}>
//           <select>
//             <option>Select leave type</option>
//             <option>Vacation</option>
//             <option>Sick Leave</option>
//             <option>Personal</option>
//           </select>
//           <div className={styles.dateGrid}>
//             <input type="date" />
//             <input type="date" />
//           </div>
//           <textarea rows="3" placeholder="Reason for leave..."></textarea>
//           <button type="submit">Submit Request</button>
//         </form>
//       </div>
//     </div>

//     <div className={styles.requestsCard}>
//       <h3>My Leave Requests</h3>
//       <div className={styles.requestsList}>
//         {myLeaveRequests.map((request) => (
//           <div key={request.id} className={styles.requestItem}>
//             <div>
//               <span className={styles.type}>{request.type}</span>
//               <span className={styles.dates}>{request.dates}</span>
//               <p>{request.reason}</p>
//             </div>
//             <span className={`${styles.status} ${request.status === "Approved" ? styles.approved : styles.pending}`}>
//               {request.status === "Approved" && <CheckCircle />}
//               {request.status === "Pending" && <Clock />}
//               {request.status}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

//export default LeaveCard;

// import { useState } from "react";
// import { Plus, CheckCircle, Clock } from "lucide-react";
// import axios from "axios";
// import styles from "../styles/LeaveCard.module.css";

// const LeaveCard = ({ leaveBalance, myLeaveRequests, employeeName }) => {
//   const [form, setForm] = useState({
//     type: "",
//     startDate: "",
//     endDate: "",
//     reason: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:7070/api/leaves/apply", {
//       employeeName,
//       type: form.type,
//       startDate: form.startDate,
//       endDate: form.endDate,
//       reason: form.reason,
//     });
//     alert("Leave request submitted!");
//   };

//   return (
//     <div className={styles.container}>
//       {/* header & balance omitted for brevity */}

//       <div className={styles.applyCard}>
//         <h3>Apply for Leave</h3>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <select name="type" value={form.type} onChange={handleChange}>
//             <option value="">Select leave type</option>
//             <option>Vacation</option>
//             <option>Sick Leave</option>
//             <option>Personal</option>
//           </select>
//           <div className={styles.dateGrid}>
//             <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />
//             <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />
//           </div>
//           <textarea name="reason" rows="3" value={form.reason} onChange={handleChange} placeholder="Reason for leave..."></textarea>
//           <button type="submit">Submit Request</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LeaveCard;

import { useState, useEffect } from "react";
import { Plus, CheckCircle, Clock } from "lucide-react";
import axios from "axios";
import styles from "../styles/LeaveCard.module.css";

const LeaveCard = ({ leaveBalance, employeeName }) => {
  const [form, setForm] = useState({
    type: "",
    startDate: "",
    endDate: "",
    reason: ""
  });

  const [myLeaveRequests, setMyLeaveRequests] = useState([]);

  // 🔹 Fetch leave requests for this employee on mount
  useEffect(() => {
    fetchMyLeaves();
  }, []);

  const fetchMyLeaves = async () => {
    try {
      const res = await axios.get(
        `http://localhost:7070/api/leaves/employee/${employeeName}`
      );
      setMyLeaveRequests(res.data);
    } catch (error) {
      console.error("Error fetching leave requests:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7070/api/leaves/apply", {
        employeeName,
        type: form.type,
        startDate: form.startDate,
        endDate: form.endDate,
        reason: form.reason,
      });
      alert("Leave request submitted!");
      setForm({ type: "", startDate: "", endDate: "", reason: "" });
      fetchMyLeaves(); // 🔁 Refresh list after submission
    } catch (error) {
      console.error("Error submitting leave:", error);
      alert("Failed to submit leave request");
    }
  };

  return (
    <div className={styles.container}>
      {/* ===== Header Section ===== */}
      <div className={styles.header}>
        <div>
          <h2>Leave Management</h2>
          <p>Apply for leave and track your requests</p>
        </div>
        <button className={styles.applyBtn}>
          <Plus /> Apply for Leave
        </button>
      </div>

      {/* ===== Leave Balance + Apply Form ===== */}
      <div className={styles.grid2}>
        {/* ----- Leave Balance Card ----- */}
        <div className={styles.balanceCard}>
          <h3>Leave Balance</h3>
          <div className={styles.list}>
            {Object.entries(leaveBalance).map(([type, balance]) => (
              <div key={type} className={styles.balanceItem}>
                <div>
                  <p>{type} Leave</p>
                  <p>
                    {balance.used} used of {balance.total} days
                  </p>
                </div>
                <div>
                  <p>{balance.total - balance.used}</p>
                  <p>days left</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----- Apply for Leave Form ----- */}
        <div className={styles.applyCard}>
          <h3>Apply for Leave</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            >
              <option value="">Select leave type</option>
              <option>Vacation</option>
              <option>Sick Leave</option>
              <option>Personal</option>
            </select>
            <div className={styles.dateGrid}>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="reason"
              rows="3"
              value={form.reason}
              onChange={handleChange}
              placeholder="Reason for leave..."
              required
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>

      {/* ===== My Leave Requests Section ===== */}
      <div className={styles.requestsCard}>
        <h3>My Leave Requests</h3>
        <div className={styles.requestsList}>
          {myLeaveRequests.length === 0 ? (
            <p>No leave requests yet.</p>
          ) : (
            myLeaveRequests.map((request) => (
              <div key={request.id} className={styles.requestItem}>
                <div>
                  <span className={styles.type}>{request.type}</span>
                  <span className={styles.dates}>
                    {request.startDate} - {request.endDate}
                  </span>
                  <p>{request.reason}</p>
                </div>
                <span
                  className={`${styles.status} ${
                    request.status === "Approved"
                      ? styles.approved
                      : styles.pending
                  }`}
                >
                  {request.status === "Approved" && <CheckCircle />}
                  {request.status === "Pending" && <Clock />}
                  {request.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveCard;
