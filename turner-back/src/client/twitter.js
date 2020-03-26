const Twit = require('twit');
require('dotenv').config();

const client = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:          process.env.TOKEN,
    access_token_secret:  process.env.SECRET_TOKEN
});

const SEARCH_API = 'search/tweets';
const QUERY = { q: 'javascript-filter:retweets', count: 100, in_reply_to_status_id: null, lang:'en',include_rts:false };

module.exports = {
    getTweets : ()=>{
        return new Promise((resolve,reject)=>{
            client.get(SEARCH_API,QUERY, function(err, data) {
                if(err) reject(err);
                resolve(data);
            });
        });
    }
};