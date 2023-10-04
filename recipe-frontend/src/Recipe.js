import { Button, Card, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

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
      
        <Card className="mb-3" style={{ width: '18rem' }}>
        <Card.Img fluid width={100} style={{ marginTop: '15px' }} variant="top" src={"./images/"+image} alt="This is a dish."/>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
          <Card.Text> {description}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Ingredients: {ingredients}</ListGroup.Item>
            <ListGroup.Item>Directions: {directions}</ListGroup.Item>
          </ListGroup>        
      <Button onClick={ () => {
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
    }>Remove</Button>
    </Card.Body>
    </Card>
    </>
  );
}