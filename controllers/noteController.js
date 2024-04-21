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