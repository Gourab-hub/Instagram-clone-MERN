const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys')
const requireLogin = require('../middleware/requiredLogin')


router.get('/', (req, res) => {
    res.send("hello")
})

router.get('/protected', requireLogin, (req, res) => {
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
                        password: hashedPassword,
                    })
                    // console.log(user)
                    user.save()
                        .then((user) => {
                            res.status(200).json({ message: "User saved Successfully" })
                        })
                        .catch((error) => { console.log(error) })
                })
        })
        .catch((error) => { console.log(error) })
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).json({ error: "Please add email or password" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        //res.status(422).json({ error: "Successfully Signed In" })

                        //Token has been registered
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        const {_id,name,email}=savedUser;
                        // console.log(_id,name,email)
                        res.json({ token: token, user:{_id,name,email}})
                       
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Password" })
                    }
                })
        })
})

module.exports = router