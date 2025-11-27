const StatCard = ({ stat }) => (
  <div className="stat-card">
    <div className="stat-header">
      <h3>{stat.title}</h3>
      <stat.icon className="icon" />
    </div>
    <div className="stat-value">{stat.value}</div>
    <p className="stat-change">{stat.change} from last month</p>
  </div>
)

export default StatCard

