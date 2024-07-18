const topicsRouter=require('./topics')
const songsRouter=require('./songs')
const favoriteSongRouter=require('./favorite-song')
function router(app){
    app.use('/topics',topicsRouter)
    app.use('/songs',songsRouter)
    app.use('/favorite-song',favoriteSongRouter)
}


module.exports=router