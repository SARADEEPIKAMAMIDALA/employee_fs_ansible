import styles from "../styles/TabButton.module.css";

const TabButton = ({ id, label, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`${styles.tabButton} ${isActive ? styles.active : ""}`}
  >
    {label}
  </button>
);

export default TabButton;
