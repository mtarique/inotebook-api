const express = require('express'); 
const User = require('../models/User')
const router = express.Router(); 
const { body, validationResult } =  require('express-validator'); 

router.get('/status', (req, res) => {
    res.json({status: true, message: "Auth services is running..."})
})

router.post('/signup', [
    body('name', "Enter a valid name").isLength({ min: 3 }), 
    body('email', "Enter a valid email").isEmail(), 
    body('password', "Password must be atleast 5 chars long").isLength( {min: 5 })
], async (req, res) => {
    try {
        const errors = validationResult(req); 

        if(!errors.isEmpty()) {
            return res.status(400).json({ status: false, message: "Invalid user input", error: errors.array() }); 
        }

        // // Query type 1
        // let user = new User(req.body) 

        // await user.save(); 

        // res.status(200).json({status: true, message: "New user added"})

        // Type 2
        User.create({
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password
        }).then(user => res.json({status: true, message: "User is created", data: user}))
        .catch(err => {
            console.log(err)
            res.json({status: false, message: "An error occurred", error: err})
        })

        // User.create(req.body)
        // .then(user => res.json({status: true, message: "User is created", data: user}))
        // .catch(err => {
        //     console.log(err)
        //     res.json({status: false, message: "An error occurred", error: err})
        // })

    } catch (error) {
        console.log(error)
        res.status(500).json({status: false, message: "User could not be created", error: error})
    }
  
})

module.exports = router; 