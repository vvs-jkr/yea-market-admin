import { lazy } from 'react'

const LazyProductsPage = lazy(() => import('./ProductsPage'))

export default LazyProductsPage
