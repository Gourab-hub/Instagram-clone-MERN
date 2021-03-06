const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requiredLogin')
const Post = mongoose.model("Post")


router.get('/allpost',requireLogin, (req, res)=>{

    Post.find()
    // before .populate("postedBy")=>
    // {
    //     "_id": "6158a74308fcce8c75fe38f4",
    //     "title": "title 1",
    //     "body": "body 1",
    //     "photo": "no pic",
    //     "postedBy": "6158742a17948bf839f6a1d7",
    //     "__v": 0
    //   },

    //after populate
    // {
    //     "_id": "6158a74308fcce8c75fe38f4",
    //     "title": "title 1",
    //     "body": "body 1",
    //     "photo": "no pic",
    //     "postedBy": {
    //       "_id": "6158742a17948bf839f6a1d7",
    //       "name": "Gb",
    //       "email": "abcb@abc.com",
    //       "password": "$2a$12$0NRVL.1a9nzzpTc9lDGo7OpBM0aIp7tURyrfm2H3hqulat8XdKUzW",
    //       "__v": 0
    //     },
    //     "__v": 0
    //   },


    // show the internal value what we want Like id,password,name,email to only id name
    .populate("postedBy","_id name pic")
    .populate("comments.postedBy","_id name pic")
    .then(posts=>{
        res.json({posts: posts})
    })
    .catch((err)=>{console.error(err)})

})



router.get('/getsubpost',requireLogin, (req, res)=>{

    // if postedBy in following
    Post.find({postedBy:{$in:req.user.following}})
    .populate("postedBy","_id, name")
    .populate("comments.postedBy","_id, name")
    .then(posts=>{
        res.json({posts: posts})
    })
    .catch((err)=>{console.error(err)})

})







router.post('/createpost',requireLogin, (req, res) => {

    const {title,body,pic} = req.body;
    //console.log(title,body,pic)
    if(!title || !body|| !pic){
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

    //password not showing in json response
    req.user.password=undefined


    const post= new Post({
        title,
        body,
        photo:pic,
        postedBy: req.user
    })

    post.save().then((result) =>{
        res.json({post:result})
    })
    .catch((err)=>{ console.log(err) })
})


router.get('/mypost', requireLogin,(req, res) =>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then((result)=>{
        res.json({result})
    }).catch((err)=>{ console.log(err) })
})

// router.get('/mypost',requireLogin,(req,res)=>{
//     Post.find({postedBy:req.user._id})
//     .populate("PostedBy","_id name")
//     .then(mypost=>{
//         res.json({mypost})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })




router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})


router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})


router.put('/comment',requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})



router.delete('/deletepost/:postId',requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})


module.exports = router