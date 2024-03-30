const express = require('express');
const router = express.Router();
const userRegister = require('../model/registerUser');
const userLogin = require('../model/loginUser'); 

// REGISTER ROUTE
router.post('/register', async(req, res)=>{
    const newUser = new userRegister(req.body)
    try {
        const user = newUser.save()
        return user;
    } catch (error) {
        return res.json({message: error}).status(400)
    }
});


// LOGIN ROUTE
router.post('login', (req,res)=>{
    const {email, password}= req.body;
    try {
        const user = new userLogin.findOne({email:email, password:password});
        if(!user){
           return res.json({message:'login failed'}).status(400);
        };

        const userDetails={
            email: user.email,
            name: user.name,
            _id: user._id,
            isAdmin: user.isAdmin
        }
        return res.send(userDetails)
        // return res.send(user);
    } catch (error) {
        res.json({message: error}).status(400)
    }
})