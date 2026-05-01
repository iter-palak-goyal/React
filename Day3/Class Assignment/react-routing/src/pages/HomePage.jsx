import React from "react";
import { Link, Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1> This is the homePage </h1>
      <div>
        <Link to="/"> Hero Home </Link>
        <Link to={"/Kitchen"}> Kitchen </Link>
        <Link> </Link>
      </div>
      <Outlet />
      <h3> This is the end of the home page</h3>
    </>
  );
};

export default HomePage;
