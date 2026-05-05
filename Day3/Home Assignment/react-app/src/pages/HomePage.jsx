import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>This is the Home Page</h1>

      {/* ADD CLASS HERE */}
      <div className="home-links">
        <Link to="/">Home Hero</Link>
        <Link to="kitchen">Kitchen</Link>
      </div>

      <Outlet />

      <h3>This is the end of home page</h3>
    </div>
  );
};

export default HomePage;