const FavoriteSong=require("../../models/favorite-songs")

class index{
    async index(req,res){
        res.render("client/pages/songs/favorite-song",{
            titlePage:"Bài hát yêu thích"
        })
    }
}


module.exports=new index