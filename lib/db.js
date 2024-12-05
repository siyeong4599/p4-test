var mysql = require('mysql2');
var db = mysql.createConnection({
    host: '127.0.0.1', // 누드js수업본 참고함
    user: 'root',
    password: '0000',
    database: 'usertable'
});
db.connect();

module.exports = db;