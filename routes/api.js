const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/userController'); 

router.get('/status', (req, res) => {
    res.status(200).json({status: true, code: 200, message: "iNotebook API is running...", data: {}})
})

router.post('/add-user', userController.addUser); 

module.exports = router; 