// import { CheckCircle, XCircle } from "lucide-react"

// const leaveRequests = [
//   { id: 1, employee: "John Smith", type: "Vacation", dates: "Dec 20-24, 2024", status: "Pending", reason: "Holiday vacation" },
//   { id: 2, employee: "Emily Davis", type: "Sick Leave", dates: "Dec 15, 2024", status: "Approved", reason: "Medical appointment" },
// ]

// const Leaves = () => (
//   <div className="card">
//     <div className="card-header">
//       <h3>Leave Requests</h3>
//       <p>Review and manage employee leave applications</p>
//     </div>
//     <div className="list">
//       {leaveRequests.map(req => (
//         <div key={req.id} className="list-item bordered">
//           <div className="flex-left">
//             <p className="name">{req.employee}</p>
//             <span className="status info">{req.type}</span>
//             <p className="dates">{req.dates}</p>
//             <p>{req.reason}</p>
//           </div>
//           <div className="flex-right">
//             <span className={`status ${req.status.toLowerCase()}`}>{req.status}</span>
//             {req.status === "Pending" && (
//               <div className="btn-group">
//                 <button className="btn success"><CheckCircle className="icon-small" />Approve</button>
//                 <button className="btn danger"><XCircle className="icon-small" />Reject</button>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// export default Leaves


import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import axios from "axios";

const Leaves = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/api/leaves/all").then(res => {
      setLeaveRequests(res.data);
    });
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:7070/api/leaves/${id}/status?status=${status}`);
    setLeaveRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Leave Requests</h3>
        <p>Review and manage employee leave applications</p>
      </div>
      <div className="list">
        {leaveRequests.map(req => (
          <div key={req.id} className="list-item bordered">
            <div className="flex-left">
              <p className="name">{req.employeeName}</p>
              <span className="status info">{req.type}</span>
              <p className="dates">{req.startDate} to {req.endDate}</p>
              <p>{req.reason}</p>
            </div>
            <div className="flex-right">
              <span className={`status ${req.status.toLowerCase()}`}>{req.status}</span>
              {req.status === "Pending" && (
                <div className="btn-group">
                  <button className="btn success" onClick={() => updateStatus(req.id, "Approved")}><CheckCircle className="icon-small" />Approve</button>
                  <button className="btn danger" onClick={() => updateStatus(req.id, "Rejected")}><XCircle className="icon-small" />Reject</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaves;
