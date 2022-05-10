import "./index.css";
import Recipes from "./components/Recipes";
import AddaRecipe from "./components/AddaRecipe";
import Home from "./components/Home";
import RecipeCard from "./components/RecipeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="addarecipe" element={<AddaRecipe />} />
          <Route path="recipes/:name" element={<RecipeCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
