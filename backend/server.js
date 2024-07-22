const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'https://mongo-db-atlas-logger-app-arkadeeptos-projects.vercel.app',
  }));
const uri = 'mongodb+srv://admin-arkadeepto:bvSFh25RHBC6BLb@cluster.jzcialj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/addUser', async (req, res) => {
    const { name, email } = req.body;
    try {
        await client.connect();
        const database = client.db('userDB');
        const collection = database.collection('users');
        const result = await collection.insertOne({ name, email });
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await client.close();
    }
});

app.get('/getUsers', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('userDB');
        const collection = database.collection('users');
        const users = await collection.find().toArray();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
