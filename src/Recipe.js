import { Link } from "react-router-dom";

export function RecipeList({ recipes }) {
  return recipes.map((recipe, setRecipes, i) => {
    return (
    <div>
      <nav>
        <Link to="/AddRecipe">Add Recipe</Link>
      </nav>
      <Recipe 
        id={i}
        name={recipe.name}
        ingredients={recipe.ingredients}
        directions={recipe.directions}
        description={recipe.description} 
        image={recipe.image} 
        setRecipes={setRecipes}
      />
    </div>
  )});
}



function Recipe({ id, name, ingredients, directions, description, image }) {
  return (  
    <div>    
      <div id={id}>
          <h3>{name}</h3>
            <ul>
              <li>{description}</li>
              <li>Ingredients: {ingredients}</li>
              <li>Directions: {directions}</li>
            </ul>
          <img height={200} src={image} alt="This is a dish."/><br/>
        <button onClick={() => } type="button">REMOVE</button>
        </div>
    </div>
  );
}


