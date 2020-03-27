
const TWEETS_RESOURCE = '/api/tweets';

export const loadTweets = async (limit,offset) => {
    try{
        const response = await fetch(`${TWEETS_RESOURCE}?limit=${limit}&offset=${offset}`)
        return response.json();
    }catch(e){
        return Promise.reject(e);
    }
    
};