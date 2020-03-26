const { getConnection } = require('../config/db');
module.exports = {
    withAsyncConnection: async(fn) => {
        let connection;
        try{
            connection = await getConnection();
            const response = await fn(connection);
            return Promise.resolve(response);
        }catch(e){
            throw e;
        } finally {
            try{
                connection.release();
            }catch(e){
                console.error(`ERROR! Closing connection throws error= ${e.message}`)
            }
        }
    }
}