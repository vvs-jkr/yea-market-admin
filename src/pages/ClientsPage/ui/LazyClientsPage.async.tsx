import { lazy } from 'react'

const LazyClientsPage = lazy(() => import('./ClientsPage'))

export default LazyClientsPage
