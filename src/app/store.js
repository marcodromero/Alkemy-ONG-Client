import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import alertReducer from '../features/alert/alertSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    alertIsVisible: alertReducer,
  },
});
