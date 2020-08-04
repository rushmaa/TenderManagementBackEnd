const express = require("express");
const TenderRouter = express.Router();
const Tender = require("../model/Tender");

let fs = require('fs-extra');

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
console.log('tender received---', newTender)
  newTender
    .save()
    .then(() => {
      res.status(200).json("Successfully Added Tender");
    })
    .catch((err) => {
      res.status(500).json("Unable to add Tender");
    });
});

// TenderRouter.post('/upload', function(req, res) {
  
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//         return res.status(500).json(err)
//     } else if (err) {
//         return res.status(500).json(err)
//     }
//     console.log(req.file)
// return res.status(200).send(req.file)

// })
// });



TenderRouter.get("/getfile", (req, res) => {
  res.download(`testfile.pdf`)
  // var fs = require('fs');
  // fs.readFile(`testfile.pdf`,  (err, data)=>{
  //   if (err) {
  //     res.status(404).json("File no found");
  //   } else {
  //     res.download(`testfile.pdf`)
  //   }
  //});
  
});
module.exports = TenderRouter;
