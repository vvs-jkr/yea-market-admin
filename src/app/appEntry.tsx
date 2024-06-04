import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './appStore'
import '@/shared/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <RouterProvider router={appRouter} />
  </ReduxProvider>
)
