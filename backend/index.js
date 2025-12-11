import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import dotenv from "dotenv"; // Recommended for using process.env.MONGO_URI

const app = express();
const port = 5000;
dotenv.config();
app.use(cors());
// NOTE: Using the hardcoded URI for simplicity here, but using .env is best practice!
const uri = process.env.MONGO_URI;

// --- 1. MODEL DEFINITION ---
const Sample_Schema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }, // Added price to schema
  ImageBase64: { type: String } 
});
const Sample = mongoose.model('Product', Sample_Schema,'testings'); 

// --- 2. EXPRESS ROUTE DEFINITION ---
app.get('/api/samples', async (req, res) => {
    try {
        // Find all documents in the 'samples' collection
        const samples = await Sample.find({}); 
        
        // --- FIX APPLIED HERE ---
        // Log the entire array to see the retrieved data in your terminal
        console.log("Retrieved data:", samples); 

        // Send the retrieved data back to the browser as JSON
        res.json(samples);
        
    } catch (error) {
        console.error('Error retrieving data:', error.message);
        res.status(500).json({ message: 'Failed to fetch sample data' });
    }
});
app.get('/api/test', async (req, res) => {
    try {
        // Find all documents in the 'samples' collection
        const samples = await Sample.find({}); 
        
        // --- FIX APPLIED HERE ---
        // Log the entire array to see the retrieved data in your terminal
        console.log("Retrieved data:", samples); 

        
        res.json(samples);
        
    } catch (error) {
        console.error('Error retrieving data:', error.message);
        res.status(500).json({ message: 'Failed to fetch sample data' });
    }
});

// --- 3. SERVER START FUNCTION ---
async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connection Successful! Connected to "ecommerce" database.');
        
        app.listen(port, () => {
            console.log(`🚀 Server running successfully on port ${port}`);
        });

    } catch (error) {
        console.error('❌ MongoDB Connection Failed. Server not started successfully.');
        console.error('Error details:', error.message);
        process.exit(1); 
    }
}

startServer();