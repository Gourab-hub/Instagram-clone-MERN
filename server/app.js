const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000
const {MONGOURI}= require('./keys')
require('./models/user')
//oEJcdFHykL2gZZqn
//mongodb+srv://Insta-DB:<password>@cluster0.yhevi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


//Connect mongoDB
mongoose.connect(MONGOURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
mongoose.connection.on('connected', ()=>{
    console.log("connected mongodb yahh................................................................")
})
mongoose.connection.on('error', (err)=>{
    console.log(' err connected',err)
})



app.listen(PORT, () => {
    console.log("server is running on port on ", PORT)
});