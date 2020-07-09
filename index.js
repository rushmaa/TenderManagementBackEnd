const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(bodyParser.json());
const user = require("./routes/user");
app.use(cors());
app.use("/user", user);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const uri = "mongodb://204.93.167.131/tender";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
        console.log("unable to connect to database");
        process.exit(1);
    } else console.log("successfully connected to the database");
  }
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app is running");
});
