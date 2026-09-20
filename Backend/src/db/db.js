const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("I Am Connected");
        
    } catch (error) {
        console.log("Failed To Connect" + error);
        
    }
}

module.exports = connectDB;