import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import useScreenWidth from '../../zustand/useScreenWidth';


const ProjectInfo8 = ({ toggleInfoView }) => {

    window.onload = () => {
        let projectInfo8Details = document.getElementById('projectInfo8Details');
        projectInfo8Details.classList.remove('showScrollbar');
    }

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (projectInfo8Details.scrollHeight > projectInfo8Details.clientHeight) {
            projectInfo8Details.classList.add('showScrollbar');
        } else {
            projectInfo8Details.classList.remove('showScrollbar');
        }
    }, [screenWidth]);

    const cardWidth = screenWidth >= 1000 ? "tw-w-[50vw]" : screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70vw]" : "tw-w-[90vw]";

    const cardBodyPadding = screenWidth < 750 ? "tw-px-4" : "tw-px-10";
    const headerTextSize = screenWidth < 500 ? "tw-text-xl" : "tw-text-2xl";
    const subheaderTextSize = screenWidth < 500 ? "tw-text-md" : "tw-text-lg";

    return (
        <div className='projectInfo tw-flex tw-flex-col tw-p-4' id='projectInfoEight'>
            <div className={`tw-card ${cardWidth} tw-h-[95%] tw-bg-white tw-shadow-xl`}>
                <div className='tw-relative'>
                    <button className="tw-absolute tw-p-2 tw-right-0 tw-top-0 tw-text-3xl closeInfoBtn" onClick={() => toggleInfoView(8)} ><IoClose /></button>
                </div>

                <div className={`tw-card-body tw-h-full ${cardBodyPadding} tw-items-center tw-gap-8`}>
                    <h1 className={`tw-font-extrabold ${headerTextSize}`}>Expense Manager</h1>

                    <div className='tw-overflow-y-scroll tw-pr-2 project-info-details' id='projectInfo8Details'>
                        <ul className='info-list'>
                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>ABOUT</h3>
                            <p className='tw-font-semibold max-sm:tw-text-sm'>A full stack Expense Manager web application based on MERN stack to manage your day to day expenses. Includes graphical representation of expenses' data.</p>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>FRONTEND</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The User Interface of the app is created using React.js library, Tailwind CSS and DaisyUI components.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The UI is responsive for all screen sizes.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>BACKEND</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The backend of the web app is created by Node.js JavaScript runtime environment. </li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>And the server is created using Express.js library.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DATABASE</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>MongoDB is used as the database of this application. The expenses and its data are saved in cloud.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DEPLOYMENT</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>This project is deployed using Render Dashboard from GitHub repository.</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="tw-flex tw-mt-auto tw-gap-4">
                        <a href='https://expense-manager-byke.onrender.com/' target='_blank' className="tw-btn tw-rounded-3xl info-btn">Click to visit <FaExternalLinkAlt /></a>
                        <a href='https://github.com/deepak-kr-patra/expense-manager' target='_blank' className="tw-btn tw-rounded-3xl info-btn">GitHub Repo <FaGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectInfo8