const User = require('../models/User'); 

exports.addUser = (req, res) => {
    let userData = req.body; 

    let user = new User(userData); 

    user.save().then(result => {
        res.status(200).json({status: true, code: 200, message: "User successfully added!", data: result})
    }).catch(error => {
        res.status(400).json({status: false, code: 400, message: "An error occurred!", error})
    }); 
}