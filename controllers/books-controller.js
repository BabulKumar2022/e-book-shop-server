const Book = require("../model/Book");

// GetAllBooks
const getAllBooks = async (req, res, next) => {
  // this route will provide all of get books
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }
  if (!books) {
    return res.status(404).json({ message: "No Product Found" });
  }
  return res.status(200).json({ books });
};

// Get By Id
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book Found" });
  }
  return res.status(200).json({ book });
};
// addBook
const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to add any book" });
  }
  return res.status(201).json({ book });
};

// update book  

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to update any book" });
  }
  return res.status(200).json({ book });
};

//delete a book
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to delete any book" });
  }
  return res.status(200).json({ message: " Delete a book successfully" });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
