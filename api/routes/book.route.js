const express = require('express');

const controller = require('../controllers/book.controller');
// import middlware
const { checkToken, protectedRoute } = require('../middlewares/token.middlware');

const router = express.Router();

// create router book
router.get('/', checkToken, protectedRoute, controller.index);
router.post('/', controller.postBook)

module.exports = router;