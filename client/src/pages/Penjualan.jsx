import React from 'react'
import Sidebar from '../layouts/Sidebar'

const Penjualan = () => {
    return (
        <div>
            <Sidebar>
                {/* Add a lot of content to see the scroll */}
                <div className="space-y-4">
                    {Array.from({ length: 50 }).map((_, index) => (
                        <h1 key={index}>Penjualan {index + 1}</h1>
                    ))}
                </div>
            </Sidebar>
        </div>
    )
}

export default Penjualan