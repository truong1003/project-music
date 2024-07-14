const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicsSchema= new Schema({
    title:String,
    avatar:String,
    description:String,
    status:String,
    deleted:{
        type: Boolean,
        default:false
    },
    deleteAt: Date
},{
    timestamps: true
})

module.exports=mongoose.model('topicsSchema', topicsSchema, 'topics');
