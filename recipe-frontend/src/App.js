import "./App.css";
import { useState, useEffect } from "react";
import { RecipeList } from "./Recipe";
import { Link, Route, Routes } from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <Link to="/addrecipe">Add Recipe</Link>
      </nav>
      <h1>Recipe List</h1>
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
      <form action="/api/addRecipe" method="POST" encType="multipart/form-data" >
        <label for="name">Recipe Name: </label>
        <input type="text" name="name" id="name"></input>
        <br/>
        <label for="description">Recipe Description: </label>
        <input type="text" name="description" id="description"></input>
        <br/>
        <label for="ingredients">Recipe Ingredients: </label>
        <input type="text" name="ingredients" id="ingredients"></input>
        <br/>
        <label for="directions">Recipe Directions: </label>
        <input type="text" name="directions" id="directions"></input>
        <br/>
        <label>Recipe Image: 
          <input id="recipeFileUpload" type="file" name="filename" required/>
        </label>
        <br></br>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export function App() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch('/api/recipes')
    .then((response) => {return response.json()})
    .then(setRecipes);
  }, []);
  if (recipes == null) return;

  return (
    <>
    <header className="App-header">
      <Routes>
        <Route path="/" element={<><Home/><RecipeList recipes={recipes} setRecipes={setRecipes}/></>}/>
        <Route path="/addrecipe" element={<AddRecipe recipes={recipes} setRecipes={setRecipes}/>}/>
      </Routes>
    </header>
    </>
  );
}

export default App;
