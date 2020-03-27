import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const Loader = styled.div`
    display: flex;
    flex-start: center;
`;

export default () => <Loader><CircularProgress /></Loader>
