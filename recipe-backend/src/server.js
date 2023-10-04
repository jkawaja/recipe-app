import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import multer from 'multer';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}))

const port = 4000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../recipe-frontend/public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({storage: storage });

app.post("/api/addRecipe", upload.single('filename'), async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db('react-recipe-db');
  const result = await db.collection('recipes').insertOne(
    {name:req.body.name,
    ingredients:req.body.ingredients,
    directions:req.body.directions,
    description:req.body.description,
    image:req.file.filename})
  const data = await db.collection('recipes').find({}).toArray();
});


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

app.post('/api/oldAddRecipe', async (req, res) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db('react-recipe-db');
  const result = await db.collection('recipes').insertOne(
    {name:req.body.name,
    ingredients:req.body.ingredients,
    directions:req.body.directions,
    description:req.body.description,
    image:req.body.image})
  const data = await db.collection('recipes').find({}).toArray();
  res.json(data);
})


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})