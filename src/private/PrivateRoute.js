import React from "react";
import { Navigate } from "react-router-dom";
import generatehash from "../helpers/hash";

const PrivateRoute = ({ children }) => {
  const localHash = localStorage.getItem("hashValue");

  const acutalHash = generatehash("abc@gmail.com", "123456");

  console.log(localHash, acutalHash);

  return acutalHash == localHash ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
