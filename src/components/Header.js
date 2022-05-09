import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <Link to="/" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
