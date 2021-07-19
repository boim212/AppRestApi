'use strict';

var response = require('./response');
var connection = require('./koneksi');

exports.indes = function(req,res){
    response.ok("Aplikasi Rest Api Berjalan");
}