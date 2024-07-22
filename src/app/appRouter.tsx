import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import { AuthPage } from '@/pages/auth'
import { LazyOrdersPage } from '@/pages/OrdersPage'
import { LazyProductsPage } from '@/pages/ProudctsPage'
import { LazyClientsPage } from '@/pages/ClientsPage'
import { LazySettingsPage } from '@/pages/SettingsPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'orders',
        element: <LazyOrdersPage />
      },
      {
        path: 'products',
        element: <LazyProductsPage />
      },
      {
        path: 'clients',
        element: <LazyClientsPage />
      },
      {
        path: 'settings',
        element: <LazySettingsPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthPage />
  }
])
