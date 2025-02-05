import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Hamburger from 'hamburger-react';
import HeaderDashboard from '../components/HeaderDashboard';

const Sidebar = ({ children }) => {
    const [isOpenSidebar, setOpenSidebar] = useState(true);

    const toggleSidebar = () => {
        setOpenSidebar(!isOpenSidebar);
    };

    return (
        <div className='flex h-screen shadow-lg'>
            {/* Sidebar */}
            <div
                className={`w-64 bg-gray-700 text-white p-5 fixed top-0 left-0 bottom-0 transition-all duration-300 ${isOpenSidebar ? 'translate-x-0 ' : ' px-0.5 -translate-x-52'
                    } max-md:w-16 max-md:translate-x-0 max-md:hidden max-md:h-full`}
            >
                <div className="flex flex-col">
                    <div className='flex justify-between items-center'>
                        <h1 className={`transition-all duration-300 ${isOpenSidebar ? 'opacity-100' : 'opacity-0'}`}>Herca</h1>
                        <Hamburger toggled={isOpenSidebar} toggle={toggleSidebar} />
                    </div>
                    <hr />
                    <div className="mt-5">
                        <Link to='/dashboard' className='block text-lg py-2 px-4  hover:bg-amber-200 hover: rounded-2xl hover:text-black transition duration-200'>
                            Dashboard
                        </Link>
                        <Link to='/penjualan' className='block text-lg py-2 px-4 hover:bg-amber-200 hover: rounded-2xl hover:text-black transition duration-200'>
                            Penjualan
                        </Link>
                        <Link to='/pembayaran' className='block text-lg py-2 px-4 hover:bg-amber-200 hover: rounded-2xl hover:text-black transition duration-200'>
                            Pembayaran
                        </Link>
                        <Link to='/komisi' className='block text-lg py-2 px-4 hover:bg-amber-200 hover: rounded-2xl hover:text-black transition duration-200'>
                            Komisi
                        </Link>
                    </div>
                </div>
            </div>


            {/* Content */}
            <div
                className={`flex flex-col flex-1 bg-gray-100 overflow-auto transition-all duration-300 ${isOpenSidebar ? 'ml-64' : 'ml-12'
                    } max-md:ml-0`}
            >
                <HeaderDashboard />
                <div className="flex-1 overflow-auto">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Sidebar;
