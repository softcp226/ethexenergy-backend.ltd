const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to wallet database");
require("./user");

const phrase_schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  phrase: {
    type: String,
    required: true,
  },
});

const Phrase = mongoose.model("phrase", phrase_schema);
module.exports = Phrase;
