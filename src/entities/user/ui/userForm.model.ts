import { SubmitHandler } from 'react-hook-form'

export enum ErrorsMessages {
  email = "Неверный формат, email должен содержать символ '@' и доменное имя",
  firstName = 'FirstName должно содержать не менее 3-х символов',
  lastName = 'LastName должно содержать не менее 3-х символов',
  phone = 'Введите правильный номер телефона формата +79999999999'
}

export enum UserRole {
  Administrator = 'admin',
  User = 'user',
  Manager = 'manager'
}

export interface IUserForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  role?: UserRole
  password: string
  oldPassword?: string
  newPassword?: string
}

export interface UserFormProps {
  defaultValues?: IUserForm
  onSubmit: SubmitHandler<IUserForm>
}
