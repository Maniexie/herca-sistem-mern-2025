import React from 'react'
import Sidebar from '../layouts/Sidebar'
import Table from '../components/Table'


const Dashboard = () => {
    return (
        <div>
            <Sidebar>
                <Table position={"Marketing"} />
            </Sidebar>
        </div>
    )
}

export default Dashboard