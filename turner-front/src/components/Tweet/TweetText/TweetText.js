import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const TextWrapper = styled.p``;

export default ({ text }) => {
    return (
        <TextWrapper>
            <Typography component="span" variant="body1">
                {text}
            </Typography>
        </TextWrapper>
    )
}