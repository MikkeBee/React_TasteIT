import { useParams } from "react-router-dom";
import React from "react";

const RecipeCard = ({ recipes }) => {
  const { name } = useParams();
  console.log(name);
  const recipe = recipes.find((recipe) => recipe.name === name);
  console.log(recipe);

  return (
    <div className="recipeCard">
      <div>
        <div key={recipe.id} className="recipeInfo">
          <div>
            <img
              className="recipeImage"
              src={recipe.imageUrl}
              alt={recipe.name}
            />
          </div>
          <div>
            <h1 className="recipeTitle">{recipe.name}</h1>
            <p>Author: {recipe.author}</p>
            <p>Origin: {recipe.origin}</p>
            <p>{recipe.description}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="divider dividerBar"></div>
      </div>
      <div className="cardBottom">
        <div>
          {recipe.ingredients.map((item) => (
            <div key={item.ingredient}>
              <ul>
                <li>
                  {item.quantity} {item.ingredient}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
