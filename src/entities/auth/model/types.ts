export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string
}

export interface AuthResponse {
  message: string
  user: IUser
  accessToken: string
  refreshToken: string
}
