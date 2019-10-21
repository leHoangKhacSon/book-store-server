const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  author: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }, 
  img: {
    type: String,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema, 'books');

module.exports = Book;