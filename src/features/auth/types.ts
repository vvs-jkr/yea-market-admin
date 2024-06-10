export enum ErrorsMessages {
  email = "Неверный формат email. Он должен содержать символ '@' и доменное имя",
  password = 'Пароль должен содержать не менее 8 символов',
  unauthorized = 'К сожалению, мы не смогли найти вашу учетную запись'
}

export interface ILoginForm {
  email: string
  password: string
}
