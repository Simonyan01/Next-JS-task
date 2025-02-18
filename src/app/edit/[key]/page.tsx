import { getUserById } from "@/_helpers/db"
import { notFound } from "next/navigation"
import { IProps } from "@/_helpers/types"

export default async function EditUser({ params }: IProps) {
    const id = (await params).key
    const user = await getUserById(+id)

    if (!user) {
        return notFound()
    }

    const { name, surname, age, profession, shortBiography } = user

    return (
        <div className="flex justify-center bg-gray-900 text-gray-100 mx-auto max-w-xl rounded-lg p-10">
            <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-2xl p-6">
                <h1 className="text-2xl font-semibold text-center mb-4">Edit User</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Name</label>
                        <input
                            name="name"
                            defaultValue={name}
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Surname</label>
                        <input
                            name="surname"
                            defaultValue={surname}
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Age</label>
                        <input
                            type="number"
                            name="age"
                            defaultValue={age}
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Profession</label>
                        <input
                            name="profession"
                            defaultValue={profession}
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Short Biography</label>
                        <textarea
                            name="shortBiography"
                            defaultValue={shortBiography}
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Photo</label>
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}
