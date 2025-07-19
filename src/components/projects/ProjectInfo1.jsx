import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import useScreenWidth from '../../zustand/useScreenWidth';


const ProjectInfo1 = ({ toggleInfoView }) => {

    window.onload = () => {
        let projectInfo1Details = document.getElementById('projectInfo1Details');
        projectInfo1Details.classList.remove('showScrollbar');
    }

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (projectInfo1Details.scrollHeight > projectInfo1Details.clientHeight) {
            projectInfo1Details.classList.add('showScrollbar');
        } else {
            projectInfo1Details.classList.remove('showScrollbar');
        }
    }, [screenWidth]);

    const cardWidth = screenWidth >= 1000 ? "tw-w-[50vw]" : screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70vw]" : "tw-w-[90vw]";

    const cardBodyPadding = screenWidth < 750 ? "tw-px-4" : "tw-px-10";
    const headerTextSize = screenWidth < 500 ? "tw-text-xl" : "tw-text-2xl";
    const subheaderTextSize = screenWidth < 500 ? "tw-text-md" : "tw-text-lg";

    return (
        <div className='projectInfo tw-flex tw-flex-col tw-p-4' id='projectInfoOne'>
            <div className={`tw-card ${cardWidth} tw-h-[95%] tw-bg-white tw-shadow-xl`}>
                <div className='tw-relative'>
                    <button className="tw-absolute tw-p-2 tw-right-0 tw-top-0 tw-text-3xl closeInfoBtn" onClick={() => toggleInfoView(1)} ><IoClose /></button>
                </div>

                <div className={`tw-card-body tw-h-full ${cardBodyPadding} tw-items-center tw-gap-8`}>
                    <h1 className={`tw-font-extrabold ${headerTextSize}`}>Chat Web Application</h1>

                    <div className='tw-overflow-y-scroll tw-pr-2 project-info-details' id='projectInfo1Details'>
                        <ul className='info-list'>
                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>ABOUT</h3>
                            <p className='tw-font-semibold max-sm:tw-text-sm'>A full stack chat web application based on MERN stack. The real time chatting feature was achieved by implementing Socket.io server in Express.js server. Secure user login with JWT token.</p>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>FRONTEND</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The User Interface of the web app is designed using React.js library, Tailwind CSS and DaisyUI components.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The UI is responsive for any screen dimensions.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>BACKEND</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The backend of the web app is run by Node.js JavaScript runtime environment. Express.js library was used to create the server.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>To make the chat app real time Socket.io server was implemented with the Express.js server. By doing so the messages can go from one user to another user via server, and so live chat do not have to be fetched from database.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DATABASE</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>MongoDB is used for the database of this project. The users and their chats are stored in the cloud.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DEPLOYMENT</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The project is deployed using Render Dashboard from GitHub repository.</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="tw-flex tw-mt-auto tw-gap-4">
                        <a href='https://mern-chat-web-app-iwwq.onrender.com/' target='_blank' className="tw-btn tw-rounded-3xl info-btn">Click to visit <FaExternalLinkAlt /></a>
                        <a href='https://github.com/deepak-kr-patra/mern-chat-web-app' target='_blank' className="tw-btn tw-rounded-3xl info-btn">GitHub Repo <FaGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectInfo1