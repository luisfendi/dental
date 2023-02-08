import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { handleClick } from '../store/drawerSlice';
import { StyledBurger as Burger } from '../UI/Burger';
import vars from '../styles/variables.module.scss';
import styled from 'styled-components';

const StyledList = styled(List)`
  @media (min-width: ${vars.desktop}) {
    display: flex;
  }
`;

export const Drawer = () => {
  const dispatch = useDispatch();
  const { left: drawerLeft, top: drawerTop } = useSelector(
    (state) => state.drawer,
  );
  const [open, setOpen] = useState({
    left: drawerLeft,
    top: drawerTop,
  });

  useEffect(() => {
    setOpen({
      left: drawerLeft,
      top: drawerTop,
    });
  }, [drawerLeft, drawerTop]);

  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === 'top' || anchor === 'bottom'
            ? 'auto'
            : 250,
      }}
      role='presentation'
      onClick={() => dispatch(handleClick(anchor))}
      onKeyDown={() => dispatch(handleClick(anchor))}
    >
      <StyledList>
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
      </StyledList>
    </Box>
  );

  return (
    <>
      <Burger
        onClick={() => dispatch(handleClick('left'))}
        open={open.left}
      />
      <>
        {['left', 'top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <SwipeableDrawer
              anchor={anchor}
              open={open[anchor]}
              onClose={() => dispatch(handleClick(anchor))}
              onOpen={() => dispatch(handleClick(anchor))}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </>
    </>
  );
};
