const FavoriteSong=require("../../models/favorite-songs")
const Songs=require("../../models/songs")
const Singer=require("../../models/singers")
class index{
    async index(req,res){
        const favoriteSong = await FavoriteSong.find({deleted:false})

        for (const item of favoriteSong) {
            const infoSong = await Songs.findOne({_id:item.songId})
            item.infoSong=infoSong

            const infoSinger=await Singer.findOne({_id:infoSong.singerId})
            item.infoSinger=infoSinger
        }

        res.render("client/pages/songs/favorite-song",{
            titlePage:"Bài hát yêu thích",
            favoriteSong:favoriteSong
        })
    }
}


module.exports=new index