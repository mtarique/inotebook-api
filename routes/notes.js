const express = require('express'); 
const router = express.Router(); 

router.get('/status', (req, res) => {
    res.json({status: true, message: "Notes services is running..."})
})

module.exports = router; 