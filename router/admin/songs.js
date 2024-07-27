const express = require('express')
const router = express.Router()
const songsController=require('../../controller/admin/songsController')

router.get("/",songsController.index)


module.exports=router
