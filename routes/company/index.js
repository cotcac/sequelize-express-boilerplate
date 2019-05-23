const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', require('./list'));
router.post('/', require('./create'));

module.exports = router;