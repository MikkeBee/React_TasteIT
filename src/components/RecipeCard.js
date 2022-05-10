import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeCard = () => {
  const [isLoading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const { nameParams } = useParams();

  useEffect(() => {
    setLoading(true);
    console.log("hey");
    axios
      .get(`http://localhost:3011/recipes/${nameParams.name}`)
      .then((res) => {
        console.log("bye");
        setRecipes(res.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="recipeCard">
      <div className="cardTop">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipeTitle">
            <div>
              <img
                className="recipeImage"
                src={recipe.imageUrl}
                alt={recipe.name}
              />
            </div>
            <div>
              <h1 className="recipeTitle">{recipe.name}</h1>
              <div>Author: {recipe.author}</div>
              <div>Origin: {recipe.origin}</div>
              <div>{recipe.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="cardBottom">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipeTitle">
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
