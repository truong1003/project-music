const express = require('express')
const router = express.Router()
const topicsController=require('../../controller/admin/topicsController')

router.get("/",topicsController.index)


module.exports=router
