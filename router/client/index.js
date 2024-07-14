const topicsRouter=require('./topics')


function router(app){
    app.use('/topics',topicsRouter)
    
}


module.exports=router