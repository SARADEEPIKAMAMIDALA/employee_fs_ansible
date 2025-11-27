
import { useEffect, useState } from "react";
import { User, Settings } from "lucide-react";
import styles from "../styles/ProfileCard.module.css";

const ProfileCard = () => {
  const [user, setUser] = useState({
    id: "",
    employeeId: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    department: "",
    manager: "",
    startDate: "",
    location: ""
  });

  // Fetch user from backend
  useEffect(() => {
    fetch("http://localhost:30025/api/profile/EMP101")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  // Generic input handler for ALL fields
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Update profile
  const handleUpdate = async () => {
    try {
      const response = await fetch("http://localhost:30025/api/profile/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const updated = await response.json();
      setUser(updated);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Personal Information</h3>
        <p>Update your profile details</p>
      </div>

      <div className={styles.content}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}><User /></div>
          <div>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <p>Employee ID: {user.employeeId}</p>
          </div>
        </div>

        <div className={styles.formGrid}>

          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Role</label>
            <input
              name="role"
              type="text"
              value={user.role}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              name="phone"
              type="tel"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Department</label>
            <input
              name="department"
              type="text"
              value={user.department}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Manager</label>
            <input
              name="manager"
              type="text"
              value={user.manager}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Start Date</label>
            <input
              name="startDate"
              type="date"
              value={user.startDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Location</label>
            <input
              name="location"
              type="text"
              value={user.location}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className={styles.actions}>
          <button onClick={handleUpdate}>
            <Settings /> Update Profile
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
