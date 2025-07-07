import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import useScreenWidth from '../../zustand/useScreenWidth';


const ProjectInfo5 = ({ toggleInfoView }) => {

    window.onload = () => {
        let projectInfo5Details = document.getElementById('projectInfo5Details');
        projectInfo5Details.classList.remove('showScrollbar');
    }

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (projectInfo5Details.scrollHeight > projectInfo5Details.clientHeight) {
            projectInfo5Details.classList.add('showScrollbar');
        } else {
            projectInfo5Details.classList.remove('showScrollbar');
        }
    }, [screenWidth]);

    const cardWidth = screenWidth >= 1000 ? "tw-w-[50vw]" : screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70vw]" : "tw-w-[90vw]";

    const buttonsDivLayout = screenWidth < 450 ? "tw-flex-col" : "";
    const cardBodyPadding = screenWidth < 750 ? "tw-px-4" : "tw-px-10";
    const headerTextSize = screenWidth < 500 ? "tw-text-xl" : "tw-text-2xl";
    const subheaderTextSize = screenWidth < 500 ? "tw-text-md" : "tw-text-lg";

    return (
        <div className='projectInfo tw-flex tw-flex-col tw-p-4' id='projectInfoFive'>
            <div className={`tw-card ${cardWidth} tw-h-[95%] tw-bg-white tw-shadow-xl`}>

                <div className='tw-relative'>
                    <button className="tw-absolute tw-p-2 tw-right-0 tw-top-0 tw-text-3xl closeInfoBtn" onClick={() => toggleInfoView(5)} ><IoClose /></button>
                </div>

                <div className={`tw-card-body tw-h-full ${cardBodyPadding} tw-items-center tw-gap-8`}>
                    <h1 className={`tw-font-extrabold ${headerTextSize}`}>TicTacToe Android App</h1>

                    <div className='tw-overflow-y-scroll tw-pr-2 project-info-details' id='projectInfo5Details'>
                        <ul className='info-list'>
                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>ABOUT</h3>
                            <p className='tw-font-semibold max-sm:tw-text-sm'>A simple Tic Tac Toe android mobile game. Made with Android Studios.</p>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DETAILS</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>This is a simple mobile game in which user can pay Tic Tac Toe.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The layout is made with XML, and the functionality of the app is coded using Java.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The project APK is built using Android Studios.</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="tw-flex tw-mt-auto tw-gap-4">
                        <a href='https://drive.google.com/file/d/14MiSl-rWEX5LPq-1smUqcsstUVdT1Y8M/view?usp=sharing' target='_blank' className="tw-btn tw-rounded-3xl info-btn">Download APK <FaFileDownload /></a>
                        <a href='https://github.com/deepak-kr-patra/Tic-Tac-Toe-game' target='_blank' className="tw-btn tw-rounded-3xl info-btn">GitHub Repo <FaGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectInfo5