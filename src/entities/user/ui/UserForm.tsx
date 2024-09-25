import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './styles.module.css'
import { UserRole, IUserForm, UserFormProps } from './userForm.model'
import { userValidationSchema } from '@/features/utils/userValidate'
import Button from '@/shared/ui/Button/Button'
import Icon from '@/shared/ui/Icon/Icon'
import { useNavigate } from 'react-router-dom'
import { useCreateUserMutation } from '../api/userApi'

const UserForm: React.FC<UserFormProps> = ({ defaultValues, onSubmit }) => {
  const [createUser] = useCreateUserMutation()
  const navigate = useNavigate()

  //  useEffect(()=>{
  // 	if(defaultValues) {
  // 		Object.keys(defaultValues). forEach(key=>{
  // 			setValue(key, defaultValues[key])
  // 		})
  // 	}
  //  },[defaultValues, setValue])

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    defaultValues
  })

  const onCreateUser = async (data: IUserForm) => {
    try {
      await createUser(data)
      reset()
      // navigate('/user')
      console.log('User created successfully')
    } catch (error) {
      console.error('Failed to create user', error)
    }
  }

  const submit: SubmitHandler<IUserForm> = (data) => {
    console.log(data)
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(submit)}>
      <div className={styles.rowWrapper}>
        <div className={styles.inputsWrapper}>
          <label htmlFor="firstName" className={styles.inputTitle}>
            First Name
          </label>
          <input
            style={errors.firstName && { border: '1px solid #F77B7D' }}
            className={styles.input}
            type="text"
            placeholder="First Name"
            {...register('firstName')}
          />
        </div>

        <div className={styles.inputsWrapper}>
          <label htmlFor="lastName" className={styles.inputTitle}>
            Last Name
          </label>
          <input
            style={errors.lastName && { border: '1px solid #F77B7D' }}
            className={styles.input}
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
          />
        </div>
      </div>

      <div className={styles.rowWrapper}>
        <div className={styles.inputsWrapper}>
          <label htmlFor="email" className={styles.inputTitle}>
            E-Mail
          </label>
          <input
            style={errors.email && { border: '1px solid #F77B7D' }}
            className={styles.input}
            type="text"
            placeholder="E-mail"
            {...register('email')}
          />
        </div>

        <div className={styles.inputsWrapper}>
          <label htmlFor="phone" className={styles.inputTitle}>
            Phone
          </label>
          <input
            style={errors.phone && { border: '1px solid #F77B7D' }}
            className={styles.input}
            type="text"
            placeholder="Phone"
            {...register('phone')}
          />
        </div>
      </div>

      <div className={styles.rowWrapper} style={{ width: '50%' }}>
        <div className={styles.inputsWrapper}>
          <label htmlFor="role" className={styles.inputTitle}>
            Role
          </label>
          <select
            id="role"
            className={styles.input}
            {...register('role')}
            style={errors.role && { border: '1px solid #F77B7D' }}>
            {Object.values(UserRole).map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label className={styles.inputTitle}>Change Password</label>

      <div className={styles.rowWrapper}>
        <div className={styles.inputsWrapper}>
          <label htmlFor="password" className={styles.inputTitle}>
            Old Password
          </label>
          <input
            style={errors.password && { border: '1px solid #F77B7D' }}
            className={styles.input}
            placeholder="Password"
            type="password"
            {...register('password')}
          />
        </div>

        <div className={styles.inputsWrapper}>
          <label htmlFor="password" className={styles.inputTitle}>
            New Password
          </label>
          <input
            style={errors.password && { border: '1px solid #F77B7D' }}
            className={styles.input}
            placeholder="Password"
            type="password"
            {...register('password')}
          />
        </div>
      </div>

      <div className={styles.buttonsWrapper} style={{ color: '#353E5C' }}>
        <Button
          type="submit"
         //  disabled={!isValid}
          iconLeft={<Icon icon="Save" />}
          style={{ width: '100%', backgroundColor: '#353E5C' }}
          label="Apply Changes"
        />
      </div>

      <div className={styles.buttonsWrapper} style={{ color: '#353E5C' }}></div>
    </form>
  )
}

export default UserForm
