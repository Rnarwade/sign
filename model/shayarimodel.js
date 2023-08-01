const mongoose = require('mongoose')

const shayariSchema= mongoose.Schema({

    catigory:{
        type:String,
        require:true
    },

    
    content:{
        type:String,
        require:true
    },
    
    userid:{
        type:String,
        require:true
    }

    , 
    sid:{
        type:String,
        require:true
    }

})

const Shayari = mongoose.model('shayari',shayariSchema)