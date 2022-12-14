import "../css/login.css";
import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
//component
import Home from "./Home";
//redux
import { useDispatch, useSelector } from "react-redux";
// import { act } from "react-dom/test-utils";
import { authActions } from "../store";

function Login() {
  // const navigate = useNavigate();
  const success = useSelector((state) => state.success);
  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  //   const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("success", true);
    localStorage.setItem("user", user);
    setUser("");
    setPwd("");
    // dispatch({ type: "success" });
    dispatch(authActions.success());
    console.log(success);
    // navigate("/", { replace: true });
  };

  useEffect(() => {
    if (localStorage.getItem("success")) {
      // dispatch({ type: "success" });
      dispatch(authActions.success());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {success ? (
        <Home />
      ) : (
        <section>
          <div className="container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                data-testid="username"
                type="text"
                id="username"
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                data-testid="password"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button data-testid="submitBtn" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
