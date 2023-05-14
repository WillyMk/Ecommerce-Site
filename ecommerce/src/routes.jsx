import {routes as organization} from "./views/Organization"
import Dashboard from "./views/Dashboard/component/Dashboard"
import { routes as Products} from "./views/Products"

export const routes = [
    ...organization,
    ...Products,
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