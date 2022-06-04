import React from "react";
import "./navbar.css";
import Logo from "../../assets/img/logo.png";
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutActionImp } from "../../redux/actionCreators";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  const logoutUser = () => {
    dispatch(logoutActionImp());
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <div className="nav-brand">
        <img src={Logo} alt="Company Logo" className="nav-bar-logo" />
        <h3>Merchan Dashboard</h3>
        <Link
          to="/dashboard"
          className={`${
            location.pathname === "/dashboard"
              ? "nav-bar-links-active"
              : "nav-bar-links"
          }`}
          style={{ marginLeft: "15px" }}
        >
          Home
        </Link>
      </div>

      <div style={{ flex: 1, marginLeft: "15px" }}>
        <Link
          to="/orders"
          className={`${
            location.pathname === "/orders"
              ? "nav-bar-links-active"
              : "nav-bar-links"
          }`}
        >
          Order
        </Link>
      </div>

      <div className="nav-bar-action">
        <Button variant="outlined" color="primary" onClick={logoutUser}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
