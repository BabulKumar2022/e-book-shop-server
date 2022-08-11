// const express = require("express");
// const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const app = express();
// require("dotenv").config();
// const port = process.env.PORT || 5000;

// // middleware
// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.guz4u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log(uri);
///////////////////////////////////////////////////////////////////////


const express = require("express");
const mongoose = require("mongoose");
const router =require("./routes/book-routers")

const app = express();

// //middleware 
// app.use("/", (req, res, next) =>{ 
//     res.send("This is our starting app");
// })
app.use("/books", router)//localhost:5000/books

  
 
mongoose.connect(
    "mongodb+srv://admin:sdJrnvaU4f8Pmj0z@cluster0.53gugm2.mongodb.net/e-shopping1?retryWrites=true&w=majority")
    .then(() => console.log("connected to MongoDB"))
    .then(() => {
        app.listen(5000)
    })
    .catch((error) => console.log(error)); 

 

//=admin
//=pass=sdJrnvaU4f8Pmj0z
// DB_ collection Name=e-shopping1