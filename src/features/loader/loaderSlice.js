import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
    name: 'isLoading',
    initialState: {
        value: false,
    },
    reducers: {
        show: state => {
            state.value = true;
        },
        hide: state => {
            state.value = false;
        },
    },
});

export const { show, hide } = loaderSlice.actions;

export const selectLoader = state => state.isLoading.value;

export default loaderSlice.reducer;