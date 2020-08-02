const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(bodyParser.json());
const user = require("./routes/user");
const tender = require("./routes/tender");
app.use(cors());
app.use("/user", user);
app.use("/tender", tender);
var multer = require('multer')

const Tender = require('./model/Tender');

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


const uri = "mongodb+srv://admin:admin@cluster0-lrfm0.mongodb.net/tender?retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
        console.log("unable to connect to database", err);
        process.exit(1);
    } else {
      console.log('connected to database');
    }
  }
);
var path='./public/uploads/'
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path)
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename);
    console.log(file);
  }
})

app.use( multer({ storage: storage }).single('file'));
app.post('/upload',(request, response,next)=>{
const file = request.file
if (!file) {
  const error = new Error('Please upload a file')
  error.httpStatusCode = 400
  return next(error)
}
else{
console.log('Server Upload ......');
      console.log(response.file);
      response.json({'msg':'File Uploaded ....'});
    }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app is running");
});
