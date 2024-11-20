require('dotenv').config(); // Ensure dotenv is configured at the very top
console.log("Loaded Environment Variables:", process.env); // Temporary check

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Your routes here...

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
