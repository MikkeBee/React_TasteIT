import React from "react";
import { Link } from "react-router-dom";

const MiddleBar = () => {
  return (
    <div>
      <h2>Looking for something?</h2>
      <div className="middleBarDiv">
        <div className="carouselDiv">
          <h3>Browse recipes</h3>
          <p>Need some lunch or dinner recipe ideas? Check the link!</p>
          <Link to="/recipes">Recipes</Link>
        </div>
        <div className="carouselDiv">
          <h3>Add a recipe</h3>
          <p>Have a recipe you want to share with the world? Do it here!</p>
          <Link to="/addarecipe">Add a Recipe</Link>
        </div>
        <div className="carouselDiv">
          <h3>Would you like to learn more?</h3>
          <p>Check out the school, the programme, and more.</p>

          <a href="https://en.bc.fi/" target="_blank">
            I'm a link, click me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
