import {routes as organization} from "./views/Organization"
import Dashboard from "./views/Dashboard/component/Dashboard"

export const routes = [
    ...organization,
    { 
        exact: true,
        element: <Dashboard />,
        key: "/",
        name: "Home",
      },
      {
        exact: true,
        element: <Dashboard />,
        key: "/dashboard",
        name: "Home",
      },
]