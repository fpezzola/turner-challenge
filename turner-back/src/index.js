const express = require('express');
const { initDatabase, getTweets } = require('./service/appService');
const cors = require('cors');
require('dotenv').config();

const initApp = async()=>{
    await initDatabase();
}

const app = express();

app.use(cors())

app.get('/api/tweets',async (req,res)=>{
    const { limit, offset } = req.query;
    const tweets = await getTweets(limit,offset);
    res.send(tweets);
});

app.listen(process.env.REACT_APP_SERVER_PORT,async()=>{
    await initApp();
    console.log('The server is up!');
});