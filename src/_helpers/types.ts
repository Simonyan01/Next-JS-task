export interface IUser {
  id?: number
  name: string
  surname: string
  age: number
  profession: string
  shortBiography: string
  photoPath?: string
}

export interface IProps {
  params: Promise<{ key: string }>
}
