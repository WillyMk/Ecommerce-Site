import Employee from "./component/Employee";
import AddEmployee from "./component/AddEmployee";

export const employeeRoute = [
  {
    key: "/organisation/employees",
    exact: true,
    element: <Employee />,
    name: "Employee",
  },
  {
    key: "/organisation/employees/add",
    exact: true,
    element: <AddEmployee />,
    name: "Employee",
  },
];
