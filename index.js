const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// jwt
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
// require enviroment varaible
dotenv.config(); 
// connect mongoose
mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true },
   () => console.log('connect to database'));

// import module api router
const apiBookRouter = require('./api/routes/book.route');
const apiUserRouter = require('./api/routes/user.router');

const app = express();  
// use port 7000
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// allow client connect 
// cach 1:
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, authorization");
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//   next();
// });
// cach 2:
app.options('*', cors()); // Pass all cors
app.use(cors({
    exposedHeaders: '*'
}));
// create router api
app.use('/api/books', apiBookRouter);
app.use('/api/user', apiUserRouter);


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Listening on port ${port}`));