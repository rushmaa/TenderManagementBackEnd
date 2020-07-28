const express = require("express");
const TenderRouter = express.Router();
const Tender = require("../model/Tender");

TenderRouter.get("/getalltenders", (req, res) => {
  Tender.find({})
    .then((response) => {
      res.status(200).json({ tenders: response });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

TenderRouter.get("/gettenderdetails", (req, res) => {
  Tender.findById({ tenderID: req.body.tenderID }).then((err, response) => {
    res.status(200).json({ response });
  });
});

TenderRouter.post("/addNewTender", (req, res) => {
  const newTender = new Tender({
    tenderID: "",
    tenderTitleLevel1: "",
    tenderTitleLevel2: "String",
    enquiries: "String",
    name: "String",
    email: "String",
    descriptionTitle: "String",
    descriptionContent: "String",
    responseContent: "String",
  });

  newTender
    .save()
    .then(() =>
      res.status(200).json({
        message: {
          msgBody: "Successfully Added Tender",
          msgError: false,
        },
      })
    )
    .catch((err) =>
      res.status(500).json({
        message: {
          msgBody: "Unable to add Tender",
          msgError: true,
        },
      })
    );
});

module.exports = TenderRouter;
