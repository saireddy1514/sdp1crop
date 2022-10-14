const { response } = require('express');
const express = require('express');
const router = express.Router()
const signuptemp=require("../models/signupmodel")
const productsignuptemp = require("../models/bookingproduct");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.post('/register',async (req,res)=>{
    const saltpwd = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(req.body.password,saltpwd);
    const signupuser = new signuptemp({
        fullname:req.body.fullname,
        email:req.body.email,
        password:securepassword
    })
    signupuser.save()
    .then(data=>{
        res.json(data);
    })
    .catch(e=>{
        res.json(e);
    })
});

router.post('/productregister',async (req,res)=>{
  // console.log(req.body);
  const productsignup = new productsignuptemp(req.body);
  productsignup.save()
  .then(data=>{
      res.json(data);
  })
  .catch(e=>{
      res.json(e);
  })
});

router.get('/products',async (req,res)=>{
  productsignuptemp.find()
  .then((product)=>{
      res.send(product);
  })
  .catch((err)=>{
    res.status(400).send({
      message: "Passwords does not match",
      err,
    });
  })
})

router.post('/login',async (req,res)=>{
    signuptemp.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          if(!passwordCheck) {
            return res.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
              userRole:user.role
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          res.status(200).send({
            message: "Login Successful",
            email: user.email,
            role:user.role,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

module.exports=router