const express = require('express')
const router = express.Router()
const favoriteSongController=require('../../controller/client/favoriteSongController')

router.get("/",favoriteSongController.index)


module.exports=router
