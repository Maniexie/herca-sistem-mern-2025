import React, { useEffect, useState } from 'react'

const Table = ({ position }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

    })
    return (
        <div className='container'>
            <div class="w-full">
                <h3 class="text-lg font-semibold ml-3 text-slate-800">Daftar Nama {position}</h3>
                <p class="text-slate-500 mb-5 ml-3">Berikut adalah daftar nama {position}</p>
            </div>
            <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table class="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th class="p-4 border-b border-slate-300 bg-slate-50">
                                <p class="block text-sm font-normal leading-none text-slate-500">
                                    Name
                                </p>
                            </th>
                            <th class="p-4 border-b border-slate-300 bg-slate-50">
                                <p class="block text-sm font-normal leading-none text-slate-500">
                                    Role
                                </p>
                            </th>
                            <th class="p-4 border-b border-slate-300 bg-slate-50">
                                <p class="block text-sm font-normal leading-none text-slate-500">
                                    Email
                                </p>
                            </th>
                            <th class="p-4 border-b border-slate-300 bg-slate-50">
                                <p class="block text-sm font-normal leading-none text-slate-500">
                                    Location
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    John Michael
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Manager
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    john.michael@example.com
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    New York, USA
                                </p>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Alexa Liras
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Developer
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    alexa.liras@example.com
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    San Francisco, USA
                                </p>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Laurent Perrier
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Executive
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    laurent.perrier@example.com
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Paris, France
                                </p>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Michael Levi
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    Developer
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    michael.levi@example.com
                                </p>
                            </td>
                            <td class="p-4 border-b border-slate-200">
                                <p class="block text-sm text-slate-800">
                                    London, UK
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table