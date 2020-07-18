const express = require('express');
const TenderRouter = express.Router();
const Tender = require('../model/Tender');

async function getTenders() {
    var output= await Tender.find({});
    console.log('output==',output)
}

TenderRouter.get('/getalltenders',(req,res)=>{
    console.log('request received=')
    getTenders()
    // console.log('output==',output)
    Tender.find({}).then((response)=>{
        console.log('response==',response)
        res.status(200).json({response});
    }).catch((err)=>{
        console.log('err==',err)
        res.status(500).json({err});
    })
});

TenderRouter.get('/gettenderdetails',(req,res)=>{
    Tender.findById({tenderID:req.body.tenderID}).then((err,response)=>{
        res.status(200).json({response});
    })
});

module.exports = TenderRouter;
