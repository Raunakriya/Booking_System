import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = ({ w }) => {
    return (
        <div>
            <RotatingLines
                strokeColor="red"
                strokeWidth="2"
                animationDuration="0.75"
                width={w}
                visible={true}
            />
        </div>
    )
}

export default Loader