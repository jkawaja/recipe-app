import "./App.css";
import { useState, useEffect } from "react";
import { RecipeList } from "./Recipe";
import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios';

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

export function AddRecipe({recipes, setRecipes}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let addedRecipe = {
      name: e.target.name.value,
      description: e.target.description.value,
      ingredients: e.target.ingredients.value,
      directions: e.target.directions.value,
      image: e.target.image.value
    }
    recipes.push(addedRecipe)
    setRecipes(recipes);
  }
  return (
    <div>
      <nav>
        <Link to="/">Recipe List</Link>
      </nav>
      <h1>Add Recipe</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          <select for="image" name="image">
            <option value="./images/food1.png">Food 1</option>
            <option value="./images/food2.png">Food 2</option>
            <option value="./images/food3.png">Food 3</option>
          </select>
        </label>
        <br></br>
        <button onChange={() => handleSubmit}>Submit</button>
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
      <Routes>
        <Route path="/" element={<><Home/><RecipeList recipes={recipes} setRecipes={setRecipes}/></>}/>
        <Route path="/addrecipe" element={<AddRecipe recipes={recipes} setRecipes={setRecipes}/>}/>
      </Routes>
    </>
  );
}

export default App;


  // useEffect(() => {
  //   const loadRecipeInfo = async () => {
  //     const response = await axios.get('/api/recipes')
  //     const newRecipeInfo = response.data;
  //     setRecipes(newRecipeInfo);
  //   }
  //   loadRecipeInfo();
  // }, []);
