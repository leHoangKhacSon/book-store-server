const express = require('express');

const controller = require('../controllers/book.controller');
// import middlware
const tokenMiddlware = require('../middlewares/token.middlware');

const router = express.Router();

// create router book
router.get('/', tokenMiddlware.checkToken, tokenMiddlware.protectedRoute, controller.index);
router.post('/', controller.postBook)

module.exports = router;