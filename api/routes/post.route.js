const express = require('express');

const controller = require('../controllers/post.controller');

const router = express.Router();

router.get('/', controller.index);

module.exports = router;