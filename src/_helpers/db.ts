import { readFile, writeFile } from "fs/promises"
import { createWriteStream } from "fs"
import { IUser } from "./types"
import path from "path"

//  --------------------------
const UPLOAD_DIR = path.join(process.cwd(), "uploads") // ----- ChatGPT
//  --------------------------

export const getAllUsers = async (): Promise<IUser[]> => {
  const result = await readFile("data.json", "utf-8")

  return result ? JSON.parse(result) : []
}

export const addUser = async (body: IUser, photo?: Buffer, photoName?: string) => {
  const users = await getAllUsers()
  const photoPath = path.join(UPLOAD_DIR, photoName as string)
  const id = Date.now()

  if (photo) {
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

export const updateUser = async () => {}
