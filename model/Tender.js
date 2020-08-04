const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TenderSchema = new mongoose.Schema({
  tenderCode: String,
  tenderState: String,
  tenderName: String,
  category: String,
  issuedBy: String,
  openingdateFrom: String,
  openingdateTo: String,
  closingdateFrom: String,
  closingdateTo: String,
  grouping: String,
  issuedByHeader:String,
  contractNumber:String,
  enquiry:String,
  name:String,
  email:String,
  descriptionLevel1:String,
  descriptionListItem1:String,
  descriptionListItem2:String,
  responsesItem1:String,
  specificationItem1: String,
  tenderName: String,
  categories: String,
  fileList: String,
});

module.exports = mongoose.model("tenders", TenderSchema);
