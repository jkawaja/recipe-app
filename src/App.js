import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { RecipeList } from "./Recipe";
import { Link, Outlet } from "react-router-dom";



function Home() {
  return (
    <div>
      <nav>
        <Link to="/addrecipe">Add Recipe</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  )
}

export function AddRecipe() {
  return (
    <div>
      <nav>
        <Link to="/">Recipe List</Link>
      </nav>
      <h1>Add Recipe</h1>
      <Outlet />
    </div>
  )
}

export function InputFields() {
  return (
    <div>
      <h1>Data Fields Go Here:</h1>
    </div>
  )
}


export function App() {
  const [recipes, setRecipes] = useState(null);

  let recipeData = [
    {
      name: "Pasta Tomato",
      ingredients: "Pasta, Tomato",
      directions: "Mix the pasta with the tomato.",
      description: "It's pasta, AND tomato.",
      image: "./images/pastatomato.jpg",
    },

    {
      name: "Potato Soup",
      ingredients: "Water, Potato",
      directions: "Mix the water with the potato.",
      description: "It's water, AND potato. Which makes SOUP.",
      image: "./images/potatosoup.jpg",
    },

    {
      name: "Crushed Lemon",
      ingredients: "Lemons",
      directions: "Crush the lemons with a mallet.",
      description: "It's lemon, but crushed!",
      image: "./images/crushedlemon.jpg",
    },
  ];

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  if (recipes == null) return;

  return (
    <div>
      <Home/>
      <h1>Recipe List</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
