const Book = require('../../models/book.model');

module.exports.index = async (req, res) => {
  const books = await Book.find();
  res.json(books);
}

module.exports.postBook = async (req, res) => {
  const { name, author, price, quantity, img } = req.body;
  const book = new Book({
    name, author, price, quantity, img
  });
  try{
    const saveBook = await book.save();
    res.send(saveBook);
  }catch(err){
    res.status(400).send(err);
  }
}