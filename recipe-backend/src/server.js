import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}))

const port = 4000;


app.get('/api/recipes', async (req, res) => {
  console.log("it hits here")
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db('react-recipe-db');
  const data = await db.collection('recipes').find({}).toArray();
  res.json(data);
})

app.post('/api/removeRecipe', async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db('react-recipe-db');
  const result = await db.collection('recipes').deleteOne({name:req.body.recipename});
  const data = await db.collection('recipes').find({}).toArray();
  res.json(data);
})

app.post('/api/addRecipe', async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db('react-recipe-db');
  const result = await db.collection('recipes').insertOne({name:req.body.recipename})
  res.sendStatus(200);
})

app

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})