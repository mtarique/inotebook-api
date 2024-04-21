const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/userController'); 
const validation = require('../middleware/validation'); 
const authMiddle = require('../middleware/authentication'); 

router.get('/status', (req, res) => {
    res.status(200).json({status: true, code: 200, message: "iNotebook API is running...", data: {}})
}); 

router.post('/add-user', validation.userValidationRule, validation.validate,  userController.addUser); 
router.post('/login', validation.authValidationRule, validation.validate, userController.loginUser); 
router.get('/get-user', authMiddle.authenticate, userController.getUser); 

module.exports = router; 