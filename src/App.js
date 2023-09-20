import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { RecipeList } from "./Recipe";
import { Link } from "react-router-dom";



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
  const handleSubmit = (e) => {
    e.preventDefault();
    let object = {
      name: e.target.name.value,
      description: e.target.description.value,
      ingredients: e.target.ingredients.value,
      directions: e.target.directions.value,
      image: e.target.image.value
    }
    console.log(object)
  }
  const[value, setValue] = useState('food1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
          <select image={value} onChange={handleChange} name="image">
            <option value="food1">Food 1</option>
            <option value="food2">Food 2</option>
            <option value="food3">Food 3</option>
          </select>
        </label>
        <br></br>
        <button>Submit</button>
        <p>We eat {value}</p>
      </form>
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
  useEffect(()=> {
    fetch('./data/recipes.json')
    .then((response) => {return response.json()})
    .then(setRecipes);
  }, []);

  // console.log(recipes)

  // const [recipes, setRecipes] = useState(null);
  // let recipeData = recipeFile;
  //   useEffect(() => {
  //   setRecipes(recipeData);
  // }, [recipeData]);

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
