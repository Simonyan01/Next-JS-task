import { getAllUsers } from "@/_helpers/db"
import Link from "next/link"

export default async function Users() {
    const users = await getAllUsers()

    console.log(users)

    return (
        <section className="max-w-5xl mx-auto p-5 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Users
            </h1>
            <div className="flex flex-wrap gap-6 justify-around items-center">
                {users.map(({ id, name, surname, age, profession }) => (
                    <div
                        key={id}
                        className="w-full sm:w-80 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {name} {surname}
                        </p>
                        <small className="text-gray-600 dark:text-gray-400 block">
                            {age} years old,{" "}
                            <strong className="text-blue-600 dark:text-blue-400">
                                {profession}
                            </strong>
                        </small>
                        <Link
                            href={`/users/${id}`}
                            className="mt-4 inline-block text-blue-500 hover:underline"
                        >
                            See more →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
