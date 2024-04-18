const mongoose = require('mongoose'); 

const noteSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title is required"]
    }, 
    content: {
        type: String, 
        required: [true, "Content is required"]
    }, 
    author: String, 
    tag: {
        type: String, 
        default: "General"
    }
}, {
    strict: false, 
    timestamps: true, 
    versionKey: false
}); 

module.exports = mongoose.model('note', noteSchema); 