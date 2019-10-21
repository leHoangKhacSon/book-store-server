const express = require('express');

const controller = require('../controllers/book.controller');

const router = express.Router();

// create router book
router.get('/', controller.index);
router.post('/', controller.postBook)

module.exports = router;