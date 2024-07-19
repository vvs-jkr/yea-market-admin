import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import { AuthPage } from '@/pages/auth'
import { LazyOrdersPage } from '@/pages/OrdersPage'
import { LazyProductsPage } from '@/pages/ProudctsPage'
import { LazyClientsPage } from '@/pages/ClientsPage'
import { LazySettingsPage } from '@/pages/SettingsPage'
import { Suspense } from 'react'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'orders',
        element: (
          <Suspense>
            <LazyOrdersPage />
          </Suspense>
        )
      },
      {
        path: 'products',
        element: (
          <Suspense>
            <LazyProductsPage />
          </Suspense>
        )
      },
      {
        path: 'clients',
        element: (
          <Suspense>
            <LazyClientsPage />
          </Suspense>
        )
      },
      {
        path: 'settings',
        element: (
          <Suspense>
            <LazySettingsPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthPage />
  }
])
