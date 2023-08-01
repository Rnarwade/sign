
const Shayari = require('../model/shayarimodel')

const showshayari= async (req,res)=>{

    const {uid} = req.body

    const shayari = await Shayari.findOne({userid:uid})

    if(shayari){
        res.json({shayari:shayari})
    }else{
        res.send("user not found")
    }


}
const addshayari= async (req,res)=>{

    const {catogory,content,uid} = req.body

    const shayari = await Shayari.create({catigory:catogory,content:content,userid:uid})

    if(shayari){
        res.json({shayari:shayari})
    }else{
        res.send("user not Added !!")
    }


}
const updateshayari= async (req,res)=>{

    const {catogory,content,uid} = req.body

    const shayari = await Shayari.updateOne({_id:sid},{catigory:catogory,content:content})

    if(shayari){
        res.json({shayari:shayari})
    }else{
        res.send("user not Added !!")
    }


}
const deleteshayari= async (req,res)=>{

    const {sid} = req.body

    const shayari = await Shayari.deleteOne({_id:sid})

    if(shayari){
        res.json({shayari:shayari})
    }else{
        res.send("user not Added !!")
    }


}

module.exports= {showshayari,addshayari,updateshayari,deleteshayari}