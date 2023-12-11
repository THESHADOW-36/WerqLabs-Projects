import React from 'react'

const GridSystem = () => {
    return (
        <div className='border border-secondary'>
            <div className="row">
                <h3>Grid System</h3>
                <div className="col-1">
                    <h4 className="bg-primary border border-dark">1</h4>
                </div>
                <div className="col-1">
                    <h4 className="bg-primary border border-dark">1</h4>
                </div>
                <div className="col-1">
                    <h4 className="bg-primary border border-dark">1</h4>
                </div>
                <div className="col-3">
                    <h4 className="bg-primary border border-dark">3</h4>
                </div>
                <div className="col-6">
                    <h4 className="bg-primary border border-dark">6</h4>
                </div>
            </div>
        </div>
    )
}

export default GridSystem
