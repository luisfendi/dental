import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styled from '@emotion/styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { theme } from '../api/themeStyle';
import variables from '../styles/variables.module.scss';

const MyStyledButton = styled.button`
  position: fixed;
  left: 0;
  top: 8%;
  z-index: 999;
  width: 8vw;
  aspect-ratio: 1/1;
  border: 2px solid ${variables.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Drawer = () => {
  const [open, setOpen] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;

    setOpen({ ...open, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === 'top' || anchor === 'bottom'
            ? 'auto'
            : 250,
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
          (text) => (
            <ListItem
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ),
        )}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* <React.Fragment key={'left'}> */}
      <MyStyledButton onClick={toggleDrawer('left', true)}>
        <ArrowBackIosNewIcon sx={{ color: theme.green }} />
      </MyStyledButton>
      <SwipeableDrawer
        anchor={'left'}
        open={open['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
      {/* </React.Fragment> */}
    </>
  );
};
