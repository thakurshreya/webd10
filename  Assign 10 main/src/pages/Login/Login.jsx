import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';  // Verify this path is correct
import "./login.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigating programmatically

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        dispatch(setUser(user)); // Dispatch the setUser action
        localStorage.setItem("user", JSON.stringify(user)); // Save user info in localStorage
        if (user.type === "admin") {
          navigate("/employeeslist"); // Redirect to admin page if user is an admin
        } else {
          navigate("/"); // Redirect to the home page for other users
        }
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || "Invalid Credentials"}`);
      }
    } catch (err) {
      alert(`Login error: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <div className="sub_container">
        <h1 className="header">Sign In</h1>
        <form className="form_container" onSubmit={loginUser}>
          <input
            placeholder="Email"
            className="input_container"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="input_container"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
