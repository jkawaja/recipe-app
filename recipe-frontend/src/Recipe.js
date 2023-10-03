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
      <button onClick={ () => {
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
              var urlencoded = new URLSearchParams();
              urlencoded.append("recipename", name);
        
              var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: urlencoded,
              redirect: 'follow'
              };
        
              fetch("/api/removeRecipe", requestOptions)
              .then(response => response.json())
              .then(setRecipes)
              .catch(error => console.log('error', error));
      }
    } >REMOVE</button>
    </>
  );
}

  // const removeRecipe = async () => {
  //   const response = await axios.post('/api/removeRecipe');
  //   const updatedRecipe = response.data;
  //   setRecipes(updatedRecipe);
  // }


  // function Recipe({ name, ingredients, directions, description, image, recipes, setRecipes}) { 

//   const handleRemoveRecipe = async ({name}) => {
//     const response = await axios.post('/api/removeRecipe', {name});
//   }
  
//   return ( 
//     <>
//         <h3>{name}</h3>
//           <ul>
//             <li>{description}</li>
//             <li>Ingredients: {ingredients}</li>
//             <li>Directions: {directions}</li>
//           </ul>
//         <img height={200} src={image} alt="This is a dish."/><br/>
//       <button onClick={handleRemoveRecipe({name})} >REMOVE</button>
//     </>
//   );
// }

              // .then(result => {
              //   let adjustedRecipes = [];
              //   for (let i=0; i<recipes.length; i++) {
              //     if (recipes[i].name !== name) {
              //       adjustedRecipes.push(recipes[i]);
              //     }
              //     setRecipes(adjustedRecipes);
              //   }
              // })


                // const removeRecipe = async () => {
  //   const response = await axios.post('/api/removeRecipe');
  //   const updatedRecipe = response.data;
  //   setRecipes(updatedRecipe);
  // }

  // const handleRemoveRecipe = async () => {
  //   const response = await axios.post('/api/removeRecipe');
  //   const updatedRecipe = response.data;
  //   setRecipes(updatedRecipe);
  // }
  
  // const handleRemoveRecipe = () => {
  //   // make API call to backend to remove the current bicyle

  //   // if the call is successful, need to update the use state hook ( setBikes)
    

  // }