
const User = require('../model/usermodle')

const bcrypt = require('bcrypt')

const userSignup = async (req,res)=>{

 const {name,email,password} = req.body

const hasedPasswod= await bcrypt.hash(password,10);

const user = await User.create({name:name,email:email,password:hasedPasswod})
if(user){
    res.send(user)
}


else{
    res.send("User not added")
} 

}

const userSignin = async(req,res)=>{
    
    const {email,password} = req.body


    const users = await User.findOne({email:email})
    
    const matchPassword = await bcrypt.compare(password,users.password);

    if(matchPassword){
       res.send(users)
    }else{
        res.send("User not found")
    }
}




module.exports={userSignup,userSignin}