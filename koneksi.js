var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_js_api'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Terkoneksi');
});

module.exports = conn;