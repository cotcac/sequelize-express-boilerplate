const express = require('express');
const router = express.Router();
const mdl  = require('../models');
/* GET home page. */
router.get('/', function(req, res) {
   mdl.Company.findAll()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(500).json(err); 
    });
});


module.exports = router;
