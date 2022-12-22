import { configureStore } from '@reduxjs/toolkit';
import { usersApi, albumsApi, postsApi } from './api';
import uiReducer from './reducers/uiReducer';

const store = configureStore({
    reducer: {
        ui: uiReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware()
        .concat(usersApi.middleware)
        .concat(albumsApi.middleware)
        .concat(postsApi.middleware)
    )
});

export default store;
