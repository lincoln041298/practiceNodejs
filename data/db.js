const Book = require("../models/Book");
const Author = require("../models/Author");

const mongoDataMethods = {
  getAllBooks: async () => await Book.find(),
};

module.exports = mongoDataMethods;
