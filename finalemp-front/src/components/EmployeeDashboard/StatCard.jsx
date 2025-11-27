import styles from "../styles/StatCard.module.css";

const StatCard = ({ title, value, subtitle, icon: Icon }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <h3>{title}</h3>
      <Icon className={styles.icon} />
    </div>
    <div className={styles.value}>{value}</div>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);

export default StatCard;

