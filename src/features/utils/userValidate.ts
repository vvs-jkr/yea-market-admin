import { UserRole } from '@/entities/user/ui/userForm.model'
import * as yup from 'yup'

export const userValidationSchema = yup.object().shape({
  firstName: yup.string().min(3).lowercase().trim(),
  lastName: yup.string().min(3).lowercase().trim(),
  phone: yup.string().min(10).max(12),
  email: yup.string().email().required().lowercase().trim(),
  password: yup.string().min(8).max(32).required('Password is required').trim(),
  oldPassword: yup.string().min(8).max(32).trim(),
  role: yup.string().oneOf(Object.values(UserRole), 'Invalid role').trim()
})
