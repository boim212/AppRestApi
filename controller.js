'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.indes = function(req,res){
    response.ok("Aplikasi Rest Api Berjalan");
}