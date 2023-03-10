import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { setupListeners } from '@reduxjs/toolkit/query'


export const store =  configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoNewsApi.middleware),


});

setupListeners(store.dispatch)
