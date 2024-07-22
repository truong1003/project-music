const express = require('express')
const router = express.Router()
const searchController=require('../../controller/client/searchController')

router.get("/:type",searchController.search)


module.exports=router
