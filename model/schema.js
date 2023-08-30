// Import the mongoose library, which allows interaction with MongoDB
const mongoose = require("mongoose");
// Define a schema for the "history" collection
const historySchema = mongoose.Schema({
    // Define the "history" field as an array of objects
    history: [
        {
            // Each object in the array has a "question" field of type String, which is required
            question: { type: String, required: true },
            
            // Each object in the array has an "answer" field of type String, which is required
            answer: { type: String, required: true }
        }
    ]
});
// Create a model named "History" based on the defined schema
const History = mongoose.model("History", historySchema);
// Export the "History" model to be used in other parts of the application
module.exports = History;