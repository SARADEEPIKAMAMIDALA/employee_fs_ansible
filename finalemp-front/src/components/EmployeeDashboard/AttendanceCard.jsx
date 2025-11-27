// import { useEffect, useState } from "react";
// import styles from "../styles/AttendanceCard.module.css";

// const AttendanceCard = ({ employeeId }) => {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!employeeId) return;

//     const fetchAttendance = async () => {
//       try {
//         const response = await fetch(`http://localhost:7070/api/attendance/${employeeId}`);
//         const data = await response.json();

//         // Backend gives raw times → convert to correct status
//         const formatted = data.map((rec) => {
//           const checkInTime = rec.checkIn ? rec.checkIn : "--";
//           const checkOutTime = rec.checkOut ? rec.checkOut : "--";

//           let status = "Present";
//           if (rec.checkIn && rec.checkIn > "09:00:00") {
//             status = "Late";
//           }

//           return {
//             date: rec.date,
//             checkIn: checkInTime,
//             checkOut: checkOutTime,
//             hours: rec.hours || "--",
//             status: status,
//           };
//         });

//         setAttendanceData(formatted);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error loading attendance:", error);
//         setLoading(false);
//       }
//     };

//     fetchAttendance();
//   }, [employeeId]);

//   return (
//     <div className={styles.card}>
//       <div className={styles.header}>
//         <h3>Attendance Record</h3>
//         <p>Your daily check-in and check-out times</p>
//       </div>

//       {loading ? (
//         <p className={styles.loading}>Loading...</p>
//       ) : attendanceData.length === 0 ? (
//         <p className={styles.noData}>No attendance records found.</p>
//       ) : (
//         <div className={styles.list}>
//           {attendanceData.map((record, index) => (
//             <div key={index} className={styles.item}>
//               <div className={styles.dateStatus}>
//                 <p>{record.date}</p>
//                 <span
//                   className={`${styles.status} ${
//                     record.status === "Present" ? styles.present : styles.late
//                   }`}
//                 >
//                   {record.status}
//                 </span>
//               </div>

//               <div className={styles.details}>
//                 <div>
//                   <p className={styles.label}>Check In</p>
//                   <p className={styles.value}>{record.checkIn}</p>
//                 </div>
//                 <div>
//                   <p className={styles.label}>Check Out</p>
//                   <p className={styles.value}>{record.checkOut}</p>
//                 </div>
//                 <div>
//                   <p className={styles.label}>Hours</p>
//                   <p className={styles.value}>{record.hours}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AttendanceCard;


import styles from "../styles/AttendanceCard.module.css";

const AttendanceCard = ({ attendanceData }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <h3>Attendance Record</h3>
      <p>Your daily check-in and check-out times</p>
    </div>
    <div className={styles.list}>
      {attendanceData.map((record, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.dateStatus}>
            <p>{record.date}</p>
            <span className={`${styles.status} ${record.status === "Present" ? styles.present : styles.late}`}>
              {record.status}
            </span>
          </div>
          <div className={styles.details}>
            <div>
              <p className={styles.label}>Check In</p>
              <p className={styles.value}>{record.checkIn}</p>
            </div>
            <div>
              <p className={styles.label}>Check Out</p>
              <p className={styles.value}>{record.checkOut}</p>
            </div>
            <div>
              <p className={styles.label}>Hours</p>
              <p className={styles.value}>{record.hours}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AttendanceCard;

