import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes, countries }) => {
  return (
    <div className="recipeGallery">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="galleryCard">
          <img
            className="galleryImage"
            src={recipe.imageUrl}
            alt={recipe.name}
          />
          {/* <img
            src={countries.find((country) => country.name === recipe.origin)}
          /> */}
          <div className="galleryInfo">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.name}`}>See more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
