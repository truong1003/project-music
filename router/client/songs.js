const express = require('express')
const router = express.Router()
const songssController=require('../../controller/client/songsController')

router.get("/:slugTopic",songssController.list)


module.exports=router
