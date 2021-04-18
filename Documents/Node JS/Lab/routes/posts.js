const express = require('express')
const postModel= require('../models/posts')
const expRouter = express.Router()



expRouter.get("/", (req , res)=>{

    postModel.find({}, function (err, posts) { 

        res.send(posts); 
        }); 

})

expRouter.get("/:id" , (req , res)=>{
    let postId = req.params.id

    postModel.find({ _id: postId}, function (err, post) {
        if (err){
            console.log(err);
        }
        else{
            res.send(post); 
        }
    });
})


expRouter.put("/:id" , (req , res)=>{
    let postId = req.params.id

    postModel.findOne({_id:postId},(err,post)=>{
        const postData = req.body
        post.title = req.body.title; 
        post.body = req.body.body; 
        post.user_id = req.body.user_id; 
       
        post.save((err , postData)=>{
            if(!err) return res.json(postData)
            res.send("error happend in update")
        })
           
       });
       
       
})

expRouter.post("/" , (req , res)=>{
    const postData = req.body;
    const postInstance = new postModel({
        title : postData.title,
        body : postData.body,
        user_id : postData.user_id,

    })
    postInstance.save((err , postData)=>{
        if(!err) return res.json(postData)
        res.send("error happend")
    })

})

expRouter.delete("/:id" , (req , res)=>{
    
    let postId = req.params.id
    const postData = req.body

    postModel.findOneAndRemove({ _id: postId }, function(err) {
        if(!err) return res.json(postData)
        res.send("error happend in delete")
    });

})

module.exports= expRouter