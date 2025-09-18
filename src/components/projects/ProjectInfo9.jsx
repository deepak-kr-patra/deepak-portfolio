import { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import useScreenWidth from '../../zustand/useScreenWidth';


const ProjectInfo9 = ({ toggleInfoView }) => {

    window.onload = () => {
        let ProjectInfo9Details = document.getElementById('ProjectInfo9Details');
        ProjectInfo9Details.classList.remove('showScrollbar');
    }

    const { screenWidth } = useScreenWidth();

    useEffect(() => {
        if (ProjectInfo9Details.scrollHeight > ProjectInfo9Details.clientHeight) {
            ProjectInfo9Details.classList.add('showScrollbar');
        } else {
            ProjectInfo9Details.classList.remove('showScrollbar');
        }
    }, [screenWidth]);

    const cardWidth = screenWidth >= 1000 ? "tw-w-[50vw]" : screenWidth < 1000 && screenWidth >= 600 ? "tw-w-[70vw]" : "tw-w-[90vw]";

    const cardBodyPadding = screenWidth < 750 ? "tw-px-4" : "tw-px-10";
    const headerTextSize = screenWidth < 500 ? "tw-text-xl" : "tw-text-2xl";
    const subheaderTextSize = screenWidth < 500 ? "tw-text-md" : "tw-text-lg";

    return (
        <div className='projectInfo tw-flex tw-flex-col tw-p-4' id='projectInfoNine'>
            <div className={`tw-card ${cardWidth} tw-h-[95%] tw-bg-white tw-shadow-xl`}>
                <div className='tw-relative'>
                    <button className="tw-absolute tw-p-2 tw-right-0 tw-top-0 tw-text-3xl closeInfoBtn" onClick={() => toggleInfoView(9)} ><IoClose /></button>
                </div>

                <div className={`tw-card-body tw-h-full ${cardBodyPadding} tw-items-center tw-gap-8`}>
                    <h1 className={`tw-font-extrabold ${headerTextSize}`}>Fruity Arrays</h1>

                    <div className='tw-overflow-y-scroll tw-pr-2 project-info-details' id='ProjectInfo9Details'>
                        <ul className='info-list'>
                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>ABOUT</h3>
                            <p className='tw-font-semibold max-sm:tw-text-sm'>An educational game which you can play to learn or test your knowledge on several JavaScript array methods.</p>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>GAMEPLAY</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>This game is based on the idea of arrays containing fruit emojis(strings) which can be modified using array methods.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>User has to write a piece of code in the code editor to get the expected fruits array from an initial fruits array.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The game contains several levels. It can be used by beginners to learn, as well as by someone to test their proficiency in dealing with JavaScript arrays.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DETAILS</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>This web app is created with Vite using React, Tailwind CSS, and other JS libraries.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The global states of the app are managed using Zustand library.</li>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The UI is responsive to all screen sizes.</li>
                            </ul>

                            <div className="tw-divider"></div>

                            <h3 className={`tw-font-bold ${subheaderTextSize} tw-text-[#e41165]`}>DEPLOYMENT</h3>
                            <ul className='info-list-inner'>
                                <li className='tw-font-semibold max-sm:tw-text-sm'>The project is deployed using Netlify from it's the GitHub repository.</li>
                            </ul>
                        </ul>
                    </div>

                    <div className="tw-flex tw-mt-auto tw-gap-4">
                        <a href='https://fruityarrays.netlify.app/' target='_blank' className="tw-btn tw-rounded-3xl info-btn">Click to visit <FaExternalLinkAlt /></a>
                        <a href='https://github.com/deepak-kr-patra/fruityArrays' target='_blank' className="tw-btn tw-rounded-3xl info-btn">GitHub Repo <FaGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectInfo9