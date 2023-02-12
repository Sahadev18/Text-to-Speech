const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({path: './.env'})

exports.db = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})