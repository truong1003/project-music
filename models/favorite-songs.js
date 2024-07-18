const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const Schema = mongoose.Schema;

const favoriteSongsSchema= new Schema({
    userId:String,
    songId:String,
    deleted:{
        type: Boolean,
        default:false
    },
    deleteAt: Date
},{
    timestamps: true
})

module.exports=mongoose.model('favoriteSongsSchema', favoriteSongsSchema, 'favorite-songs');
