const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/userController'); 
const noteController = require('../controllers/noteController'); 
const validation = require('../middleware/validation'); 
const authMiddle = require('../middleware/authentication'); 

router.get('/status', (req, res) => {
    res.status(200).json({status: true, code: 200, message: "iNotebook API is running...", data: {}})
}); 

// User endpoints
router.post('/add-user', validation.userValidationRule, validation.validate,  userController.addUser); 
router.post('/login', validation.authValidationRule, validation.validate, userController.loginUser); 
router.get('/get-user', authMiddle.authenticate, userController.getUser); 

// Notes endpoints
router.post('/add-note', validation.noteValidationRule, validation.validate, authMiddle.authenticate, noteController.addNotes);
router.get('/get-notes', authMiddle.authenticate, noteController.getNotes); 
router.put('/update-notes/:id', validation.noteValidationRule, validation.validate, authMiddle.authenticate, noteController.updateNotes); 
router.delete('/delete-notes/:id', authMiddle.authenticate, noteController.deleteNotes); 

module.exports = router; 