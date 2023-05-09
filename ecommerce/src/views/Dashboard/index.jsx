import Dashboard from "./component/Dashboard";

export const routes = [
    {
      path: "/dashboard",
      exact: true,
      element: <Dashboard/>,
      name: "Home"
    }  
];