const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BookSchama = new mongoose.Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: String,
  },
});

module.exports = mongoose.model("books", BookSchama);
