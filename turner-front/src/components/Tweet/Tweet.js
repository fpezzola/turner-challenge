import React from 'react';
import styled from 'styled-components';
import TweetMeta from './TweetMeta/TweetMeta';
import TweetText from './TweetText/TweetText';
import TweetReport from './TweetReport/TweetReport';
import TweetAvatar from './TweetAvatar/TweetAvatar';


const TweetBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 100%;
    width: 1100px;
`;

const TweetWrapper = styled.div`
    display:flex;
    flex-direction: row;
`;

export default ({
    tweet: { id, created_at,user,user_logo_url,text,retweet_count,favorite_count }
}) => (
    <TweetWrapper>
        <TweetAvatar logo={user_logo_url}/>
        <TweetBox>
            <TweetMeta user={user} cdt={created_at}/>
            <TweetText text={text}/>
            <TweetReport favoriteCount={favorite_count} retweetCount={retweet_count}/>
        </TweetBox>
    </TweetWrapper>
);