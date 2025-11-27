import AttendanceCard from "../components/AttendanceCard";

const Attendance = () => {
  const employeeId = localStorage.getItem("employeeId"); // saved at login

  return <AttendanceCard employeeId={employeeId} />;
};

export default Attendance;
