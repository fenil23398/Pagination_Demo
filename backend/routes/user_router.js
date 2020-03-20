var express = require('express');
var router = express.Router();
var userss = require('../models/user_model');

router.get('/',function(req,res){
    //Pagination For number Of receords on page
    const pagination = req.body.pagination ? parseInt(req.body.pagination) : 20;
    //PageNumber From which Page to Start 
    const pageNumber = req.body.page ? parseInt(req.body.page) : 1 ;
    userss.find({})
    //skip takes argument to skip number of entries 
    .skip((pageNumber -1 ) * pagination)
    //limit is number of Records we want to display
    .limit(pagination)
    .then(data => {
        res.status(200).send({
            "users" : data
        })
    })
    .catch(err => {
        res.status(400).send({
            "err" : err
        })
    })
})

module.exports = router;