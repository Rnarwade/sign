const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose') 
const userRouter = require('./router/userRouter')
const  bodyParser = require('body-parser')

const shayariRouter = require('./router/shayariRouter')

app.use(bodyParser.urlencoded({extended:true}))
app.use('/user',userRouter)
app.use('/allshayari',shayariRouter)

app.use(cors({origin:'http://localhost:7000'}))

mongoose.connect("mongodb://127.0.0.1:27017/shayari").then(()=>{
    console.log("db server connect")

    app.listen(7000,()=>{
        console.log("server started")
    })
    
})



