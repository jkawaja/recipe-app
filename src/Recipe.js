export function RecipeList({ recipes }) {
  return recipes.map((recipe, i) => {
    return <Recipe name={recipe.name} image={recipe.image} />;
  });
}

function Recipe({ name, image }) {
  return (
    <div>
      <p>{name}</p>
      <img src={image} />
    </div>
  );
}
