const express = require('express')
const userRouter= express.Router()
const {userSignup,userSignin}= require('../controller/usersignup')

userRouter.post('/signup',userSignup)
userRouter.post('/signin',userSignin)

module.exports= userRouter