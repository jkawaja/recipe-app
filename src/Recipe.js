import { useState } from "react";

export function RecipeList({ recipes }) {
  return recipes.map((recipe) => {
    return <Recipe 
      key={recipe.id}
      name={recipe.name}
      ingredients={recipe.ingredients}
      directions={recipe.directions}
      description={recipe.description} 
      image={recipe.image} 
    />;
  });
}


function Recipe({ name, ingredients, directions, description, image }) {
  const [visible, setVisible] = useState(true);

  const removeRecipe = () => {
    setVisible((prev) => !prev);
  }  
  return (  
    <div>    
      {visible && (
        <div key={name}>
          <h3>{name}</h3>
            <ul>
              <li>{description}</li>
              <li>Ingredients: {ingredients}</li>
              <li>Directions: {directions}</li>
            </ul>
          <img height={200} src={image} alt="This is a dish."/><br/>
        <button onClick={removeRecipe} type="button">REMOVE</button>
        </div>
      )}
    </div>
  );
}
