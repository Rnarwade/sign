const express = require('express')
const shayariRouter = express.Router()
const{showshayari,addshayari,updateshayari,deleteshayari} = require('../controller/Shayari')

shayariRouter.post('shayari',showshayari)
shayariRouter.put('shayari',addshayari)
shayariRouter.patch('shayari',updateshayari)
shayariRouter.delete('shayari',deleteshayari)

module.exports= shayariRouter