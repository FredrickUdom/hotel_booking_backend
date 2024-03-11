const express = require('express');
const router = express.Router();
const Room = require('../model/room');

router.get('/', async(req, res) => {
    try {
        const room = await Room.find({
            
        });
        return res.json({room});
    } catch (error) {
        console.log(error)
    }
    
});

module.exports = router;