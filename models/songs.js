const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const Schema = mongoose.Schema;

const songssSchema= new Schema({
    title:String,
    avatar:String,
    description:String, 
    singerId:String,
    topicId:String,
    like:Number,
    lyrics:String,
    audio:String,
    status:String,
    slug:{
        type: String,
        slug: "title",
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

module.exports=mongoose.model('songssSchema', songssSchema, 'songs');
