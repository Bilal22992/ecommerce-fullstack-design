import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import dotenv from "dotenv"; // Recommended for using process.env.MONGO_URI

const app = express();
const port = 5000;
app.use(cors());
// NOTE: Using the hardcoded URI for simplicity here, but using .env is best practice!
const uri = "mongodb+srv://moon:Moon%40302%23@cluster0.m4ccdtb.mongodb.net/ecommerce?appName=Cluster0";

// --- 1. MODEL DEFINITION ---
const sampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
const Sample = mongoose.model('Sample', sampleSchema,'sample'); 

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

// --- 3. SERVER START FUNCTION ---
async function startServer() {
    try {
        await mongoose.connect(uri);
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