import React from  'react';
import { ListItemAvatar, Avatar } from '@material-ui/core';

export default ({ logo }) => (
    <ListItemAvatar>
        <Avatar alt="User" src={logo} />
    </ListItemAvatar>
)