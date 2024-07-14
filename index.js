const express = require('express')
const app = express()
const path=require('path')
require('dotenv').config()
const db=require('./config/confgiDB')
db.connect()
const port=process.env.PORT
const routerClient=require('./router/client/index')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname,'public')))

routerClient(app)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })