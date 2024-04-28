import React, { useEffect, useState } from 'react'
import { IoInformationCircle } from "react-icons/io5";
import InternshipInfo from './internshipInfo/InternshipInfo';
import InternshipDoc from './internshipInfo/InternshipDoc';
import useScreenWidth from '../zustand/useScreenWidth';


const Internship = () => {

    window.onload = () => {
        let internDoc = document.getElementById('internDoc');
        internDoc.classList.remove('show');

        let internInfo = document.getElementById('internInfo');
        internInfo.classList.remove('show');
    }

    const [pdfPath, setPdfPath] = useState("");
    const [imagePath, setImagePath] = useState("");

    const toggleDocView = (num) => {
        if (num === 1) { // 1 for project completion certificate
            setPdfPath("https://drive.google.com/file/d/1xYO4OifkOleSvhV49nKSbqEUbcKHfXDN/view");
            setImagePath("projectCompletion.jpg");
        } else if (num === 2) { // 2 for internship certificate
            setPdfPath("https://drive.google.com/file/d/1Jm0wux-oaJGYgNt7jI1KBpoI4ML5V1XA/view?usp=sharing");
            setImagePath("certificate.jpg");
        } else {
            setPdfPath("");
            setImagePath("");
        }

        if (internDoc) {
            internDoc.classList.contains('show') ? internDoc.classList.remove('show') : internDoc.classList.add('show');
            console.log(internDoc.classList.contains('show'));
        } else {
            console.log("not loaded");
        }
        toggleInfoView();
        console.log(num);
    }

    const toggleInfoView = () => {
        if (internInfo) {
            internInfo.classList.contains('show') ? internInfo.classList.remove('show') : internInfo.classList.add('show');
            console.log(internInfo.classList.contains('show'));
        } else {
            console.log("not loaded");
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('openUpLeftReturn');
                }
            });
        });

        const internshipCard = document.querySelectorAll('.internship-card');
        internshipCard.forEach((el) => observer.observe(el));
    }, []);

    const {screenWidth} = useScreenWidth();

    const cardWidth = screenWidth <= 360 ? "tw-w-[320px]" : "tw-w-[350px]";

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-h-[499px] tw-items-center tw-justify-center tw-py-8 tw-pb-14 internship-box' id='internship'>
            <div className='tw-flex tw-items-center tw-mb-8'>
                <p className='tw-text-2xl tw-font-bold'>ONLINE INTERNSHIP</p>
            </div>
            <div className={`tw-card ${cardWidth} tw-glass internship-card`}>
                <figure><img src="/1Stop.png" alt="1Stop" /></figure>
                <div className="tw-card-body tw-items-center">
                    <h2 className="tw-card-title">Online AI Internship</h2>
                    <p className='tw-mb-4'>An online internship on Atificial Intelligence by 1Stop.</p>
                    <button className="tw-btn tw-rounded-3xl info-btn" onClick={toggleInfoView}>View Info <IoInformationCircle className='tw-text-xl' />
                    </button>
                </div>
            </div>

            {/* HIDDEN ELEMENTS */}
            <InternshipDoc toggleDocView={toggleDocView} imagePath={imagePath} pdfPath={pdfPath} />

            <InternshipInfo toggleInfoView={toggleInfoView} toggleDocView={toggleDocView} />

        </div>
    )
}

export default Internship