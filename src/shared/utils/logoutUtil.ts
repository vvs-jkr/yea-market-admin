import { logout } from '@/entities/auth/model/slice'
import { useLogoutMutation } from '@/entities/auth/api/authApi'
import { useDispatch } from 'react-redux'

export const useHandleLogout = () => {
  const dispatch = useDispatch()
  const [logoutApi] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.removeItem('market-accessToken')}`
      }
      await logoutApi({ headers }).unwrap()
      dispatch(logout())
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  return handleLogout
}
