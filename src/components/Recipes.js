import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3011/recipes").then((res) => {
      setRecipes(res.data);
    });
  }, []);

  return (
    <div className="recipeGallery">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="galleryCard">
          <img
            className="galleryImage"
            src={recipe.imageUrl}
            alt={recipe.name}
          />
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
