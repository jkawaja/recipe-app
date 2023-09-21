export function RecipeList({ recipes }) {
  return recipes.map((recipe, i) => {
    console.log(i)
    return <Recipe 
      id={i}
      name={recipe.name}
      ingredients={recipe.ingredients}
      directions={recipe.directions}
      description={recipe.description} 
      image={recipe.image} 
    />;
  });
}

  const remove = (id) => {
    const element = document.getElementById(id)
    element.remove();
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
        <button onClick={() => remove(id)} type="button">REMOVE</button>
        </div>
    </div>
  );
}
