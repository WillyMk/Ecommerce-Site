import React, { useState } from "react";
import { message } from "antd";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    if (userName.length > 0 && password.length > 0) {
      if (userName === "user" && password === "123") {
		setLoading(true);
        localStorage.setItem("access_token", true);
        navigate("/");
        message.success("Login successful");
		setLoading(false);
      } else {
        message.warning("Incorrect credentials !!!");
      }
    } else {
      message.warning("Please enter a user name and password to login");
    }
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form onSubmit={handleSubmit} action="" method="">
          <span className="login-form-title">Login Page</span>
          <img
            className="avatar"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
            alt=""
            align="center"
          />
          <div className="wrap-input100">
            <input
              className="input100"
              type="text"
              name="User Name"
              placeholder="Enter user name"
              value={userName}
              onChange={handleUserNameChange}
            />
            <span className="focus-efecto"></span>
          </div>
          <div className="wrap-input100">
            <input
              className="input100"
              type={showPassword ? "text" : "password"} // toggle type based on showPassword state
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="focus-efecto"></span>
            {/* <input
              type="checkbox"
              checked={showPassword}
              onChange={handleShowPasswordChange}
            />{" "}
            Show Password */}
          </div>
          <div className="container-login-form-btn">
            <div className="wrap-login-form-btn">
              <div className="login-form-bgbtn"></div>
              <button type="submit" name="btnEntrar" className="login-form-btn" loading={loading}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
