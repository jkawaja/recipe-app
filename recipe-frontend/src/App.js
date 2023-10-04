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

export function AddRecipe({recipes, setRecipes, name, ingredients, directions, description, image}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", e.target.name.value);
    urlencoded.append("ingredients", e.target.ingredients.value);
    urlencoded.append("directions", e.target.directions.value);
    urlencoded.append("description", e.target.description.value);
    urlencoded.append("image", e.target.image.value);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("/api/addRecipe", requestOptions)
      .then(response => response.json())
      .then(setRecipes)
      .catch(error => console.log('error', error));
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
          <h1>File Upload</h1>
          <form action="/upload" method="POST" enctype="multipart/form-data">
          <input type="file" name="file" required/>
          <button type="submit">Upload</button>
          </form>
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
