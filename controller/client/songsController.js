const Topics = require("../../models/topics")
const Songs=require("../../models/songs")
const Singer=require("../../models/singers")

class index {
    async list(req,res){

        const topic = await Topics.findOne({slug:req.params.slugTopic,status:"active",deleted:false})

        const songs= await Songs.find({topicId:topic.id,status:"active",deleted:false}).select("avatar title slug singerId like")

        for (const song of songs) {
            const infoSinger = await Singer.findOne({_id:song.singerId,status:"active",deleted:false})

            song.infoSinger=infoSinger
        }

        res.render('client/pages/songs/list',{
            titlePage:topic.title,
            songs:songs
        })
    }
}   


module.exports= new index