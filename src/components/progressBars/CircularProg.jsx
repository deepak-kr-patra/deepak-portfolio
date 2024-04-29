import React from 'react'
import useScreenWidth from '../../zustand/useScreenWidth'

const CircularProg = () => {

    const { screenWidth } = useScreenWidth();

    const gridWidth = screenWidth >= 600 ? "tw-w-[70%]" : "tw-w-full";
    // const gridWidth = screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70%]" : "tw-w-full";

    return (
        <div className={`tw-grid tw-grid-cols-2 tw-gap-5 ${gridWidth} circles-container`}>
            {/* Java */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-Java">
                    <span className="progress-value value-Java">60%</span>
                </div>

                <span className="text">Java</span>
            </div>
            {/* OOPs */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-OOPs">
                    <span className="progress-value value-OOPs">65%</span>
                </div>

                <span className="text">OOPs</span>
            </div>
            {/* DSA */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-DSA">
                    <span className="progress-value value-DSA">55%</span>
                </div>

                <span className="text">DSA</span>
            </div>
            {/* Python */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-Python">
                    <span className="progress-value value-Python">50%</span>
                </div>

                <span className="text">Python</span>
            </div>
        </div>
    )
}

export default CircularProg