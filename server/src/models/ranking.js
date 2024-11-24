const mongoose = require("mongoose");

const Ranking = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  time: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Ranking", Ranking);
