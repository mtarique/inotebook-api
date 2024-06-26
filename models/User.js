const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"], 
        trim: true
    }, 
    email: {
        type: String, 
        required: [true, "Email is required"], 
        unique: true
    }, 
    password: {
        type: String, 
        required: [true, "Password is required"]
    }
}, {
    strict: false, 
    timestamps: true, 
    versionKey: false
}); 

module.exports = mongoose.model('user', userSchema); 