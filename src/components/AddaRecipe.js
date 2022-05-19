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

  const ingChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[index][name] = value;
    setIngredients(list);
    setRecipe({ ...recipe, ingredients: ingredients });
  };

  const addIng = (e) => {
    e.preventDefault();

    setIngredients([
      ...ingredients,
      {
        quantity: "",
        ingredient: "",
      },
    ]);
  };

  const removeIng = (e, index) => {
    e.preventDefault();
    const list = [...ingredients];
    list.splice(index, 1);
    setIngredients(list);
  };

  const submitHandler = () => {
    axios.post("http://localhost:3011/recipes", recipe);
  };

  console.log(countries);

  return (
    <section onSubmit={submitHandler}>
      <form>
        <div className="formDiv">
          <label>Name</label>
          <input
            type="text"
            className="foodName"
            name="name"
            placeholder="Recipe name"
            onChange={changeHandler}
          />
          <label>Author</label>
          <input
            type="text"
            className="theAuthor"
            name="author"
            placeholder="Who made this recipe"
            onChange={changeHandler}
          />{" "}
          <label>Recipe origin</label>
          <select
            type="text"
            className="theOrigin"
            name="origin"
            onChange={changeHandler}
          >
            <option selected disabled hidden>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country.name}>{country.name}</option>
            ))}
          </select>
          <label>Image URL</label>
          <input
            type="text"
            className="imgURL"
            name="imageUrl"
            placeholder="Insert image URL"
            onChange={changeHandler}
          />
          <label>Description</label>
          <input
            type="text"
            className="theDescription"
            name="description"
            placeholder="Give a short description of the recipe"
            onChange={changeHandler}
          />
          <label>Ingredients</label>
          {ingredients.map((ingredient, index) => {
            return (
              <div key={index} className="ingP">
                <input
                  type="text"
                  className="theMeasurement"
                  name="quantity"
                  placeholder="Measurement"
                  onChange={(e) => ingChangeHandler(e, index)}
                />
                <input
                  type="text"
                  className="theIngredient"
                  name="ingredient"
                  placeholder="Ingredient"
                  onChange={(e) => ingChangeHandler(e, index)}
                />
              </div>
            );
          })}
          <div className="buttons">
            <button className="moreIng" onClick={addIng}>
              Add more ingredients
            </button>
            {ingredients.length > 1 && (
              <button className="removeBtn" onClick={(e) => removeIng(e)}>
                Remove ingredient
              </button>
            )}
          </div>
          <label>Instructions</label>
          <textarea
            name="instructions"
            className="theInstructions"
            placeholder="Recipe instructions"
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Add recipe</button>
      </form>
    </section>
  );
};

export default AddaRecipe;
