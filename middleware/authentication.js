const jwt = require('jsonwebtoken'); 

exports.authenticate = (req, res, next) => {
    const token = req.header('auth-token'); 

    if(!token) {
        return res.status(401).json({
            status: false, 
            code: 401, 
            message: "Unauthorized: Access denied due to invalid or missing token.", 
            data: {}
        }); 
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = payload; 
        next()
    } catch (error) {
        res.status(500).json({
            status: false, 
            code: 401, 
            message: "Unauthorized: Access denied due to invalid or missing token.", 
            data: error
        });
    }
}

///module.exports = {authenticate}; 