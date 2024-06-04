import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseURL = import.meta.env.SERVER_API

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.yeasoft.ru/api/auth'
  }),
  endpoints: (builder) => ({
    registr: builder.mutation({
      query: ({ email, password, firstName, lastName, phone }) => ({
        url: '/register',
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          phone
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      async onQueryStarted({}, { queryFulfilled }) {
        try {
          const result = await queryFulfilled
          const data = result.data
          localStorage.setItem('market-accessToken', data.access_token)
        } catch (error: unknown) {
          console.log(error)
        }
      }
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      async onQueryStarted({}, { queryFulfilled }) {
        try {
          const result = await queryFulfilled
          const data = result.data
          localStorage.setItem('market-accessToken', data.access_token)
        } catch (error: unknown) {
          console.log(error)
        }
      }
    })
  })
})

export const { useLoginMutation, useRegistrMutation } = authApi
