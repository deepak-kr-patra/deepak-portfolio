import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import useScreenWidth from '../../zustand/useScreenWidth';


const InternshipInfo = ({ toggleInfoView, toggleDocView }) => {

    window.onload = () => {
        let internInfoDetails = document.getElementById('internInfoDetails');
        internInfoDetails.classList.remove('showScrollbar');
    }

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (internInfoDetails.scrollHeight > internInfoDetails.clientHeight) {
            internInfoDetails.classList.add('showScrollbar');
        } else {
            internInfoDetails.classList.remove('showScrollbar');
        }
    }, [screenWidth]);

    const cardWidth = screenWidth >= 1000 ? "tw-w-[50vw]" : screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70vw]" : "tw-w-[90vw]";

    const cardBodyPadding = screenWidth < 750 ? "tw-px-4" : "tw-px-10";
    const headerTextSize = screenWidth < 500 ? "tw-text-xl" : "tw-text-2xl";
    const subheaderTextSize = screenWidth < 500 ? "tw-text-md" : "tw-text-lg";

    return (
        <div className='internInfo tw-flex tw-flex-col tw-p-4' id='internInfo'>
            <div className={`tw-card ${cardWidth} tw-h-[95%] tw-bg-white tw-shadow-xl`}>
                {/* tw-h-10 */}
                <div className='tw-relative'>
                    <button className="tw-absolute tw-p-2 tw-right-0 tw-top-0 tw-text-3xl closeInfoBtn" onClick={() => toggleInfoView()} ><IoClose /></button>
                </div>

                <div className={`tw-card-body tw-h-full ${cardBodyPadding} tw-items-center tw-gap-8`}>
                    <h1 className={`tw-font-extrabold ${headerTextSize}`}>AI Internship by 1Stop</h1>

                    <div className='tw-overflow-y-scroll tw-pr-2 project-info-details' id='internInfoDetails'>
                        <ul className='info-list'>
                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>ABOUT</h3>
                            <p className='tw-font-semibold'>Completed internship program on Artificial Intelligence by 1Stop, from 10th Feb, 2022 to 20th May, 2022.. from Personifwy.</p>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DETAILS</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold'>Learned concepts on AI domain Machine Learning, and it's other sub-domains like Deep Learning.</li>
                                <li className='tw-font-semibold'>Implemented Convolutional Neural Network, Computer Vision and Natural Language Processing using Python and it's libraries.</li>
                                <li className='tw-font-semibold'>Did some mini projects on the learned topics using Google Colab.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DID PROJECTS ON:</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold'>Recognition Of Objects with Convolutional Neural Network</li>
                                <li className='tw-font-semibold'>Hand Written Digit Classification with CNN</li>
                                <li className='tw-font-semibold'>News Classification using NLP</li>
                            </ul>
                        </ul>
                    </div>

                    <div className={`tw-flex tw-flex-col tw-mt-auto tw-gap-4`}>
                        <button className="tw-btn tw-rounded-3xl info-btn" onClick={() => toggleDocView(1)}>Project Completion Certificate <GrCertificate /></button>
                        <button className="tw-btn tw-rounded-3xl info-btn" onClick={() => toggleDocView(2)}>View Internship Certificate <GrCertificate /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InternshipInfo