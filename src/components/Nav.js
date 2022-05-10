import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <h1>TasteIT</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/addarecipe">Add a Recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
