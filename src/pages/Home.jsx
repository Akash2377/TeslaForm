import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Stack direction="row" spacing={2} style={HomeButtonStyle}>
      <Link to="/tesla">
        <Button variant="outlined" style={ButtonStyle}>
          Tesla / User
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="outlined" style={ButtonStyle}>
          Admin
        </Button>
      </Link>
    </Stack>
  );
};

export default Home;
const ButtonStyle = {
  height: "200px",
  fontSize: "50px",
  border: "none",
  textDecoration: "none",
  color: "white",
  width: "500px",
  background: "crimson",
  borderRadius: "20px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};
const HomeButtonStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  height: "100vh",
  width: "100vw",
  placeContent: "center",
  boxSizing: "border-box",
  padding: "100px",
  gap: "50px",
};
