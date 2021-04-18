const express = require('express')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use("/users",userRouter) 


app.use(express.json())
app.use("/posts",postRouter) 







mongoose.connect("mongodb://localhost:27017/blog" ,
{useNewUrlParser:true , useUnifiedTopology:true}, (err)=>{
    if(err) return console.log(err)
    console.log("Connected to DB successfully");

})


app.listen(3000 , (err)=>{
    if(err) return console.log(err)
    console.log("started server on port 3000");
})
