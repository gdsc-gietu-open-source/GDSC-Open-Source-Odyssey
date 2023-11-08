const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "This is required"
    },
    image: {
        type: String,
        required: "This is required"
    },
    description: {
        type: String,
        required: "This is required"
    },
    category: {
        type: String,
        enum: ["Web", "Data Science", "Android", "AIML", "Cloud", "IOT", "CP", "Cyber Security"],
        required: "This is required"
    },
    stack: {
        type: Array,
        required: "This is required"
    }
});

module.exports = mongoose.model("Detail", detailSchema); 
