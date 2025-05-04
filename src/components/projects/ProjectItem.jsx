import React, { useEffect } from 'react'
import { IoInformationCircle } from 'react-icons/io5';


const ProjectItem = ({ toggleInfoView, tag, projectValues }) => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showProjectCard');
                }
            });
        });

        const hiddenCardElements = document.querySelectorAll('.project-card');
        hiddenCardElements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className="tw-card tw-w-80 tw-shadow-xl tw-bg-white project-card">
            <figure className="tw-px-6 tw-pt-6">
                <img src={projectValues.imageURL} alt="project image" className="tw-rounded-xl tw-w-full tw-h-[230px] tw-object-cover" />
            </figure>
            <div className="tw-card-body tw-items-center tw-text-center">
                <h2 className="tw-card-title">{projectValues.header}</h2>
                <p className='tw-text-start'>{projectValues.description}</p>
                <button className="tw-btn tw-rounded-3xl info-btn" onClick={() => toggleInfoView(tag)}>See details <IoInformationCircle className='tw-text-xl' /></button>
            </div>
        </div>
    )
}

export default ProjectItem