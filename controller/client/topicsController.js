const Topics= require('../../models/topics')


class index{
    async index(req,res){
        const topics = await Topics.find({deleted:false})

        res.render("client/pages/topics/index.pug",{
            titlePage:"Chủ đề bài hát"
        })
    }
}


module.exports = new index