const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Mongo URI:", process.env.MONGO_URI);  // This should show the correct URI
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // You can omit the deprecated options as they are no longer needed
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
