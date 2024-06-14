mysql = require('mysql')
util = require('util')
conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "a2z" })
execute = util.promisify(conn.query).bind(conn)
module.exports = execute