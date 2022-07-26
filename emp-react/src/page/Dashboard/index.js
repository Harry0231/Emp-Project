import React, { useState } from "react";
import { employeesData } from "../../data";
import Swal from "sweetalert2";
import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete",
      text: "you won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "yes,delete it!",
      cancelButtonText: "no,cancel",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been Deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}

      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
    </div>
  );
};

export default Dashboard;
