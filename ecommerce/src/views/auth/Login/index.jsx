import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

export const loginRoutes = [
  {
    key: "/forgot-password",
    exact: true,
    element: <ForgotPassword />,
    name: "Forgot Password",
  },
  {
    key: "/login",
    exact: true,
    element: <Login />,
    name: "Login",
  },
];
