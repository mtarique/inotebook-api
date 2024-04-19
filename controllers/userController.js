const User = require('../models/User'); 

exports.addUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email}); 

        if(existingUser) {
            return res.status(400).json({
                status: false, 
                code: 400, 
                message: "Email alreay exists", 
                errors: {}
            }); 
        }
        
        const user = new User(req.body); 
        const savedUser = await user.save(); 
        
        res.status(200).json({
            status: true, 
            code: 200, 
            message: "User successfully added!", 
            data: savedUsers
        }); 
        
    } catch (error) {
        res.status(500).json({
            status: false, 
            code: 500, 
            message: "An error occurred!", 
            errors: error
        }); 
    }
}