const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  businessName: String,
  businessLegal: String,
  address: String,
  city: String,
  state: String,
  postcode: String,
  country: String,
  categories: String,
  type: String,
  confirmed: String,
  email: {
    type: String,
    required: true,
  },
  contactPerson: {
    firstName: String,
    lastName: String,
    position: String,
    username: String,
    phoneType: String,
    phneNumber: Number,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", UserSchema);
