const mysql = require('mysql');
require('dotenv').config();

const {
    DB_HOST:host ,
    DB_DATABASE_NAME: database,
    DB_USER: user,
    DB_PASSWORD: password
} = process.env;

const pool = mysql.createPool({
  connectionLimit : 10,
  host,
  user,
  password,
  database,
  multipleStatements:true,
  charset:'utf8mb4'
});

module.exports = {
    getConnection: async () => {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err) reject(err);
                resolve(connection);
            });
        });
    }
}