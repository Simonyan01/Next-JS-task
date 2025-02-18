import { getUserById } from "@/_helpers/db"
import { notFound } from "next/navigation"
import { IProps } from "@/_helpers/types"
import Link from "next/link"

export default async function UserDetails({ params }: IProps) {
    const id = (await params).key
    const user = await getUserById(+id)

    if (!user) {
        return notFound()
    }

    const { name, surname, shortBiography } = user

    return (
        <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-10">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Details of user - {id}
            </h1>
            <div className="mt-5">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {name} {surname}
                </h3>
                <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {shortBiography}
                </p>
            </div>
            <div className="mt-6">
                <Link
                    href="/users"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                >
                    ← Go Back
                </Link>
            </div>
        </section>
    )
}
