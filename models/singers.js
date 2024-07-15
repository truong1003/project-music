const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const Schema = mongoose.Schema;

const singersSchema= new Schema({
    fullName:String,
    avatar:String,
    status:String,
    slug:{
        type: String,
        slug: "fullName",
        unique: true
    },
    deleted:{
        type: Boolean,
        default:false
    },
    deleteAt: Date
},{
    timestamps: true
})

module.exports=mongoose.model('singersSchema', singersSchema, 'singers');
