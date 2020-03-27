const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10,
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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