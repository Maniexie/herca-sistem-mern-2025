import React, { useState } from 'react'
import Sidebar from '../../layouts/Sidebar'
import Table from '../../components/Table'


const Dashboard = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <Sidebar>
                <Table position={"Marketing"} handleOpen={handleOpen} />
            </Sidebar>
        </div>
    )
}

export default Dashboard