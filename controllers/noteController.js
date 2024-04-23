const Note = require('../models/Note'); 

exports.addNotes = async (req, res) => {
    try {

        let notesData = req.body; 
        notesData.userId = req.user._id; 
        const note = new Note(notesData); 
        const savedNotes = await note.save(); 

        res.status(200).json({
            status: true, 
            code: 200, 
            message: "Notes created!", 
            data: savedNotes
        }); 
    } catch (error) {
        res.status(500).json({
            status: false, 
            code: 500, 
            message: "An error occurred!", 
            data: error
        }); 
    }
}

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({userId: req.user._id}); 
        // const notes = await

        res.status(200).json({
            status: true, 
            code: 200, 
            message: "Notes found", 
            data: notes
        }); 
    } catch (error) {
        res.status(500).json({
            status: false, 
            code: 500, 
            message: "An error occurred!", 
            data: error
        }); 
    }
}

exports.updateNotes = async (req, res) => {
    try {
        const { title, content, tag } = req.body; 

        // Create a new note object to be updated
        const newNote = {};
        if(title) { newNote.title = title }; 
        if(content) { newNote.content = content }; 
        if(tag) { newNote.tag = tag }; 

        const updateNote = await Note.updateOne({"_id": req.params.id, "userId": req.user._id}, { $set: newNote }, {new: true}); 

        if(updateNote.modifiedCount === 1 ) {
            res.status(200).json({
                status: false, 
                code: 200, 
                message: "Updated", 
                data: updateNote
            }); 
        } else {
            res.status(404).json({
                status: false, 
                code: 404, 
                message: "Not found", 
                data: updateNote
            }); 
        }
    } catch (error) {
        return res.status(500).json({
            status: false, 
            code: 500, 
            message: "Server error!", 
            data: {}
        }); 
    }
}