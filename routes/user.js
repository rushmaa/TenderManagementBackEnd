const express = require('express');
const UserRouter = express.Router();
const User = require('../model/User');


UserRouter.get('/',(req,res)=>{
    User.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to get Users",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});

UserRouter.post("/login", (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.pass }, (err, response) => {
      var email= req.body.email;
      var password= req.body.pass;
      //ToDo: Remove when we have user
      if (email==='test@test.com' && password=== '12345') {
        var user = new User({ contactPerson:{firstName:'sample', lastName:'ln', username: 'usn', phneNumber: 1234}  });
        res.status(200).json({ success:true, user:user });
      }else{
        console.log('failure')
        res.status(500).json({
          message: {
            msgBody: "Unable to get Users",
            msgError: true,
          },
        });
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