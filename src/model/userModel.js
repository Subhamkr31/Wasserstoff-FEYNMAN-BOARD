
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    userName:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    topic:{
        type: [{
            _id: false,
            topicName: {
                type:String,
                required: true
            },
            addTopic :{
                type: String,
                required:true
            }
        }], 
    }
    
},{ versionKey:false , timestamps:true})

module.exports =  mongoose.model("userdata",userSchema)