import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


const LinearProg = () => {

    // window.onload = () => {
        
    // }

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center bars-container'>
            {/* HTML */}
            <div className="skill-box">
                <span className="icon-HTML"><FaHtml5 /></span>
                <span className="title">HTML</span>

                <div className="skill-bar">
                    <span className="skill-per HTML">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            {/* CSS */}
            <div className="skill-box">
                <span className="icon-CSS"><FaCss3 /></span>
                <span className="title">CSS</span>

                <div className="skill-bar">
                    <span className="skill-per CSS">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            {/* JavaScript */}
            <div className="skill-box">
                <span className="icon-JS"><IoLogoJavascript /></span>
                <span className="title">JavaScript</span>

                <div className="skill-bar">
                    <span className="skill-per JS">
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            {/* React */}
            <div className="skill-box">
                <span className="icon-React"><FaReact /></span>
                <span className="title">React.js</span>

                <div className="skill-bar">
                    <span className="skill-per React">
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            {/* Express */}
            <div className="skill-box">
                <span className="icon-Express"><SiExpress className='tw-text-lg' /></span>
                <span className="title">Express.js</span>

                <div className="skill-bar">
                    <span className="skill-per Express">
                        <span className="tooltip">35%</span>
                    </span>
                </div>
            </div>
            {/* Node */}
            <div className="skill-box">
                <span className="icon-Node"><FaNodeJs className='tw-text-lg' /></span>
                <span className="title">Node.js</span>

                <div className="skill-bar">
                    <span className="skill-per Node">
                        <span className="tooltip">50%</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LinearProg