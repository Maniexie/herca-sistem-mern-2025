import React, { useEffect, useState } from 'react'
import { getMarketing } from '../api/marketing'
import ModalTailwind from "./ModalTailwind"

const Table = ({ position, handleOpen }) => {
    const [data, setData] = useState([{}])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchMarketing = await getMarketing("/marketings")
                setData(fetchMarketing)
            } catch (error) {
                setError("Failed to fetch data" + error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <div className=''>
            <div className="w-full sticky top-0 z-50">
                <div className="flex justify-between items-center px-5 py-0">
                    <div className='flex flex-col mt-1'>
                        <h3 className="text-lg font-semibold ml-3 text-slate-800">Daftar Nama {position}</h3>
                        <p className="text-slate-500 mb-5 ml-3">Berikut adalah daftar nama {position}</p>
                    </div>
                    <button onClick={() => setIsOpen(true)} className='bg-sky-500 p-3 mr-3 rounded-2xl hover:bg-sky-800 text-amber-100 cursor-pointer'>Add Marketing</button>
                </div>
            </div>

            {isOpen && <ModalTailwind isOpen={isOpen} setIsOpen={setIsOpen} />}

            <div className=" flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max ">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    No
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Name
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Position
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, id) => (
                            <tr className="hover:bg-slate-50" key={item._id}>
                                <td className="p-4 border-b border-slate-200">
                                    <p className="block text-sm text-slate-800">
                                        {id + 1}
                                    </p>
                                </td>
                                <td className="p-4 border-b border-slate-200">
                                    <p className="block text-sm text-slate-800">
                                        {item.name}
                                    </p>
                                </td>
                                <td className="p-4 border-b border-slate-200">
                                    <p className="block text-sm text-slate-800">
                                        {position}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
