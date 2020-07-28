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
});

module.exports = mongoose.model("tenders", TenderSchema);
