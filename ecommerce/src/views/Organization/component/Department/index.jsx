import Deparment from "./component/Department"
import AddDepartment from "./component/AddDepartment";

export const departmentRoute = [
  {
    key: "/organisation/departments",
    exact: true,
    element: <Deparment />,
    name: "Department",
  },
  {
    key: "/organisation/departments/add",
    exact: true,
    element: <AddDepartment />,
    name: "Department",
  },
];
