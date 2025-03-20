const mongoose = require('mongoose');
require('dotenv').config();
 const MONGO_URL="mongodb://127.0.0.1:27017/Authorization";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;
