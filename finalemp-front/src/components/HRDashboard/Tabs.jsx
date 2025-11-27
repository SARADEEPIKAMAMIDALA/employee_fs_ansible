import TabButton from "./TabButton"

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    <TabButton id="overview" label="Overview" isActive={activeTab === "overview"} onClick={setActiveTab} />
    <TabButton id="employees" label="Employees" isActive={activeTab === "employees"} onClick={setActiveTab} />
    <TabButton id="leaves" label="Leave Requests" isActive={activeTab === "leaves"} onClick={setActiveTab} />
    <TabButton id="reports" label="Reports" isActive={activeTab === "reports"} onClick={setActiveTab} />
  </div>
)

export default Tabs
