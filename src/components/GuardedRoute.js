import React from "react";
import { Navigate } from "react-router-dom";
//components
import Protected from "./Protected";
import Login from "../pages/Login";
//redux
import { useSelector } from "react-redux";

function GuardedRoute() {
  const success = useSelector((state) => state.success);
  return <>{success ? <Protected /> : <Navigate to="/login" />}</>;
  // return <>{success ? <Protected /> : <Login />}</>;
}

export default GuardedRoute;
