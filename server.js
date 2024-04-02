const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://Yash:yash99yr@cluster0.vexcdrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Define a schema for your MongoDB collection
const userSchema = new mongoose.Schema({
    name: String,
    comment: String
});

// Specify the database and collection names
const dbName = 'birthday';
const collectionName = 'comments';

// Create a model based on the schema and specify the collection name
const User = mongoose.model('User', userSchema, collectionName);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/insert', async (req, res) => {
    try {
        // Create a new document using the User model and the form data
        await User.create({
            name: req.body.name,
            comment: req.body.comment
        });
        res.send("Message been sent successFully!");
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send("Failed to sent");
    }
});

// Route to fetch all data from MongoDB
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use(express.static(path.join(__dirname, "public")));
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
