const Reports = () => {
  const departments = ["Engineering", "Design", "Product", "Marketing", "Sales"]

  return (
    <div className="reports-grid">
      <div className="card">
        <h3 className="card-title">Department Overview</h3>
        <div className="department-list">
          {departments.map(dept => (
            <div key={dept} className="department-item">
              <span>{dept}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${Math.floor(Math.random() * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Attendance Summary</h3>
        <ul className="attendance-list">
          <li>Average Attendance: <span className="highlight green">94.2%</span></li>
          <li>Late Arrivals: <span className="highlight orange">12</span></li>
          <li>Sick Days: <span>28</span></li>
          <li>Vacation Days: <span>45</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Reports


