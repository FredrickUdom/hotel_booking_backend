const express = require('express');
const router = express.Router();
const User = require('../model/user');

// REGISTER ROUTE
router.post('/register', async(req, res)=>{
    const newUser = new User(req.body)
    try {
        const user = newUser.save()
        return user;
    } catch (error) {
        return res.json({message: error}).status(400)
    }
});


// LOGIN ROUTE