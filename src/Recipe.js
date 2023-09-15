export function RecipeList({ recipes }) {
  return recipes.map((recipe, i) => {
    return <Recipe 
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
        <li>{ingredients}</li>
        <li>{directions}</li>
        <li>{description}</li>
      </ul>
      <img height={200} src={image} alt="This is a dish."/>
    </div>
  );
}
