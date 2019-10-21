const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// require enviroment varaible
dotenv.config(); 
// connect mongoose
mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true },
   () => console.log('connect to database'));


// import module api router
const apiBookRouter = require('./api/routes/book.route');

const app = express();
// use port 7000
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create router api
app.use('/api/books', apiBookRouter);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Listening on port ${port}`));