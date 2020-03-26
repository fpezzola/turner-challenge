const { withAsyncConnection } = require('./helper');
const moment = require('moment');
const  { v4 } = require('uuid');

module.exports = {
    persist: async (tweets)=>withAsyncConnection((connection) => {
        return new Promise((resolve,reject)=>{
            const insertQuery = 'INSERT INTO turner_test.tweets (id,tweet_id,created_at,text,user,user_logo_url,retweet_count,favorite_count) VALUES ?';
            const values = tweets.map((tweet) => {
                const { id,created_at,text,user,retweet_count,favorite_count } = tweet;
                return [
                    v4(),id,moment(created_at).toDate(),text,user.screen_name,user.profile_image_url,retweet_count,favorite_count
                ];
            });
            connection.query(insertQuery,[values],(err)=>{
                if(err) reject(err);
                resolve(tweets);
            });
        });
    }),
    get: async(limit=10,offset=0) => withAsyncConnection((connection)=>{
        return new Promise((resolve,reject)=>{
            const select = `SELECT * FROM turner_test.tweets ORDER BY created_at LIMIT ${offset},${limit}`;
            connection.query(select,(err,results)=>{
                if(err) reject(err);
                resolve(results);
            });
        });
    })
}