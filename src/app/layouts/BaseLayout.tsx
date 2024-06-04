import { Outlet } from 'react-router-dom'
import '@/app/styles/App.css'
import { FormPage } from '@/pages/auth'

export default function BaseLayout() {
  return (
    <div>
      <FormPage />
      <Outlet />
    </div>
  )
}
