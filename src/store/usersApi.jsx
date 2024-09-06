import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['users'],
    endpoints:(builder) => ({
        getAllUsers:builder.query({
            query: () => '/users',
            providesTags:(result, error, agg) => ['users']
        }),
        addUser:builder.mutation({
            query:(body) => ({
                url: '/users',
                method: 'POST',
                body
            }),
            invalidatesTags: ['users']

        }),
        deleteUser:builder.mutation({
            query:(id) => ({
                url: `/users/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['users']
        }),
        updateUser:builder.mutation({
            query:(body) => ({
                url: `/users/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['users']
        })
    })
}) 
export const {useGetAllUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation} = userApi