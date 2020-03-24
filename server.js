const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3001;
// const routes = require("./routes");
// require('dotenv').config();
// const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WJBest", {useNewUrlParser: true}).then(() => {
//   console.log("Mongo connected")
//   console.log(process.env.MONGODB_URI)
// }).catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
