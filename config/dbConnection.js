
var mysql = require('mysql'); 

var connMysql = function(){
    return mysql.createConnection({
        host: 'localhost',
        database: 'calendario',
        user: 'andre',
        password: ''
    });    
};

module.exports = function(){
    return connMysql;
};
