import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Deepak's Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-gap-0.5">
                        <li className="nav-item">
                            <a className="nav-link active tw-flex tw-items-center tw-gap-0.5" href='#about'>About <IoPerson /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tw-flex tw-items-center tw-gap-0.5" href='#projects'>Projects <FaFileCode /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tw-flex tw-items-center tw-gap-0.5" href='#internship'>Internship <PiCertificateFill className='tw-text-lg' /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tw-flex tw-items-center tw-gap-0.5" href='#skills'>Skills <HiMiniWrenchScrewdriver /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tw-flex tw-items-center tw-gap-0.5" href='#education'>Education <FaGraduationCap /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tw-flex tw-items-center tw-gap-0.5" href='#footnote'>Footnote <BsInfoCircleFill /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar