import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import Yup from 'yup'

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Username is required'),
	email: Yup.string().email('Invalid email').required('Email is required')
})

const UserForm = ({defaultValues = {}, onSubmit}) => {
	const {register, handleSubmit, setValue, formState:{errors, isValid}, reset} = useForm({defaultValues, resolver: yupResolver(validationSchema), mode: 'onChange'})
	
	React.useEffect(()=>{
		if(defaultValues) {
			Object.keys(defaultValues).forEach(key => {
				setValue(key, defaultValues[key])
			})
		}
	}, [defaultValues, setValue])

  return (
	 <form onSubmit={handleSubmit(onSubmit)}>
		<div>
		<input {...register('username')} placeholder='Username' className={errors.username ? 'input-error' : ''} />
		{errors.username && <p>{errors.username.message}</p>}
		</div>

		<div>
		<input {...register('email')} placeholder='Email' className={errors.email ? 'input-error':''} />

		{errors.email && <p>{errors.email.message}</p>}
		</div>
		<button type='submit' disabled={!isValid}>Submit</button>
	 </form>>
  )
}

export default UserForm