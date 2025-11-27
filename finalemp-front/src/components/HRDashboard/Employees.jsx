
import { useState, useEffect } from "react";
import { Search, Filter, UserPlus, MoreHorizontal, X } from "lucide-react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    department: "",
    salary: "",
  });

  // Fetch existing employees on load
  useEffect(() => {
    fetch("http://localhost:30025/api/employees/all")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error loading employees:", err));
  }, []);

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.role || !newEmployee.department || !newEmployee.salary) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:30025/api/employees/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newEmployee.name,
          role: newEmployee.role,
          department: newEmployee.department,
          salary: parseFloat(newEmployee.salary),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      const savedEmployee = await response.json();
      setEmployees([...employees, savedEmployee]);
      setNewEmployee({ name: "", role: "", department: "", salary: "" });
      setShowForm(false);
      alert("Employee added successfully!");
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="employees p-6 max-w-4xl mx-auto">
      <div className="employee-actions flex justify-between items-center mb-6 gap-2">
        <div className="search-container flex items-center border rounded-lg px-2">
          <Search className="search-icon w-4 h-4 mr-2 text-gray-500" />
          <input type="text" placeholder="Search employees..." className="border-none outline-none py-2 w-48" />
        </div>
        <div className="flex gap-2">
          <button className="btn flex items-center gap-1 border px-3 py-2 rounded-md hover:bg-gray-100">
            
          </button>
          <button
            className="btn primary flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
            onClick={() => setShowForm(!showForm)}
          >
            <UserPlus className="icon-small w-4 h-4" /> Add Employee
          </button>
        </div>
      </div>

      {showForm && (
        <div className="card p-4 border rounded-xl mb-6 shadow-sm bg-gray-50 relative">
          <button onClick={() => setShowForm(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black">
            <X className="w-4 h-4" />
          </button>
          <h3 className="text-lg font-semibold mb-4">Add New Employee</h3>
          <form onSubmit={handleAddEmployee} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded-md"
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              className="border p-2 rounded-md"
              value={newEmployee.role}
              onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
            />
            <input
              type="text"
              placeholder="Department"
              className="border p-2 rounded-md"
              value={newEmployee.department}
              onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
            />
            <input
              type="number"
              placeholder="Salary"
              className="border p-2 rounded-md"
              value={newEmployee.salary}
              onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
            />
            <button type="submit" className="col-span-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Save Employee
            </button>
          </form>
        </div>
      )}

      <div className="card border rounded-xl shadow-sm">
        <div className="card-header p-4 border-b">
          <h3 className="text-lg font-semibold">Employee Directory</h3>
          <p className="text-gray-500 text-sm">Manage your organization's workforce</p>
        </div>
        <div className="list divide-y">
          {employees.map((emp) => (
            <div key={emp.id} className="list-item flex justify-between items-center p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="avatar w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700">
                  {emp.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium">{emp.name}</p>
                  <p className="text-sm text-gray-500">{emp.role} • {emp.department}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${emp.salary.toLocaleString()}</p>
              </div>
              <button className="ml-3 text-gray-500 hover:text-black">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
