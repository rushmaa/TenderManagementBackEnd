const express = require("express");
const UserRouter = express.Router();
const User = require("../model/User");

UserRouter.post("/signup", async (req, res) => {
  var user={...req.body}
  user.confirmed='0'
  console.log(user)
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

UserRouter.get("/getallusers", async (req, res) => {
  User.find({}, (err, response) => {
    if (err) {
      console.log("err=>", err);
    }
    res.status(200).json({ success: true, users: response });
  });
});

UserRouter.get("/getunconfirmeduser", async (req, res) => {
  console.log("in get unconfirmed user");
  User.find({ confirmed: "0" }, (err, response) => {
    if (err) {
      console.log("err=>", err);
    }
    res.status(200).json({ success: true, users: response });
  });
});

UserRouter.post("/login", (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.pass },
    (err, response) => {
      if (err) {
        res.status(500).json({ err: err });
      } else {
        res.status(200).json({ user: response });
      }
    }
  );
});

UserRouter.post("/update", (req, res) => {
  const filter = { email: req.body.email };
  const update = { confirmed: "1" };

  // `doc` is the document _before_ `update` was applied
  User.findOneAndUpdate(filter, update, (err, response) => {
    if (err) {
      res.status(500).json({ err: err });
    } else {
      res.status(200).json({ user: response });
    }
  });
});

//create
UserRouter.post("/signup", (req, res) => {
  const userObj = new User(req.body);
  userObj.save((err, document) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to add User",
          msgError: true,
        },
      });
    else
      res.status(200).json({
        message: {
          msgBody: "Successfully Added User",
          msgError: false,
        },
      });
  });
});

module.exports = UserRouter;
