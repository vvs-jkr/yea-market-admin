import { useUpdateUserMutation } from '@/entities/auth/api/authApi'
import UserForm from './UserForm'

const EditUserForm = ({ userId, defaultValues }) => {
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation()

  const handleSubmit = async (data) => {
    try {
      await updateUser({ id: userId, userData: data }).unwrap()
      console.log('User updated successfully')
    } catch (error) {
      console.error('Failed to update user:', error)
    }
  }

  return (
    <div>
      <h2>Edit User</h2>
      <UserForm onSubmit={handleSubmit} defaultValues={defaultValues} />
    </div>
  )
}

export default EditUserForm
