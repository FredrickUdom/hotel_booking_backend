const express = require('express');
const router = express.Router();
const Room = require('../model/roomsModel');

router.get('/getAllRooms', async(req, res) => {
    try {
        const room = await Room.find({});
        res.send(room)
        // return res.json({room});
    } catch (error) {
        return res.json({message:error}).status(400)
    }
    
});

module.exports = router;