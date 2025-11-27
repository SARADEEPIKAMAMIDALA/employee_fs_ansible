
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

