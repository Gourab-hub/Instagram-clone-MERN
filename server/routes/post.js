const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requiredLogin')
const Post = mongoose.model("Post")



router.post('/createpost',requireLogin, (req, res) => {

    const {title,body} = req.body;
    if (!title || !body) {
       return res.status(404).json({ error: "Please add title and body"})
    }

    //req.user pelam middleware use korar jonno
    // console.log(req.user)
    // res.send("ok")

    //before    req.user.password=undefined
    // {
    //     "post": {
    //         "title": "title 1",
    //         "body": "body 1",
    //         "photo": "no pic",
    //         "postedBy": {
    //             "_id": "6158742a17948bf839f6a1d7",
    //             "name": "Gb",
    //             "email": "abcb@abc.com",
    //             "password": "$2a$12$0NRVL.1a9nzzpTc9lDGo7OpBM0aIp7tURyrfm2H3hqulat8XdKUzW",
    //             "__v": 0
    //         },
    //         "_id": "6158a90c4fb3c1aa5c4761f0",
    //         "__v": 0
    //     }
    // }

    //after  req.user.password=undefined

    // {
    //     "post": {
    //         "title": "title 1",
    //         "body": "body 1",
    //         "photo": "no pic",
    //         "postedBy": {
    //             "_id": "6158742a17948bf839f6a1d7",
    //             "name": "Gb",
    //             "email": "abcb@abc.com",
    //             "__v": 0
    //         },
    //         "_id": "6158a93813babbc796971b48",
    //         "__v": 0
    //     }
    // }



    //password not showing in json response
    req.user.password=undefined


    const post= new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save().then((result) =>{
        res.json({post:result})
    })
    .catch((err)=>{ console.log(err) })
})

module.exports = router