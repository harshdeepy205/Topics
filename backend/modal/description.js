const mongoose = require('mongoose');

const topicDetails=mongoose.Schema({
    topicName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

mongoose.model('TopicDetils',topicDetails);