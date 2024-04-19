const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/userController'); 
const validationMiddleware = require('../middleware/validationMiddleware'); 

router.get('/status', (req, res) => {
    res.status(200).json({status: true, code: 200, message: "iNotebook API is running...", data: {}})
})

router.post('/add-user', validationMiddleware.userValidationRule, validationMiddleware.validate,  userController.addUser); 

module.exports = router; 