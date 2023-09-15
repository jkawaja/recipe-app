export function RecipeList({ recipes }) {
  return recipes.map((recipe, i) => {
    return <Recipe name={recipe.name} />;
  });
}

function Recipe({ name }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
