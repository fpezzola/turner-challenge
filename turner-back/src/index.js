const express = require('express');
const { initDatabase, getTweets } = require('./service/appService');
require('dotenv').config();

const initApp = async()=>{
    await initDatabase();
}

const app = express();

app.get('/api/tweets',async (req,res)=>{
    const { limit, offset } = req.query;
    const tweets = await getTweets(limit,offset);
    res.send(tweets);
});

app.listen(5000,async()=>{
    await initApp();
    console.log('The server is up!');
});