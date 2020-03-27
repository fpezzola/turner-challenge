import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const HeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
`;

export default () => (
    <HeaderWrapper>
        <Typography variant="h1" component="h4" align="center">Turner Challenge - Facundo Pezzola</Typography>
    </HeaderWrapper>
)