const express = require('express'); 
const User = require('../models/User')
const router = express.Router(); 


router.get('/status', (req, res) => {
    res.json({status: true, message: "Auth services is running..."})
})

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        let user = new User(req.body) 

        await user.save(); 

        res.status(200).json({status: true, message: "New user added"})
    } catch (error) {
        console.log(error)
        res.status(500).json({status: false, message: "User could not be created"})
    }
  
})

module.exports = router; 