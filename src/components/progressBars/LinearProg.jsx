import React, { useEffect } from 'react'
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbSql, TbFileTypeSql, TbBrandNextjs } from "react-icons/tb";


const LinearProg = () => {

    useEffect(() => {
        let shownBarsSection = false;
        const progressbars = document.querySelectorAll('.skill-per');
        // progressbars.forEach((progressbar) => progressbar.classList.remove('run-bar-animation'));

        const interObserverLeft = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && shownBarsSection == false) {
                    shownBarsSection = true;
                    progressbars.forEach((progressbar) => progressbar.classList.add('run-bar-animation'));
                }
            });
        });

        const hiddenBarsSection = document.querySelector('.bars-container');
        interObserverLeft.observe(hiddenBarsSection);
    }, [])

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center bars-container'>
            {/* MERN */}
            <div className="skill-box">
                <div className='tw-flex tw-gap-0.5'>
                    <span className="icon-Mongo"><SiMongodb /></span>
                    <span className="icon-Express"><SiExpress /></span>
                    <span className="icon-React"><FaReact /></span>
                    <span className="icon-Node"><FaNodeJs /></span>
                </div>
                <span className="title">MERN</span>

                <div className="skill-bar">
                    <span className="skill-per MERN">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
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
            {/* SQL */}
            <div className="skill-box">
                <span className="icon-SQL"><TbFileTypeSql /></span>
                <span className="title">SQL</span>

                <div className="skill-bar">
                    <span className="skill-per SQL">
                        <span className="tooltip">35%</span>
                    </span>
                </div>
            </div>
            {/* Next */}
            <div className="skill-box">
                <span className="icon-Next"><TbBrandNextjs /></span>
                <span className="title">Next.js</span>

                <div className="skill-bar">
                    <span className="skill-per Next">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LinearProg