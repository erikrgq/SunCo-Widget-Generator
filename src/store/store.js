import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';

const preloadedState = {};

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
});

export default store;