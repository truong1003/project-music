const Song=require("../../models/songs")
const Singer=require("../../models/singers")
const helperCovertToSlug=require("../../helper/convertToSlug")
class index{
    async search(req,res){
        const keyword= req.query.keyword

        let newSongs=[]

        if(keyword){
            const keywordRegax = new RegExp(keyword,'i')

            const stringSlug= helperCovertToSlug.convertToSlug(keyword)
            const stringSlugRegax = new RegExp(stringSlug,'i')
            const songs= await Song.find({
                $or:[{
                    title:keywordRegax,
                    slug:stringSlugRegax
                }]
            })
            
            for (const song of songs) {
                const infoSinger= await Singer.findOne({_id:song.singerId})
                song.infoSinger=infoSinger
            }

            newSongs=songs
        }

        res.render('client/pages/songs/search',{
            titlePage: `Kết quả: ${keyword}`,
            keyword:keyword,
            songs:newSongs
        })
    }
}

module.exports=new index