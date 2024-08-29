const Topics= require('../../models/topics')


class index{
    async index(req,res){
        const topics = await Topics.find({deleted: false})

        res.render('admin/pages/topic/index',{
            topics:topics
        })
    }
}

module.exports = new index