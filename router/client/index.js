const topicsRouter=require('./topics')
const songsRouter=require('./songs')
const favoriteSongRouter=require('./favorite-song')
const searchRouter=require('./search')
function router(app){
    app.use('/topics',topicsRouter)
    app.use('/songs',songsRouter)
    app.use('/favorite-song',favoriteSongRouter)
    app.use('/search',searchRouter)
}


module.exports=router