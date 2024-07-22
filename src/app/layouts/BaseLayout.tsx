import { useNavigate } from 'react-router-dom'
import '@/app/styles/App.css'
import { LayoutAlert } from '@/widgets/LayoutAlert'
import { useEffect } from 'react'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'

export default function BaseLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem('market-accessToken')
    if (!token) {
      navigate('/auth')
    }
  }, [])

  return (
    <div>
      <LayoutAlert />
      <Header />
      <Main />
    </div>
  )
}
