import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const TweetMetaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export default ({ user, cdt }) => {
    return (
        <TweetMetaWrapper>
            <Typography variant="h6">{user}</Typography>
            <Typography variant="h6">{new Date(cdt).toDateString()}</Typography>
        </TweetMetaWrapper>
        
    )
}