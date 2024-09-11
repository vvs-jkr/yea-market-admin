import { lazy } from 'react'

const LazyOrdersPage = lazy(() => import('./OrdersPage'))

export default LazyOrdersPage
