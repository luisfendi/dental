import { createSlice } from '@reduxjs/toolkit';
export interface DrawerState {
  [index: string]: boolean;
}

const initialState: DrawerState = {
  top: false,
  left: false,
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    handleClick: (state, { payload }) => {
      state[payload] = !state[payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleClick } = drawerSlice.actions;

export default drawerSlice.reducer;
