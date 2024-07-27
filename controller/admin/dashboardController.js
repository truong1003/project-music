
class index{
    async index(req,res){
        res.render('admin/pages/dashboard/index',{
            titilePage: "Trang Tổng Quát"
        })
    }
}

module.exports= new index