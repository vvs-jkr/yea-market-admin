export interface IUser {
  firstName: string
  lastName: string
  password: string
  phone: string
  email: string
}

export interface AuthResponse {
  accessToken: string
  user: IUser
}
