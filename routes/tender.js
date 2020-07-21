const express = require('express');
const TenderRouter = express.Router();
const Tender = require('../model/Tender');

TenderRouter.get('/getalltenders',(req,res)=>{
    Tender.find({}).then((response)=>{
        res.status(200).json({tenders:response});
    }).catch((err)=>{
        res.status(500).json({err});
    })
});

TenderRouter.get('/gettenderdetails',(req,res)=>{
    Tender.findById({tenderID:req.body.tenderID}).then((err,response)=>{
        res.status(200).json({response});
    })
});

module.exports = TenderRouter;
