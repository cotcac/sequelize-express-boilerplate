const express = require('express');
const router = express.Router();
/* GET home page. */
router.post('/single', require('./single'));

module.exports = router;
