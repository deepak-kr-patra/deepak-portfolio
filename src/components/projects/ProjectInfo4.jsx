import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import useScreenWidth from '../../zustand/useScreenWidth';


const ProjectInfo4 = ({ toggleInfoView }) => {

    window.onload = () => {
        let projectInfo4Details = document.getElementById('projectInfo4Details');
        projectInfo4Details.classList.remove('showScrollbar');
    }

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (projectInfo4Details.scrollHeight > projectInfo4Details.clientHeight) {
            projectInfo4Details.classList.add('showScrollbar');
        } else {
            projectInfo4Details.classList.remove('showScrollbar');
        }
    }, [screenWidth]);

    const cardWidth = screenWidth >= 1000 ? "tw-w-[50vw]" : screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70vw]" : "tw-w-[90vw]";

    const cardBodyPadding = screenWidth < 750 ? "tw-px-4" : "tw-px-10";
    const headerTextSize = screenWidth < 500 ? "tw-text-xl" : "tw-text-2xl";
    const subheaderTextSize = screenWidth < 500 ? "tw-text-md" : "tw-text-lg";

    return (
        <div className='projectInfo tw-flex tw-flex-col tw-p-4' id='projectInfoFour'>
            <div className={`tw-card ${cardWidth} tw-h-[95%] tw-bg-white tw-shadow-xl`}>

                <div className='tw-relative'>
                    <button className="tw-absolute tw-p-2 tw-right-0 tw-top-0 tw-text-3xl closeInfoBtn" onClick={() => toggleInfoView(4)} ><IoClose /></button>
                </div>

                <div className={`tw-card-body tw-h-full ${cardBodyPadding} tw-items-center tw-gap-8`}>
                    <h1 className={`tw-font-extrabold ${headerTextSize}`}>NewsCart News App</h1>

                    <div className='tw-overflow-y-scroll tw-pr-2 project-info-details' id='projectInfo4Details'>
                        <ul className='info-list'>
                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>ABOUT</h3>
                            <p className='tw-font-semibold'>A React.js project for reading latest news of all categories. It uses News API to fetch the latest news from the world.</p>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DETAILS</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold'>This web application project is made using React.js and Bootstrap components.</li>
                                <li className='tw-font-semibold'>React.js functional components have been used throughout the project.</li>
                                <li className='tw-font-semibold'>The app can be used to read latest news of different categories like current affairs, sports, science, etc.</li>
                                <li className='tw-font-semibold'>The app fetches latest news from the internet using News API.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>NEWS API</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold'>News API is a REST API that returns JSON search results for current and historic news articles published by over 150,000 worldwide sources.</li>
                                <li className='tw-font-semibold'>A News API key is used to make API call to fetch news articles.</li>
                                <li className='tw-font-semibold'>An API key is a unique identifier used to authenticate and authorize an user and to perform an API call.</li>
                            </ul>
                        </ul>
                    </div>

                    <div className={`tw-flex tw-mt-auto tw-gap-4`}>
                        <a href='https://github.com/deepak-kr-patra/newsApp' target='_blank' className="tw-btn tw-rounded-3xl info-btn">GitHub Repo <FaGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectInfo4