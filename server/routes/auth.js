const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User")
const bcrypt = require('bcryptjs');




router.get('/', (req, res) => {
    res.send("hello")
})

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(422).json({ error: "Please add all required fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(409).json({ error: "User already exists" })
            }
            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        name,
                        email,
                        password:hashedPassword,
                    })
        
        
        
                    console.log(user)
                    user.save()
                        .then((user) => {
                            res.status(200).json({ error: "User saved Successfully" })
                        })
                        .catch((error) => { console.log(error) })

                })
            
        })
        .catch((error) => { console.log(error) })
})


module.exports = router