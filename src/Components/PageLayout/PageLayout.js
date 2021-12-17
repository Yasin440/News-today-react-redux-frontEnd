import React from 'react'
import Sidebar from '../Shared/Sidebar/Sidebar'

const PageLayout = ({ children }) => {
    return (
        <div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-9 my-2">{children}</div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default PageLayout