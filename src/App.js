import "./index.css";
import Recipes from "./components/Recipes";
import AddaRecipe from "./components/AddaRecipe";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="addarecipe" element={<AddaRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
