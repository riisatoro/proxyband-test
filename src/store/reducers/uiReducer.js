import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    albumsUserId: null,
    postsUserId: null,
};

const uiReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAlbumsUserId: (state, action) => {
            state.albumsUserId = action.payload;
        },
        setPostsUserId: (state, action) => {
            state.postsUserId = action.payload;
        }
    },
});

export const { setAlbumsUserId, setPostsUserId } = uiReducer.actions;

export default uiReducer.reducer;
