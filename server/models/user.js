const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{ 
        type: 'string',
        required: true,
    },
    email:{ 
        type: 'string',
        required: true,
    },
    password:{  
        type: 'string',
        required: true,
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/gourab/image/upload/v1634578092/default_jzcens.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model('User',userSchema)
