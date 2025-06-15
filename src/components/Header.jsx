import React from 'react'
import useScreenWidth from '../zustand/useScreenWidth'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Header = () => {

  const { screenWidth } = useScreenWidth();

  let headerSize = "";
  let paraSize = "";
  let headerBoxWidth = "";
  if (screenWidth > 1100) {
    headerSize = "tw-text-4xl";
    paraSize = "tw-text-lg";
    headerBoxWidth = "tw-w-[80%]";
  } else if (screenWidth <= 1100 && screenWidth > 800) {
    headerSize = "tw-text-3xl";
    paraSize = "tw-text-md";
    headerBoxWidth = "tw-w-[95%]";
  } else if (screenWidth <= 800 && screenWidth > 650) {
    headerSize = "tw-text-2xl";
    paraSize = "tw-text-sm";
    headerBoxWidth = "tw-w-[95%]";
  } else {
    headerSize = "tw-text-2xl";
    paraSize = "tw-text-xs";
    headerBoxWidth = "tw-w-full";
  }

  const flexDir = screenWidth <= 650 ? "tw-flex-col-reverse" : "";
  const innerDivsWidth = screenWidth <= 650 ? "tw-w-full" : "tw-w-1/2";
  const textAlign = screenWidth <= 650 ? "tw-text-center" : "";

  const picSizeClass = screenWidth <= 650 ? "smallPic" : "largePic";

  return (
    <div className={`tw-flex ${flexDir} tw-p-2 tw-items-center tw-justify-center ${headerBoxWidth} md:tw-h-96 tw-h-96www`} id='about'>
      {/* intro */}
      <div className={`tw-flex tw-flex-col tw-p-4 tw-items-center tw-justify-center ${innerDivsWidth} tw-gap-4`}>
        <h1 className={`${headerSize} tw-w-full ${textAlign} tw-font-bold`}>Deepak Kumar Patra</h1>
        <p className={`${paraSize} tw-w-full tw-text-justify`}>Hello 👋 I am a B.Tech graduate who aspires to be a web developer. I have solid foundation in the MERN stack and modern frontend technologies. Adept at translating UI/UX designs into functional code, optimizing performance, and delivering seamless user experiences. Strong grasp of JavaScript (ES6+), RESTful APIs, and component-based architecture. This is my developer portfolio, have a glimpse!</p>
        <div className="buttons tw-w-full tw-flex tw-py-2 tw-gap-4 max-sm:tw-justify-center">
          <a
            href='https://github.com/deepak-kr-patra'
            target='_blank'
            className='github-btn tw-btn tw-h-max tw-min-h-0 tw-p-2 tw-text-white'
          >
            GitHub <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/deepak-kumar-patra-580189234/'
            target='_blank'
            className='linkedin-btn tw-btn tw-h-max tw-min-h-0 tw-p-2 tw-text-white'
          >
            LinkedIn <FaLinkedin />
          </a>
        </div>
      </div>

      {/* pic */}
      <div className={`tw-flex tw-p-4 tw-items-center tw-justify-center ${innerDivsWidth}`}>
        {/* div containing image */}
        <div className={`header-pic ${picSizeClass} boingInUp`}>
        </div>
      </div>
    </div>
  )
}

export default Header