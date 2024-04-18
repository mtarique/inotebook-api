const express = require('express'); 
const router = express.Router(); 

router.get('/status', (req, res) => {
    res.status(200).json({status: true, code: 200, message: "iNotebook API is running...", data: {}})
})

module.exports = router; 