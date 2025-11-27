
// import { User, Settings } from "lucide-react";
// import styles from "../styles/ProfileCard.module.css";

// const ProfileCard = ({ user }) => (
//   <div className={styles.card}>
//     <div className={styles.header}>
//       <h3>Personal Information</h3>
//       <p>Update your profile details</p>
//     </div>

//     <div className={styles.content}>
//       <div className={styles.profileHeader}>
//         <div className={styles.avatar}>
//           <User />
//         </div>
//         <div>
//           <h3>{user.name}</h3>
//           <p>{user.role}</p>
//           <p>Employee ID: {user.employeeId}</p>
//         </div>
//       </div>

//       <div className={styles.formGrid}>
//         <div>
//           <label>Email</label>
//           <input type="email" value={user.email} readOnly />
//         </div>
//         <div>
//           <label>Phone</label>
//           <input type="tel" placeholder="+1 (555) 123-4567" />
//         </div>
//         <div>
//           <label>Department</label>
//           <input type="text" value={user.department} readOnly />
//         </div>
//         <div>
//           <label>Manager</label>
//           <input type="text" value="Sarah Johnson" readOnly />
//         </div>
//         <div>
//           <label>Start Date</label>
//           <input type="text" value="2023-01-15" readOnly />
//         </div>
//         <div>
//           <label>Location</label>
//           <input type="text" placeholder="New York, NY" />
//         </div>
//       </div>

//       <div className={styles.actions}>
//         <button>
//           <Settings /> Update Profile
//         </button>
//         <button>Change Password</button>
//       </div>
//     </div>
//   </div>
// );

// export default ProfileCard;
// import { useEffect, useState } from "react";
// import { User, Settings } from "lucide-react";
// import styles from "../styles/ProfileCard.module.css";

// const ProfileCard = () => {
//   const [user, setUser] = useState({
//     id: "",
//     employeeId: "",
//     name: "",
//     role: "",
//     email: "",
//     phone: "",
//     department: "",
//     manager: "",
//     startDate: "",
//     location: ""
//   });

//   // 🔹 Fetch Employee Profile from Backend
//   useEffect(() => {
//     fetch("http://localhost:7070/api/profile")
//       .then((res) => res.json())
//       .then((data) => setUser(data))
//       .catch((err) => console.error("Error fetching profile:", err));
//   }, []);

//   // 🔹 Handle Input Changes (Phone and Location only)
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // 🔹 Update Profile API Call
//   const handleUpdate = async () => {
//     try {
//       const response = await fetch("http://localhost:7070/api/profile/update", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user),
//       });

//       const updated = await response.json();
//       setUser(updated);
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Update failed:", error);
//       alert("Failed to update profile.");
//     }
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.header}>
//         <h3>Personal Information</h3>
//         <p>Update your profile details</p>
//       </div>

//       <div className={styles.content}>
//         <div className={styles.profileHeader}>
//           <div className={styles.avatar}>
//             <User />
//           </div>
//           <div>
//             <h3>{user.name}</h3>
//             <p>{user.role}</p>
//             <p>Employee ID: {user.employeeId}</p>
//           </div>
//         </div>

//         <div className={styles.formGrid}>
//           <div>
//             <label>Email</label>
//             <input type="email" value={user.email} readOnly />
//           </div>

//           <div>
//             <label>Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={user.phone}
//               onChange={handleChange}
//               placeholder="+1 (555) 123-4567"
//             />
//           </div>

//           <div>
//             <label>Department</label>
//             <input type="text" value={user.department} readOnly />
//           </div>

//           <div>
//             <label>Manager</label>
//             <input type="text" value={user.manager} readOnly />
//           </div>

//           <div>
//             <label>Start Date</label>
//             <input type="text" value={user.startDate} readOnly />
//           </div>

//           <div>
//             <label>Location</label>
//             <input
//               type="text"
//               name="location"
//               value={user.location}
//               onChange={handleChange}
//               placeholder="City, Country"
//             />
//           </div>
//         </div>

//         <div className={styles.actions}>
//           <button onClick={handleUpdate}>
//             <Settings /> Update Profile
//           </button>

//           <button>Change Password</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;

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
    fetch("http://localhost:7070/api/profile/EMP101")
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
      const response = await fetch("http://localhost:7070/api/profile/update", {
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
