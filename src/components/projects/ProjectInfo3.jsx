import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import useScreenWidth from '../../zustand/useScreenWidth';


const ProjectInfo3 = ({ toggleInfoView }) => {
    window.onload = () => {
        let projectInfo3Details = document.getElementById('projectInfo3Details');
        projectInfo3Details.classList.remove('showScrollbar');
    }

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (projectInfo3Details.scrollHeight > projectInfo3Details.clientHeight) {
            projectInfo3Details.classList.add('showScrollbar');
        } else {
            projectInfo3Details.classList.remove('showScrollbar');
        }
    }, [screenWidth]);

    const cardWidth = screenWidth >= 1000 ? "tw-w-[50vw]" : screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70vw]" : "tw-w-[90vw]";

    const cardBodyPadding = screenWidth < 750 ? "tw-px-4" : "tw-px-10";
    const headerTextSize = screenWidth < 500 ? "tw-text-xl" : "tw-text-2xl";
    const subheaderTextSize = screenWidth < 500 ? "tw-text-md" : "tw-text-lg";

    return (
        <div className='projectInfo tw-flex tw-flex-col tw-p-4' id='projectInfoThree'>
            <div className={`tw-card ${cardWidth} tw-h-[95%] tw-bg-white tw-shadow-xl`}>
                <div className='tw-relative'>
                    <button className="tw-absolute tw-p-2 tw-right-0 tw-top-0 tw-text-3xl closeInfoBtn" onClick={() => toggleInfoView("Three")} ><IoClose /></button>
                </div>

                <div className={`tw-card-body tw-h-full ${cardBodyPadding} tw-items-center tw-gap-8`}>
                    <h1 className={`tw-font-extrabold ${headerTextSize}`}>TextUtils React App</h1>

                    <div className='tw-overflow-y-scroll tw-pr-2 project-info-details' id='projectInfo3Details'>
                        <ul className='info-list'>
                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>ABOUT</h3>
                            <p className='tw-font-semibold max-sm:tw-text-sm'>A simple text utility static web application made using React. It has various text utility features like word counter and character counter, case conversion, extra spaces removal and also text speaker feature.</p>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DETAILS</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>This static website is designed using React.js functional components.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>User can enter a text to count words and characters, to use case conversion, or remove unnecessary extra spaces in the text.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>Has switchable light mode and dark mode.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DEPLOYMENT</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The project is deployed using GitHub Pages from the GitHub repository.</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="tw-flex tw-mt-auto tw-gap-4">
                        <a href='https://deepak-kr-patra.github.io/TextUtils/' target='_blank' className="tw-btn tw-rounded-3xl info-btn">Click to visit <FaExternalLinkAlt /></a>
                        <a href='https://github.com/deepak-kr-patra/TextUtils' target='_blank' className="tw-btn tw-rounded-3xl info-btn">GitHub Repo <FaGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectInfo3