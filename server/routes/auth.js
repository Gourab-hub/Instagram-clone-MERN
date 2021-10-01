const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send("hello")
})

router.post('/signup', (req, res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        res.status(422).json({error:"Please add all required fields"})
    }

    res.json({message:"Successfully signed up"})
})




module.exports =router