const mongoose = require('mongoose'); 

const noteSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    tag: {
        type: String,
        default: "General"
        
    }
}, {
    strict: false, 
    versionKey: false, 
    timestamps: true
}); 

module.exports = mongoose.model('note', noteSchema)
