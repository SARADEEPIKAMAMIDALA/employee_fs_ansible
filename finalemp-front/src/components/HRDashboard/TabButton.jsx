const TabButton = ({ id, label, isActive, onClick }) => (
  <button onClick={() => onClick(id)} className={`tab-btn ${isActive ? "active" : ""}`}>
    {label}
  </button>
)

export default TabButton
