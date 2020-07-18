const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TenderSchema = new mongoose.Schema({
  tenderID: String,
  tenderTitleLevel1: String,
  tenderTitleLevel2: String,
  enquiries: String,
  name: String,
  email: String,
  descriptionTitle: String,
  descriptionContent: String,
  responseContent: String
});

module.exports = mongoose.model("Tender", TenderSchema);
