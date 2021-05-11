// Import mongoose
let mongoose = require("mongoose");
// Method to create the mongoose schema
let Schema = mongoose.Schema;

// User Schema
let userSchema = Schema({
    names: String,
    lastName: String,
    email: String,
    pass: String,
    role: String,
    address: String,
    phoneNumber: String,
    registerDate: {type: Date, default: Date.now},
});
// Export the module
modules.exports = mongoose.model("user", userSchema);