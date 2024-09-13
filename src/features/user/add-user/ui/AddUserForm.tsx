import { registerValidateRules } from '@/shared/utils/validateRules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IForm } from './addUserForm.model'
import styles from './styles.module.css'
import Icon from '@/shared/ui/Icon/Icon'
import Button from '@/shared/ui/Button/Button'

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    resolver: yupResolver(registerValidateRules),
    mode: 'onChange'
  })

  const onSubmitResult = (data: IForm) => {
    console.log(data)
    reset()
  }

  return (
    <form className={styles.formWrapper}>
      <div className={styles.rowWrapper}>
        <div className={styles.inputsWrapper}>
          <label htmlFor="firstName" className={styles.inputTitle}>
            First Name{' '}
          </label>
          <input
            id="firstName"
            style={errors.firstName ? { border: '1px solid #F77B7D' } : {}}
            className={styles.input}
            placeholder="First Name"
            {...register('firstName', { required: 'This field is required' })}
          />
          {errors.firstName && <p className={styles.errorMessage}>{errors.firstName.message}</p>}
        </div>
        <div className={styles.inputsWrapper}>
          <label htmlFor="lastName" className={styles.inputTitle}>
            Last Name{' '}
          </label>
          <input
            id="lastName"
            style={errors.lastName ? { border: '1px solid #F77B7D' } : {}}
            className={styles.input}
            placeholder="Last Name"
            {...register('lastName', { required: 'This field is required' })}
          />
          {errors.lastName && <p className={styles.errorMessage}>{errors.lastName.message}</p>}
        </div>
      </div>
      <div className={styles.rowWrapper}>
        <div className={styles.inputsWrapper}>
          <label htmlFor="lastName" className={styles.inputTitle}>
            Email
          </label>
          <input
            id="email"
            style={errors.email ? { border: '1px solid #F77B7D' } : {}}
            className={styles.input}
            placeholder="Email"
            {...register('email', { required: 'This field is required' })}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>

        <div className={styles.inputsWrapper}>
          <label htmlFor="lastName" className={styles.inputTitle}>
            Phone
          </label>

          <input
            id="phone"
            style={errors.phone ? { border: '1px solid #F77B7D' } : {}}
            className={styles.input}
            placeholder="+7(999)9999999"
            {...register('phone', { required: 'This field is required' })}
          />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
        </div>
      </div>

      <div className={styles.buttonsWrapper}>
        <Button
          disabled={!isValid}
          iconLeft={<Icon icon="Save" />}
          style={{ width: '100%' }}
          label="Apply Changes"
        />
      </div>
    </form>
  )
}

export default AddUserForm
