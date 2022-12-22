import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_QUERY = fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' })

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: BASE_QUERY,
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users'
        })
    })
})

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: BASE_QUERY,
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: (albumsUserId) => `/albums?userId=${albumsUserId}`
        })
    })
})

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: BASE_QUERY,
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (postsUserId) => `/posts?userId=${postsUserId}`
        })
    })
})

export const { useGetUsersQuery } = usersApi;
export const { useGetAlbumsQuery } = albumsApi;
export const { useGetPostsQuery } = postsApi;
