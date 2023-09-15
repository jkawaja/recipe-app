import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { RecipeList } from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState(null);

  let recipeData = [
    {
      name: "Pasta Tomato",
      ingredients: "Pasta, Tomato",
      directions: "Mix the pasta with the tomato.",
      description: "It's pasta, AND tomato.",
      image: "",
    },

    {
      name: "Potato Soup",
      ingredients: "Water, Potato",
      directions: "Mix the water with the potato.",
      description: "It's water, AND potato. Which makes SOUP.",
      image: "",
    },

    {
      name: "Crushed Lemon",
      ingredients: "Lemons",
      directions: "Crush the lemons with a mallet.",
      description: "It's lemon, but crushed!",
      image: "",
    },
  ];

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  if (recipes == null) return;

  return (
    <div>
      <h1>Recipe Website</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
