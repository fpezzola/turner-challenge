import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 10px 0 10px 0;
    text-align: center;
`;

export default () => (
    <Wrapper>
        <Typography variant="body1" align="center">
            Welcome, here you can find the latest 100 tweets that conatin the 'javascript' word in it.
        </Typography>
    </Wrapper>
)