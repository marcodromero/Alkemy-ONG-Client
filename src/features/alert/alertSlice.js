import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alertIsVisible',
  initialState: {
    value: false,
  },
  reducers: {
    show: state => {
        state.value = true;
    },
    hide: state => {
        state.value = false;
    }
  },
});

export const { show, hide } = alertSlice.actions;

export const selectAlert = state => state.alertIsVisible.value;

export default alertSlice.reducer;

