import { getUserById } from "@/_helpers/db"
import { notFound } from "next/navigation"

interface IProps {
    params: Promise<{ slug: string }>
}

export default async function UserDetails({ params }: IProps) {
    const id = (await params).slug
    const user = await getUserById(+id)

    if (!user) {
        return notFound()
    }

    return (
        <div>
            User details of {id}
            <h3>{user.name} {user.surname}</h3>
            <p>{user.shortBiography}</p>
        </div>
    )
}
