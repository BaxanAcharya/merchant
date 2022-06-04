import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import generatehash from "../helpers/hash";

const PrivateRoute = ({ children }) => {
  const localHash = localStorage.getItem("hash");

  const acutalHash = generatehash("abc@gmail.com", "123456");

  return acutalHash === localHash ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
