// Import mongoose
let mongoose = require("mongoose");
// Method to create the mongoose schema
let Schema = mongoose.Schema;

// User Schema
let productSchema = Schema({
    names: String,
    description: String,
    image: Image,
    price: Number,
    color: String,
    providerId: {type: Schema.ObjectId, ref: "provider"},
    category: String,
    type: String,
});
// Export the module
modules.exports = mongoose.model("product", productSchema);