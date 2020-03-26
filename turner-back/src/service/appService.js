const { getTweets } = require('../client/twitter');
const { persist, get } = require('../repository/repository');

module.exports = {
    initDatabase: async () => {
        try{
            const { statuses } = await getTweets();
            const response = await persist(statuses);
            return Promise.resolve(response);
        }catch(e){
            console.error(e);
            throw new Error(`Error initalizing database error=${e.message}`);
        }
    },
    getTweets: async (limit,offset) => get(limit,offset)
}