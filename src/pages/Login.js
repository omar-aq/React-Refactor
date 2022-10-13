import "../css/login.css";
import React from "react";
import { useState, useEffect } from "react";
//component
import Home from "./Home";
//redux
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const success = useSelector((state) => state.success);
  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  //   const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("success", true);
    localStorage.setItem("user", user);
    setUser("");
    setPwd("");
    dispatch({ type: "success" });
  };

  useEffect(() => {
    if (localStorage.getItem("success")) {
      dispatch({ type: "success" });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {success ? (
        <Home />
      ) : (
        <section>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
      )}
    </>
  );
}

export default Login;