const topicsRouter=require('./topics')
const songsRouter=require('./songs')

function router(app){
    app.use('/topics',topicsRouter)
    app.use('/songs',songsRouter)
}


module.exports=router