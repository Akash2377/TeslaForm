import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={NavbarCSS}>
      <Link to="/" style={linkCSS}>
        Home
      </Link>
      <Link to="/admin" style={linkCSS}>
        List
      </Link>
      <Link to="/report" style={linkCSS}>
        Report
      </Link>
    </div>
  );
};

export default Navbar;
const NavbarCSS = {
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "rgb(183, 127, 235)",
  color: "white",
  padding: "20px",
};
const linkCSS = {
  textDecoration: "none",
  color: "white",
  fontSize: "25px",
  fontWeight: "700",
  fontFamily: "Arial",
};
