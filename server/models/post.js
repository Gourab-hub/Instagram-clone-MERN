const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{ 
        type: 'string',
        required: true,
    },
    body:{ 
        type: 'string',
        required: true,
    },
    photo:{  
        type: 'string',
        required: true,
    },
    likes:{ 
        type: ObjectId,
        ref:"User"

    },
    postedBy:{ 
        type: ObjectId,
        ref:"User"
    }
})

mongoose.model('Post',postSchema)
