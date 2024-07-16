const express = require('express')
const router = express.Router()
const songssController=require('../../controller/client/songsController')

router.get("/:slugTopic",songssController.list)

router.get("/detail/:slugSong",songssController.detail)

router.patch("/like/:typeLike/:idSong",songssController.like)

module.exports=router
