const mongoose = require('mongoose'); 
// const bcrypt = require('bcryptjs'); 

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }
}, {
    strict: false, 
    versionKey: false, 
    timestamps: true
}); 

module.exports = mongoose.model('user', userSchema); 
