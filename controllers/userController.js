const User = require('../models/User'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

exports.addUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email}); 

        if(existingUser) {
            return res.status(400).json({
                status: false, 
                code: 400, 
                message: "Email alreay exists", 
                data: {}
            }); 
        }
        
        // Hash password using bcryptjs
        req.body.password = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)); 

        const user = new User(req.body); 
        const savedUser = await user.save(); 
        
        res.status(200).json({
            status: true, 
            code: 200, 
            message: "User successfully added!", 
            data: savedUser
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

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email}); 

        if(!user) {
            return res.status(400).json({
                status: false, 
                code: 400, 
                message: "Account does not exist", 
                data: {}
            }); 
        }

        const validateUser = await bcrypt.compareSync(req.body.password, user.password); 

        if(validateUser) {

            let userPayload = {
                _id: user._id, 
                name: user.name, 
                email:user.email
            }

            const token = jwt.sign(userPayload, process.env.JWT_SECRET, {expiresIn: '4h'})
            res.status(200).json({
                status: true, 
                code: 200, 
                message: "Login successful!", 
                data: token
            }); 
        } else {
            return res.status(400).json({
                status: false, 
                code: 400, 
                message: "Invalid email or password", 
                data: {}
            }); 
        }
    } catch (error) {
        res.status(500).json({
            status: false, 
            code: 500, 
            message: "An error occurred!", 
            data: error
        }); 
    }
}

exports.getUser = async (req, res) => {
    console.log(req.user); 

    const user = await User.findById(req.user._id).select("-password")

    res.status(200).json({
        status: true, 
        code: 200, 
        message: "Get user executed", 
        data: user
    }); 
}