const Songs = require('../../models/songs')
const Singer = require('../../models/singers')
const Topics = require('../../models/topics')

class index{
    async index(req,res){

        const songs = await Songs.find({deleted: false})

        for (const song of songs) {
            const infoSinger = await Singer.findOne({_id:song.singerId})
            song.infoSinger = infoSinger

            const topic = await Topics.findOne({_id:song.topicId})
            song.topic=topic
        }

        res.render('admin/pages/songs/index',{
            titilePage: "Quản lí bài hát ",
            songs: songs
        })
    }
}

module.exports= new index