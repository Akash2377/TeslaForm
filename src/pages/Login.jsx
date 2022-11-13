import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginSuccess } from "../Redux/action";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  const { email, password } = loginData;
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const checkAuth = () => {
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          dispatch(isLoginSuccess(true));
          navigator("/admin");
          return;
        } else {
          alert("Wrong Credentials");
        }
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Link to="/" style={linkCSS}>
        Home
      </Link>
      <div style={LoginContainer}>
        <h2>Login</h2>
        <input
          style={inputField}
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input
          style={inputField}
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button onClick={checkAuth} style={btn}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
const btn = {
  width: "100px",
  padding: "10px",
  borderRadius: "5px",
  fontSize: "15px",
  border: "none",
  backgroundColor: "crimson",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};
const inputField = {
  padding: "8px",
  borderRadius: "5px",
  fontSize: "15px",
  width: "100%",
};
const LoginContainer = {
  display: "flex",
  marginLeft: "450px",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
  gap: "20px",
};
const linkCSS = {
  textDecoration: "none",
  color: "black",
  fontSize: "20px",
  fontWeight: "500",
  fontFamily: "Arial",
};
