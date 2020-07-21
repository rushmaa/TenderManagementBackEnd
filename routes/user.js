const express = require('express');
const UserRouter = express.Router();
const User = require('../model/User');


UserRouter.post('/',async (req,res)=>{
  var userInstance={
    businessName: 'String',
    businessLegal: 'String',
    address: 'String',
    city: 'String',
    state: 'String',
    postcode: 'String',
    country: 'String',
    categories: 'String',
    email:'email@eail.com',
    password:'1235'
  }
    let userModel = new User(userInstance);
  await userModel.save();
  res.json(userModel);
});

UserRouter.get('/getallusers',async (req,res)=>{
 User.find({},(err, response) =>{
   if (err) {
     console.log('err=>', err)
   }
   res.status(200).json({success:true, users:response})
 })
});

UserRouter.post("/login", (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.pass }, (err, response) => {
      if (err) {
        res.status(500).json({ err:err });
      } else {
        res.status(200).json({ user:response });
      }
    });
  });

//create
UserRouter.post('/signup',(req,res)=>{
    const userObj = new User(req.body);
    userObj.save((err,document)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to add User",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully Added User",
                msgError : false
            }});
    });
});



module.exports = UserRouter;