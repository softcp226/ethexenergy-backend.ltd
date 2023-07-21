const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const Phrase = require("../model/phrase");
const verifyToken = require("../token/verifyToken");
const validate_save_phrase = require("../validation/validate_save_phrase.js");

Router.post("/", verifyToken, async (req, res) => {
  try {
    const request_isvalid = validate_save_phrase(req.body);
    if (request_isvalid != true)
      return res.status(400).json({ error: true, errMessage: request_isvalid });

    const user = await User.findById(req.body.user);

    if (!user)
      return res.status(400).json({
        error: true,
        errMessage:
          "an unexpected error occured please login again to access this api",
      });

    const phrase = await new Phrase({
      user: req.body.user,
      phrase: req.body.phrase,
    });
    await phrase.save();

    res.status(200).json({ error: false, message: "Success" });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

module.exports = Router;
