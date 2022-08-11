const Book = require("../model/Book");


const getAllBooks = async (req, res, next) => {
    // this route will provide all of get books
    let books;
    try { 
        books = await Book.find(); 
    } catch (error) {
        console.log(error);
    }
    if(! books){
        return res.status(404).json({ message: "No Product Found"})
    }
    return res.status(200).json({ books});
}


exports.getAllBooks = getAllBooks;