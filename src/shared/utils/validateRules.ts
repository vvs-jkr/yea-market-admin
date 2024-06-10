import * as yup from 'yup'

export const authValidateRules = yup.object().shape({
  email: yup.string().email().required().lowercase().trim(),
  password: yup.string().min(8).max(32).required().trim()
})

export const registerValidateRules = yup.object().shape({
  firstName: yup.string().min(3).lowercase().trim(),
  lastName: yup.string().min(3).lowercase().trim(),
  phone: yup.string().min(10).max(12),
  email: yup.string().email().required().lowercase().trim(),
  password: yup.string().min(8).max(32).required().trim()
})
