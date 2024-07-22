const Song=require("../../models/songs")
const Singer=require("../../models/singers")
const helperCovertToSlug=require("../../helper/convertToSlug")
class index{
    async search(req,res){
        const type = req.params.type

        const keyword= req.query.keyword

        let newSongs=[]

        if(keyword){
            const keywordRegex = new RegExp(keyword,'i')

            const stringSlug= helperCovertToSlug.convertToSlug(keyword)
            const stringSlugRegax = new RegExp(stringSlug,'i')
            const songs= await Song.find({
                $or:[
                    {title:keywordRegex},
                    {slug:stringSlugRegax}
                ]
            })
            
            for (const song of songs) {
                const infoSinger= await Singer.findOne({_id:song.singerId})

                newSongs.push({
                    id: song.id,
                    title: song.title,
                    avatar: song.avatar,
                    like: song.like,
                    slug: song.slug,
                    infoSinger:{
                        fullName: infoSinger.fullName
                    }
                })
            }

        }

        switch (type) {
            case 'result':
                res.render('client/pages/songs/search',{
                    titlePage: `Kết quả: ${keyword}`,
                    keyword:keyword,
                    songs:newSongs
                })
                break;
            case 'suggest':
                res.json({
                    code:200,
                    message:"Thành công",
                    songs:newSongs
                })
                break;
        }
    }
}

module.exports=new index