const Topics = require("../../models/topics")
const Songs=require("../../models/songs")
const Singer=require("../../models/singers")
const FavoriteSong=require("../../models/favorite-songs")

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

    async like(req,res){
        const idSong = req.params.idSong
        const typeLike=req.params.typeLike

        const song = await Songs.findOne({_id:idSong,status:"active",deleted:false})

        const newLike= typeLike == "like" ? song.like + 1 : song.like -1

        await Songs.updateOne({_id:idSong},{like:newLike})

        res.json({
            code:200,   
            message:"Thành công",
            like:newLike
        })
    }

    async favorite(req,res){
        const songId = req.params.idSong
        const typeFavorite=req.params.typeFavorite

        switch (typeFavorite) {
            case 'favorite':
                const exitsFavoriteSong = await FavoriteSong.findOne({songId:songId})
                if(!exitsFavoriteSong){
                    const record = new FavoriteSong({userId:"",songId:songId})

                    await record.save()
                }
                break;
        
            case 'unfavorite':
                await FavoriteSong.deleteOne({songId:songId})
                break;
        }

        res.json({
            code:200,   
            message:"Thành công",
        })
    }

    async listen(req,res){
        const songId = req.params.idSong

        const song = await Songs.findOne({_id: songId})

        const listen = song.listen +1

        await Songs.updateOne({_id:songId},{listen:listen})

        const newSong = await Songs.findOne({_id: songId})

        res.json({
            code : 200,
            message:"Thành công",
            listen:newSong.listen
        })
    }
}   


module.exports= new index