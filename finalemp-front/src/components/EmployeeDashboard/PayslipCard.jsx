import { CheckCircle, FileText, Download } from "lucide-react";
import styles from "../styles/PayslipCard.module.css";

const PayslipCard = ({ recentPayslips }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <h3>Payslip History</h3>
      <p>Download and view your salary statements</p>
    </div>
    <div className={styles.list}>
      {recentPayslips.map((payslip) => (
        <div key={payslip.id} className={styles.item}>
          <div className={styles.info}>
            <div className={styles.icon}>
              <FileText />
            </div>
            <div>
              <p className={styles.month}>{payslip.month}</p>
              <p className={styles.date}>Paid on {payslip.date}</p>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.amount}>
              <p>${payslip.amount.toLocaleString()}</p>
              <span className={styles.status}>
                <CheckCircle className={styles.statusIcon} /> {payslip.status}
              </span>
            </div>
            <button className={styles.downloadBtn}>
              <Download className={styles.downloadIcon} /> Download
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PayslipCard;
