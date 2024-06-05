import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, AuthResponse } from '../model/types'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeasoft.ru/api/auth' }),
  endpoints: () => ({})
})

const extendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, { email: string; password: string }>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      }),

      async onQueryStarted({}, { queryFulfilled }) {
        try {
          const result = await queryFulfilled
          const data = result.data
          localStorage.setItem('market-accessToken', data.access_token)
        } catch (error) {
          console.error(error)
        }
      }
    }),
    register: builder.mutation<AuthResponse, IUser>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body
      }),

      async onQueryStarted({}, { queryFulfilled }) {
        try {
          const result = await queryFulfilled
          const data = result.data
          localStorage.setItem('market-accessToken', data.access_token)
        } catch (error) {
          console.error(error)
        }
      }
    })
  })
})

export const { useLoginMutation, useRegisterMutation } = extendedApi
