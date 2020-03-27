import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';

const TweetReport = styled.div`
    display: flex;
    flex-direction: row;
`;

const TypographyWrapper = styled(Typography)`
    display: flex;
    align-items: center;
`;

export default ({ favoriteCount, retweetCount }) => {
    return (
        <TweetReport>
            <TypographyWrapper variant="caption" style={{marginRight:10}}><b>{favoriteCount}</b> <Favorite  style={{ color: '#dd2c00'}}/> </TypographyWrapper>
            <TypographyWrapper variant="caption" style={{marginLeft:10}}><b>{retweetCount}</b> <Share  style={{ color: '#4caf50'}}/></TypographyWrapper>
        </TweetReport>
    )
}