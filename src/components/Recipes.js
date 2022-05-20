import React, { useState } from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes, countries }) => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchResults = () => {
    if (search == "") {
      return recipes;
    } else {
      return recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  };

  const getFlag = (origin) => {
    const country = countries.find((country) => country.name === origin);
    return country ? <img className="flagBall" src={country.flag} /> : null;
  };

  return (
    <section>
      <p className="searchBarContainer">
        <input
          className="searchBar"
          placeholder="Search"
          onChange={searchHandler}
        />
      </p>
      <div className="recipeGallery">
        {searchResults().map((recipe) => (
          <div key={recipe.id} className="galleryCard">
            <img
              className="galleryImage"
              src={recipe.imageUrl}
              alt={recipe.name}
            />
            <div className="flagContainer">{getFlag(recipe.origin)}</div>
            <div className="galleryInfo">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipes/${recipe.name}`}>See more</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
