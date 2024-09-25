import { ModalBox } from '@/shared/ui/ModalBox/ModalBox'
import UserForm from '../../../../entities/user/ui/UserForm'
import { IUserForm } from '@/entities/user/ui/userForm.model'
import React, { useState } from 'react'
import Button from '@/shared/ui/Button/Button'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './styles.module.css'

const EditUser: React.FC = () => {
  //   const [updateUser] = useMutation(api.updateUser)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const initialUserData: IUserForm = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    password: ''
  }

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleUpdateUser = (data: IUserForm) => {
    console.log('Updated user data:', data)
    setIsModalOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Button
          onClick={handleOpenModal}
          iconLeft={<Icon icon="User" />}
          style={{ width: '100%', backgroundColor: '#353E5C' }}
          label="Add new admin"
        />
        <ModalBox
          isOpen={isModalOpen}
          modalTitle="Add new administrator"
          actionButtonLabel="Save and add"
          onClose={handleCloseModal}
          onAction={() => {}} >
          {() => <UserForm defaultValues={initialUserData} onSubmit={handleUpdateUser} />}
        </ModalBox>
      </div>
    </div>
  )
}

export default EditUser
