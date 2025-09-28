import { useEffect } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IoInformationCircle } from 'react-icons/io5';


const ProjectCard = ({ toggleInfoView, tag, projectValues }) => {

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
            <figure className="tw-px-4 tw-pt-4">
                <img src={projectValues.imageURL} alt="project image" className="tw-rounded-xl tw-w-full tw-h-[230px] tw-object-cover" />
            </figure>
            <div className="tw-card-body p-4 tw-items-center tw-text-center">
                <h2 className="tw-card-title">{projectValues.header}</h2>
                <p className='tw-mb-2 tw-text-start max-sm:tw-text-xs'>{projectValues.description}</p>
                <div className="tw-w-full tw-flex tw-mt-auto tw-gap-1">
                    <div className='tw-flex tw-flex-1 tw-gap-1'>
                        <a href={projectValues.siteURL} target='_blank' className="project-link tw-rounded-3xl project-btn">visit <FaExternalLinkAlt /></a>
                        <a href={projectValues.githubURL} target='_blank' className="project-github tw-rounded-3xl project-btn">code <FaGithub /></a>
                    </div>
                    <div>
                        <button className="tw-rounded-3xl project-info-btn" onClick={() => toggleInfoView(tag)}><IoInformationCircle className='tw-text-lg sm:tw-text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard