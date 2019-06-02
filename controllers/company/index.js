const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', require('./list'));
router.post('/', require('./create'));
router.delete('/:id', require('./delete'));
router.patch('/:id', require('./edit'));
router.post('/:id/add-emp', require('./add_employee'));

module.exports = router;