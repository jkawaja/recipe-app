export function RecipeList({ recipes, setRecipes }) {
  return recipes.map((recipe, i) => {
    return (
    <>
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
    </>
  )});
}

function Recipe({ name, ingredients, directions, description, image, recipes, setRecipes}) {
  return ( 
    <>
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
    </>
  );
}