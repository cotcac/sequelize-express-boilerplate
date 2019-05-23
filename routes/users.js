const express = require('express');
const router = express.Router();
const verifyToken = require('../lib/jwt');
const jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', (req, res) => {
  const user = {
    id: 1,
    name: 'Admin',
    email: 'admin@gmail.com'
  }
  jwt.sign({user}, 'theSecret', (err, token) => {
    res.status(200).json({token})
  })
})

// user profile
router.get('/me', verifyToken, (req, res) => {
  jwt.verify(req.token, 'theSecret', (err) => {
     if(err) return res.sendStatus(403);
     res.status(200).json({
       message: 'You are in your home.',
     })
  })
})


module.exports = router;
