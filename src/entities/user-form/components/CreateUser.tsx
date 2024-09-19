import { useCreateUserMutation } from '@/entities/auth/api/authApi'
import UserForm from './UserForm'

const CreateUserForm = () => {
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation()

  const handleSubmit = async (data) => {
    try {
      await createUser(data).unwrap()
      console.log('User created successfully')
    } catch (error) {
      console.error('Failed to create user:', error)
    }
  }

  return (
    <div>
      <h2>Create User</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateUserForm
