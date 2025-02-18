"use server"

import { redirect } from "next/navigation"
import { addUser } from "./db"

export const addUserAction = async (state: string, form: FormData) => {
  const name = form.get("name") as string
  const surname = form.get("surname") as string
  const age = Number(form.get("age")) || 0
  const profession = form.get("profession") as string
  const shortBiography = form.get("shortBiography") as string
  const file = form.get("photo") as File | null

  if (!name || !surname || !file) return "Please fill all the fields"

  const photo = Buffer.from(await file.arrayBuffer())
  const photoName = file.name

  await addUser({ name, surname, age, profession, shortBiography }, photo, photoName)

  return redirect("/users")
}
