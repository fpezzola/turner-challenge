import React from 'react';
import TweetList from '../TweetsList/TweetList';
import { Container, Paper } from '@material-ui/core';
import Welcome from '../Welcome/Welcome';
import styled from 'styled-components';

const StyledPaper  = styled(Paper)`
    padding: 20px;
    background-color: beige !important;
`;

export default () => (
    <Container>
        <StyledPaper elevation={3}>
                <Welcome />
                <TweetList />
        </StyledPaper>
    </Container>
)