const express = require('express');
const router = express.Router();
const userRegister = require('../model/registerUserModel');


// REGISTER ROUTE
router.post('/register', async(req, res)=>{
    const newUser = await new userRegister(req.body)
    try {
        const user = newUser.save()
        return res.send(user);
    } catch (error) {
        return res.json({message: error}).status(400)
    }
});

// GET ALL USERS
router.get('/allUsers', async(req, res)=>{
   try {
    const user = await  userRegister.find();
    if(!user) res.send('no user found');
    return res.send(user).json().status(200)
   } catch (error) {
    return res.json({message: 'something went wrong', error})
   }
})


// LOGIN ROUTE
router.post('/login', async (req, res)=>{
    const {email, password}= req.body;
    try {
        const user = await new userRegister.findOne({email:email, password:password});
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
module.exports=router;