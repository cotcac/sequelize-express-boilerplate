const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', require('./list'));

module.exports = router;