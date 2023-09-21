import { Link} from "react-router-dom"

export function RecipeList({ recipes, setRecipes }) {
  return recipes.map((recipe, i) => {
    return (
    <div>
      <Recipe 
        key={i}
        name={recipe.name}
        ingredients={recipe.ingredients}
        directions={recipe.directions}
        description={recipe.description} 
        image={recipe.image} 
        setRecipes={setRecipes}
        recipes={recipes}
      />
    </div>
  )});
}

function Recipe({ name, ingredients, directions, description, image, recipes, setRecipes}) {
  return ( 
    <div>
        <h3>{name}</h3>
          <ul>
            <li>{description}</li>
            <li>Ingredients: {ingredients}</li>
            <li>Directions: {directions}</li>
          </ul>
        <img height={200} src={image} alt="This is a dish."/><br/>
      <button onClick={() => {
        let adjustedRecipes = [];
        for (let i=0; i<recipes.length; i++) {
          if (recipes[i].name != name) {
            adjustedRecipes.push(recipes[i]);
          }
          setRecipes(adjustedRecipes);
        }
      }} >REMOVE</button>
    </div>
  );
}


{/* <div>
<nav>
  <Link to="/AddRecipe">Add Recipe</Link>
</nav>
<h1>Recipe List</h1>
</div> */}