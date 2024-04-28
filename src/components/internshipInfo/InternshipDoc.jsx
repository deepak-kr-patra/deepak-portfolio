import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import useScreenWidth from '../../zustand/useScreenWidth';


const InternshipDoc = ({ toggleDocView, imagePath, pdfPath }) => {

    const { screenWidth } = useScreenWidth();

    const certificateWidth = screenWidth < 650 ? "tw-w-screen" : screenWidth >= 650 && screenWidth < 950 ? "tw-w-[70vw]" : "tw-w-[50vw]";
    // const path = "certificate.jpg";

    return (
        <div className='internDoc tw-flex tw-flex-col tw-p-4' id='internDoc'>
            <button className="tw-btn tw-absolute tw-right-0 tw-top-0 tw-text-white tw-text-3xl" id='closeButton' onClick={() => toggleDocView(0)}><IoClose /></button>
            <div className={`tw-flex tw-flex-col ${certificateWidth} tw-items-center tw-justify-center tw-p-2`}>
                <div className='tw-flex tw-bg-black tw-w-full tw-h-10 tw-items-center tw-justify-center'>
                    <div className='tw-flex tw-w-[50%] tw-h-full tw-items-center tw-justify-start'>
                        <button className="tw-btn tw-text-white tw-text-xl" id='backButton' onClick={() => toggleDocView(0)}><IoArrowBack /></button>
                    </div>
                    <div className='tw-flex tw-w-[50%] tw-h-full tw-items-center tw-justify-end'>
                        <a href={pdfPath} className="tw-btn tw-text-white" id='openAsPDFButton' target='_blank'>Open as PDF <FaExternalLinkAlt /></a>
                    </div>
                </div>
                <div>
                    <img src={imagePath} alt="certificate" />
                </div>
            </div>
        </div>
    )
}

export default InternshipDoc