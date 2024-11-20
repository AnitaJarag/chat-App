require('dotenv').config(); // Load environment variables

console.log("Loaded Environment Variables:", process.env); // Check all variables
console.log("MONGO_URI:", process.env.MONGO_URI); // Specifically check MONGO_URI
console.log("PORT:", process.env.PORT); // Check PORT
