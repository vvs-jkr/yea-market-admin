export enum ErrorsMessages {
  email = "Неверный формат, email должен содержать символ '@' и доменное имя",
  firstName = 'FirstName должно содержать не менее 3-х символов',
  lastName = 'LastName должно содержать не менее 3-х символов',
  phone = 'Введите правильный номер телефона формата +79999999999'
}

export interface IForm {
  firstName: string
  secondName: string
  email: string
  phone: string
}
