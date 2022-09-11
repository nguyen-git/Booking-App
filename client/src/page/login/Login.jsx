import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {useNavigate} from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {error, loading, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleOnchange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:6102/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.log(err.response.data);
    }
  };
  return (
    <div className="login">
      <form action="" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            className="loginInput"
            id="username"
            placeholder="Enter user name"
            onChange={handleOnchange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="loginInput"
            id="password"
            placeholder="Enter user name"
            onChange={handleOnchange}
          />
        </div>
        <div className="formGroup">
          <button disable={loading.toString ()} type="submit" className="loginBtn">
            Login
          </button>
        </div>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
