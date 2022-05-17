import "./index.css";
import Recipes from "./components/Recipes";
import AddaRecipe from "./components/AddaRecipe";
import Home from "./components/Home";
import RecipeCard from "./components/RecipeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3011/recipes").then((res) => {
      setRecipes(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountry(res.data);
    });
    console.log(countries);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="recipes"
            element={<Recipes recipes={recipes} countries={countries} />}
          />
          <Route
            path="addarecipe"
            element={<AddaRecipe countries={countries} />}
          />
          <Route
            path="recipes/:name"
            element={<RecipeCard recipes={recipes} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
