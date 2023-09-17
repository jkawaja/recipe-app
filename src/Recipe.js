export function RecipeList({ recipes }) {
  return recipes.map((recipe, i) => {
    return <Recipe 
      key={i}
      name={recipe.name}
      ingredients={recipe.ingredients}
      directions={recipe.directions}
      description={recipe.description} 
      image={recipe.image} 
    />;
  });
}

function Recipe({ name, ingredients, directions, description, image }) {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        <li>{description}</li>
        <li>Ingredients: {ingredients}</li>
        <li>Directions: {directions}</li>
      </ul>
      <img height={200} src={image} alt="This is a dish."/><br/>
      <button>REMOVE</button>
    </div>
  );
}
