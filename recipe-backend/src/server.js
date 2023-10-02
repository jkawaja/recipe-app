import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}))

// recipeData 

app.get('/api/recipes', async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db('react-recipe-db');

  const data = await db.collection('recipes').find({}).toArray();

  console.log(data);
  res.json(data);

})

app.post('/api/removeRecipe', async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db('react-recipe-db');

  const result = await db.collection('recipes').deleteOne({name:req.body.recipename});
  console.log(result.deletedCount)

  console.log(req.body.recipename);
  let adjustedRecipes = [];
  for (let i=0; i<recipeData.length; i++) {
    if (recipeData[i].name != req.body.recipename) {
      adjustedRecipes.push(recipeData[i]);
    }
  }
  recipeData = adjustedRecipes;

  res.sendStatus(200);
})

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
})