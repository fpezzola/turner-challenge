import React from 'react';
import Loading from '../Loading/Loading';
import { Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const RetryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Retry = ({onRetry}) => (
  <RetryWrapper>
      <Typography variant="body1">Something went Wrong</Typography>
      <Button onClick={onRetry}>Retry</Button>
  </RetryWrapper>
);

export default ({
    isLoading,
    onRetry,
    error,
    children
}) => <>
        {isLoading ? <Loading /> : error ? <Retry onRetry={onRetry} /> : children}
      </>