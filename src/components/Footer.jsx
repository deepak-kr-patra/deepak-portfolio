import { useEffect } from 'react'
import '../styling/footer.css'
import { MdEmail } from "react-icons/md";
// import { IoDocumentText } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import useScreenWidth from '../zustand/useScreenWidth';


const Footer = () => {

    const { screenWidth } = useScreenWidth();

    const paddingX = screenWidth < 600 ? "tw-px-4" : screenWidth >= 600 && screenWidth < 900 ? "tw-px-10" : "tw-px-16";
    const flexDir = screenWidth < 600 ? "tw-flex-col" : "";

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showSocial');
                }
            });
        });

        const hiddenSocials = document.querySelectorAll('.social-item');
        hiddenSocials.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className={`tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center tw-pt-10 tw-pb-2 ${paddingX} tw-gap-8 tw-bg-black`} id='contact'>
            <div className={`tw-flex ${flexDir} tw-w-full tw-items-start tw-justify-between`}>
                <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-8'>
                    <p className='tw-text-lg tw-text-white tw-font-bold'>Deepak's Developer Portfolio</p>
                </div>
                <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-2'>
                    <a href="mailto:deepakpatra067@gmail.com" target='_blank' className='tw-flex tw-items-center tw-gap-1 tw-text-white'>Send an email <MdEmail className='tw-text-lg' /></a>
                </div>
            </div>

            <div className='tw-flex tw-items-center tw-justify-center tw-mt-6'>
                <div className="social">
                    <a href="https://www.linkedin.com/in/deepak-kumar-patra-580189234/" target='_blank' className="social-item"><FaLinkedin /></a>
                    <a href="https://github.com/deepak-kr-patra" target='_blank' className="social-item"><FaGithub /></a>
                    <a href="https://www.instagram.com/deepak.k.patra.10/" target='_blank' className="social-item"><FaInstagram /></a>
                    <a href="https://twitter.com/deepakp13195658" target='_blank' className="social-item"><FaTwitter /></a>
                    <a href="https://www.facebook.com/deepak.k.patra.18" target='_blank' className="social-item"><FaFacebook /></a>
                    <a href="https://wa.me/9348909697" target='_blank' className="social-item"><FaWhatsapp /></a>
                </div>
            </div>

            <div>
                <p className='tw-text-gray-400 tw-text-sm max-sm:tw-text-xs'>&copy; 2024 | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer