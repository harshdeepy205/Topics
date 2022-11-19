const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TopicDetils = mongoose.model("TopicDetils");


router.get("/all-entry", (req, res) => {
    TopicDetils.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

router.post("/topic-entry", (req, res) => {
    const { topicName, description, status } = req.body;

    if (!topicName || !description || !status) {
        return res.status(422).json({ error: "Please Fill the details" });
    }

    const details = new TopicDetils({
        topicName,
        description,
        status,
    });

    details
        .save()
        .then((user) => {
            res.status(200).json({ message: "saved successfully" });
        })
        .catch((err) => {
            res.status(400).json({ error: err });
        });

});

module.exports = router;