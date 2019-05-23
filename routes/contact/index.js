const router = require('express').Router();
const verifyToken = require('../../lib/jwt');
router.post('/insert', require('./insert'));
router.get('/list', verifyToken, require('./list'));
router.delete('/delete', verifyToken, require('./delete'));
module.exports = router;
