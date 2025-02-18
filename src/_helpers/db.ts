import { readFile, writeFile } from "fs/promises"
import { createWriteStream } from "fs"
import { IUser } from "./types"
import path from "path"

const UPLOAD_DIR = path.join("public", "uploads")

export const getAllUsers = async (): Promise<IUser[]> => {
  const result = await readFile("data.json", "utf-8")

  return result ? JSON.parse(result) : []
}

export const addUser = async (body: IUser, photo?: Buffer, photoName?: string) => {
  const users = await getAllUsers()
  const id = Date.now()
  const photoPath = path.join(UPLOAD_DIR, photoName as string)

  if (photo && photoName) {
    const stream = createWriteStream(photoPath)
    stream.write(photo)
    stream.end()
  }

  users.push({ id, ...body, photoPath })

  await writeFile("data.json", JSON.stringify(users, null, 4))
}

export const getUserById = async (id: number): Promise<IUser | undefined> => {
  const users = await getAllUsers()

  return users.find((user) => user.id == id)
}

export const updateUser = async (id: number, data: IUser, photo?: Buffer, photoName?: string) => {
  const users = await getAllUsers()

  const idx = users.findIndex((user) => user.id === id)
  if (idx === -1) return

  if (photo && photoName) {
    const photoPath = path.join(UPLOAD_DIR, photoName)
    const stream = createWriteStream(photoPath)
    stream.write(photo)
    stream.end()
    users[idx].photoPath = photoPath
  }

  users[idx] = { ...users[idx], ...data }

  await writeFile("data.json", JSON.stringify(users, null, 4))
}
