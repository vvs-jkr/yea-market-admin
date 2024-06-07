import * as yup from 'yup'

export const validateRules = yup.object().shape({
  email: yup.string().email().required().lowercase().trim(),
  password: yup.string().min(8).max(32).required().trim()
})
