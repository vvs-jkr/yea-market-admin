import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, AuthResponse } from '../model/types'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://server.yeasoft.ru/api/admin/auth' }),
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
          localStorage.setItem('market-accessToken', data.accessToken)
        } catch (error) {
          console.error(error)
        }
      }
    }),
    registeration: builder.mutation<AuthResponse, IUser>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body
      }),

      async onQueryStarted({}, { queryFulfilled }) {
        try {
          const result = await queryFulfilled
          const data = result.data
          localStorage.setItem('market-accessToken', data.accessToken)
        } catch (error) {
          console.error(error)
        }
      }
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST'
      }),

      async onQueryStarted({}, { queryFulfilled }) {
        try {
          await queryFulfilled
          localStorage.removeItem('market-accessToken')
        } catch (error) {
          console.error(error)
        }
      }
    })
  })
})

export const { useLoginMutation, useRegisterationMutation, useLogoutMutation } = extendedApi
