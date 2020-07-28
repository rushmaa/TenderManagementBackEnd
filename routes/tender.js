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
  const newTender = new Tender(req.body);

  newTender
    .save()
    .then(() => {
      res.status(200).json("Successfully Added Tender");
    })
    .catch((err) => {
      res.status(500).json("Unable to add Tender");
    });
});

module.exports = TenderRouter;
