const dashboardRouter = require('./dashboard')
const systemConfig=require('../../config/system')
const songsRouter=require('./songs')
const topicsRouter=require('./topics')
function router(app){
    const PATH_ADMIN=systemConfig.prefixAdmin
    app.use( PATH_ADMIN+'/dashboard',dashboardRouter)
    app.use( PATH_ADMIN+'/songs',songsRouter)
    app.use( PATH_ADMIN+'/topics',topicsRouter)
}


module.exports=router