import React, { useState } from 'react';
import useHeaderTitle from '../utils/useHeaderTitle';
import Hamburger from 'hamburger-react';
import { user } from '../utils/user';
import { Link } from 'react-router';

const HeaderDashboard = () => {
    const [isOpen, setOpen] = useState(false);
    const headerTitle = useHeaderTitle();

    return (
        <>
            <nav className="bg-gray-400 text-white p-5 flex justify-between items-center max-md:hidden">
                <h2 className="text-lg font-semibold">{headerTitle}</h2>
                <div className="flex items-center space-x-4">
                    <h1 className="font-semibold text-lg">Welcome, <span className='font-bold'>{user.name}</span></h1>
                    <img
                        src={user.avatar}
                        alt="Profile"
                        className="w-10 h-10 rounded-full border-2 border-white"
                    />
                </div>
            </nav>

            <nav className='bg-gray-400 text-white p-5 flex justify-between items-center transition-all duration-300 ease-in-out md:hidden'>
                <h2 className="text-lg font-semibold text">{headerTitle}</h2>
                <ul>
                    <li className="md:hidden md:p-0 ">
                        <Hamburger
                            size={25}
                            color="white"
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </li>
                </ul>
                <ul
                    className={`absolute top-16 left-0 border-t-4 border-t-amber-50 divide-y-2 hover:divide-amber-200 w-full bg-gray-900 p-3 md:hidden transition-transform duration-300 ease-in-out transform ${isOpen
                        ? "block opacity-100 translate-y-0"
                        : "hidden opacity-0 translate-y-8"
                        }`}
                >
                    {/* mobile */}
                    <li>
                        <Link to="/dashboard" className='hover:bg-cyan-600 hover:rounded-md p-3 hover:p-1 w-full ' onClick={() => setOpen(false)}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/penjualan" className='hover:bg-cyan-600 hover:rounded-md p-3 hover:p-1 w-full ' onClick={() => setOpen(false)}>Penjualan</Link>
                    </li>
                    <li>
                        <Link to="/pembayaran" className='hover:bg-cyan-600 hover:rounded-md p-3 hover:p-1 w-full ' onClick={() => setOpen(false)}>Pembayaran</Link>
                    </li>
                    <li>
                        <h1 className="py-1 px-3 font-semibold text-lg">Welcome, <span className='font-bold'>{user.name}</span></h1>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default HeaderDashboard;
