const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    class: {
        type: String,
        required: "This is required"
    },
    name: {
        type: String,
        required: "This is required"
    },
    image: {
        type: String,
        require: "This is required"
    },
    route: {
        type: String,
        required: "This is required"
    }
});


module.exports = mongoose.model("Category", CategorySchema);