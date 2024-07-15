import { Outlet } from 'react-router-dom'
import '@/app/styles/App.css'
// import { FormPage } from '@/pages/auth'
import { LayoutAlert } from '@/widgets/LayoutAlert'
import { Header } from '@/widgets/header/ui'

export default function BaseLayout() {
  return (
    <div>
      <LayoutAlert />
      {/* <FormPage /> */}
      <Header />
      <Outlet />
    </div>
  )
}
