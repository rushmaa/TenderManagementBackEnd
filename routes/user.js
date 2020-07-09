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

UserRouter.post("/login/", (req, res) => {
    User.findOne({ email: req.body.email }, (err, response) => {
      if (err)
        res.status(500).json({
          message: {
            msgBody: "Unable to get Users",
            msgError: true,
          },
        });
      else {
          //ToDo add code to check username and password matches.
        res.status(200).json({ response });
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