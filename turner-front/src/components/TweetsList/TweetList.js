import React, { useEffect, useState } from 'react';
import LoadingFeedback from '../LoadingFeedback/LoadingFeedback';
import { loadTweets } from '../../api/api';
import Tweet from '../Tweet/Tweet';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styled from 'styled-components';
import { Divider, Paper } from '@material-ui/core';
import ViewMoreButton from '../ViewMoreButton/ViewMoreButton';

const TweetsListWrapper = styled(List)`
    width: 100%;
    maxWidth: 36ch;
`;

const TweetWrapper = styled(ListItem)`
    width: 100%;
`;

const Scrolleable = styled.div`
    max-height: ${props=>`${500*(props.offset+1)}px`};
    overflow-y: scroll;
`;

export default () => {
    const [tweetsList,setTweetList] = useState([]);
    const [isLoadingTweets,setIsLoadingTweets] = useState(false);
    const [apiError,setApiError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [tweetsOffset,setTweetsOffset] = useState(0);

    const loadTweetList = async (setLoadingFlag,offset=0) => {
        setLoadingFlag(true);
        try{
            const tweets = await loadTweets(10,offset);
            setTweetList([...tweetsList,...tweets]);
            setTweetsOffset(offset);
        }catch(e){
            console.error(e);
            setApiError(true);
        } finally { 
            setLoadingFlag(false);
        }
    }

    const onRetryFetch = () => {
        setApiError(false);
        loadTweetList(setIsLoadingTweets);
    }

    useEffect(()=>{
        loadTweetList(setIsLoadingTweets);
    },[]);

    const onViewMore = () => {
        let newOffset = tweetsOffset+1;
        loadTweetList(setIsLoadingMore,newOffset);
    }

    return (
        <LoadingFeedback
            isLoading={isLoadingTweets}
            error={apiError}
            onRetry={onRetryFetch}
        >
        <TweetsListWrapper>
        <Paper>
            <Scrolleable offset={tweetsOffset}>
            {
                tweetsList.map(tweet => 
                <>
                <TweetWrapper>
                    <Tweet tweet={tweet} />
                </TweetWrapper>
                <Divider component="li"/>
                </>
                )

            }
            </Scrolleable>
            <ViewMoreButton loading={isLoadingMore} onViewMore={onViewMore}/>
        </Paper>
        </TweetsListWrapper>
        </LoadingFeedback>
    )
    
}