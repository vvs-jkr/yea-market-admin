import ModalBox from '@/shared/ui/ModalBox'
import CreateUserForm from './CreateUserForm'

const CreateUserModal = ({ isOpen, onClose }) => (
  <ModalBox isOpen={isOpen} onClose={onClose}>
    <CreateUserForm />
  </ModalBox>
)

export default CreateUserModal
