export enum ErrorsMessages {
  email = "Неверный формат email. Он должен содержать символ '@' и доменное имя",
  password = 'Пароль должен содержать не менее 8 символов',
  unauthorized = 'К сожалению, мы не смогли найти вашу учетную запись',
  firstName = 'FirstName должно содержать не менее 3-х символов',
  lastName = 'LastName должно содержать не менее 3-х символов',
  phone = 'Введите правильный номер телефона формата +79999999999'
}

export interface ILoginForm {
  email: string
  password: string
}
