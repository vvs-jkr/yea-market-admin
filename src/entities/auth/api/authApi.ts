import { baseApi } from '@/shared/api/baseApi'
import { AuthResponse } from '../model/types'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, { email: string; password: string }>({
      query: (body) => ({
        url: '/admin/auth/login',
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
    })
  })
})

export const { useLoginMutation } = authApi
