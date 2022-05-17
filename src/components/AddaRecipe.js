import React, { useState } from "react";
import axios from "axios";

const AddaRecipe = ({ countries }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    author: "",
    origin: "",
    description: "",
    ingredients: [],
    instructions: "",
  });

  const [ingredients, setIngredients] = useState([
    {
      quantity: "",
      ingredient: "",
    },
  ]);

  const changeHandler = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    axios.post("http://localhost:3011/recipes", recipe);
  };

  return (
    <section onChange={changeHandler} onSubmit={submitHandler}>
      <form>
        <div className="formDiv">
          <p>
            <label>Name</label>
            <label>Author</label>
            <label>Recipe origin</label>
            <label>Image URL</label>
            <label>Description</label>
            <label>Instructions</label>
          </p>
          <p>
            <input
              type="text"
              className="foodName"
              name="name"
              placeholder="Recipe name"
            />
            <input
              type="text"
              className="theAuthor"
              name="author"
              placeholder="Who made this recipe"
            />
            <select
              type="text"
              className="theOrigin"
              name="origin"
              placeholder="The recipe's origin"
            >
              {countries.map((country) => (
                <option key={country.name}>{country.name}</option>
              ))}
            </select>
            <input
              type="text"
              className="imgURL"
              name="image"
              placeholder="Insert image URL"
            />
            <input
              type="text"
              className="theDescription"
              name="description"
              placeholder="Give a short description of the recipe"
            />
            <textarea
              name="instructions"
              className="theInstructions"
              placeholder="Recipe instructions"
            />
          </p>
        </div>
        <button type="submit">Add recipe</button>
      </form>
    </section>
  );
};

export default AddaRecipe;
