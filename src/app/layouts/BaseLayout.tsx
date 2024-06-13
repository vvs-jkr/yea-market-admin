import { Outlet } from 'react-router-dom'
import '@/app/styles/App.css'
import { FormPage } from '@/pages/auth'
import { LayoutAlert } from '@/widgets/LayoutAlert'

export default function BaseLayout() {
  return (
    <div>
      <LayoutAlert />
      <FormPage />
      <Outlet />
    </div>
  )
}
