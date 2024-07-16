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

    async detail(req,res){
        const slug = req.params.slugSong

        const song = await Songs.findOne({slug:slug,status:"active",deleted:false})

        const singer = await Singer.findOne({_id:song.singerId,deleted:false}).select('fullName')

        const topic = await Topics.findOne({_id:song.topicId,deleted:false})

        res.render('client/pages/songs/detail',{
            titlePage:"Chi tiết bài hát",
            song : song,
            singer: singer,
            topic: topic
        })
    }

}   


module.exports= new index