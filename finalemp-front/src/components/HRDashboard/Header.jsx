import { LogOut } from "lucide-react"

const Header = ({ user, onLogout }) => (
  <header className="header">
    <div className="header-left">
      <h1>HR Dashboard</h1>
    </div>
    <div className="header-right">
      <span className="welcome">Welcome, {user.name}</span>
      <button onClick={onLogout} className="logout-btn">
        <LogOut className="icon-small" />
        Logout
      </button>
    </div>
  </header>
)

export default Header
