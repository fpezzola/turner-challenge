import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Loading from '../Loading/Loading';

const ViewMore = styled.div`
    margin: 10px 0 10px 0;
    text-align: center;
    background-color: aliceblue;
`;
export default ({ onViewMore, loading }) => (
    <ViewMore>
        {
            loading && <Loading />
        }
        {
            !loading && 
            <Button onClick={onViewMore}>
                View More
            </Button>
        }
        
    </ViewMore>
)