'use strict'
var jwt =require('jwt-simple');
var moment = require('moment');
var secret = 'secretkey';

exports.auth = function(req, res,next){
     console.log(req.headers); 
    if(req.headers.authorization){
        return res.status(403).send({message: "No headers error"})
    }
    next() 
}
