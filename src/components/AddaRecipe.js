import React, { useState, useEffect } from "react";
import axios from "axios";

const AddaRecipe = () => {
  const [recipe, setRecipe] = setState({
    name: "",
    author: "",
    origin: "",
    description: "",
  });

  return (
    <section>
      <form>
        <p>
          <label>Name</label>
          <input
            type="text"
            className="foodName"
            name="name"
            placeholder="Recipe name"
          />
        </p>
        <p>
          <label>Author</label>
          <input
            type="text"
            className="theAuthor"
            name="author"
            placeholder="Who made this recipe"
          />
        </p>
        <p>
          <label>Recipe origin</label>
          <input
            type="text"
            className="theOrigin"
            name="origin"
            placeholder="The recipe's origin"
          />
        </p>
        <p>
          <label>Description</label>
          <input
            type="text"
            className="theDescription"
            name="description"
            placeholder="Give a short description of the recipe"
          />
        </p>
        <p>
          <label>Instructions</label>
          <textarea
            name="instructions"
            className="theInstructions"
            placeholder="Recipe instructions"
          />
        </p>
      </form>
    </section>
  );
};

export default AddaRecipe;
