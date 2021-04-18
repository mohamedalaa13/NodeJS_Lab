const express = require('express')
const userModel= require('../models/users')
const expRouter = express.Router()



expRouter.get("/", (req , res)=>{

    userModel.find({}, function (err, users) { 

        res.send(users); 
        }); 

})

expRouter.get("/:id" , (req , res)=>{
    let userId = req.params.id

    userModel.find({ _id: userId}, function (err, user) {
        if (err){
            console.log(err);
        }
        else{
            res.send(user); 
        }
    });
})

expRouter.put("/:id" , (req , res)=>{
    let userId = req.params.id
    
    userModel.findOne({_id:userId},(err,user)=>{
        const userData = req.body
        user.firstname = req.body.firstname; 
        user.lastname = req.body.lastname; 
        user.DoB = req.body.DoB; 
        user.email = req.body.email; 
       
        user.save((err , userData)=>{
            if(!err) return res.json(userData)
            res.send("error happend in update")
        })
           
       });
       
       
})

expRouter.post("/" , (req , res)=>{
    res.send("post connected")
    // const userData = req.body;
    console.log(req.params)
    // console.log("hello")
    // const userInstance = new userModel({
    //     firstname : userData.firstname,
    //     lastname : userData.lastname,
    //     DoB : userData.DoB,
    //     email : userData.email,

    // })
    // userInstance.save((err , userData)=>{
    //     if(!err) return res.json(userData)
    //     res.send("error happend")
        
    // })
    // console.log(userInstance)
     
})

expRouter.delete("/:id" , (req , res)=>{
    
    let userId = req.params.id
    const userData = req.body

    userModel.remove({ _id: userId }, function(err) {
        if(!err) return res.json(userData)
        res.send("error happend in delete")
    });

})

module.exports= expRouter