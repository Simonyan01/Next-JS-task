import { getAllUsers } from "@/_helpers/db"
import Image from "next/image"
import Link from "next/link"

export default async function Users() {
    const users = await getAllUsers()

    return (
        <section className="max-w-4xl mx-auto p-7 bg-white dark:bg-gray-900 rounded-xl shadow-xl">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-8">
                Users
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {users.map(({ id, name, surname, age, profession, photoPath }) => (
                    <div
                        key={id}
                        className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                    >
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {name} {surname}
                        </p>
                        <small className="text-gray-600 dark:text-gray-400 block mt-1">
                            {age} years old,{" "}
                            <strong className="text-blue-600 dark:text-blue-400">
                                {profession}
                            </strong>
                        </small>
                        <div className="mt-2">
                            <Image
                                src={photoPath || "https://wallpapers.com/images/hd/beautiful-sunset-pictures-ubxtuvfhpoampb6d.jpg"}
                                alt="Current photo"
                                width={1200}
                                height={800}
                                priority
                                unoptimized
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Link
                                href={`/edit/${id}`}
                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-300 transition"
                            >
                                Update
                            </Link>
                            <Link
                                href={`/users/${id}`}
                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-300 transition"
                            >
                                See more →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
