import React, { useEffect } from 'react'
import useScreenWidth from '../zustand/useScreenWidth'

const Education = () => {

    const { screenWidth } = useScreenWidth();

    const carouselWidth = screenWidth < 700 ? "tw-w-[100vw]" : screenWidth >= 700 && screenWidth < 900 ? "tw-w-[80vw]" : "tw-w-[50vw]";
    const carouselHeight = screenWidth < 900 ? "" : "tw-min-h-[60vh]"
    const carouselBGColor = screenWidth < 700 ? "" : "tw-bg-white";
    const carouselShadow = screenWidth < 700 ? "" : "tw-shadow-xl";
    const fontSize = screenWidth < 550 ? "tw-text-sm" : "";

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('showEduCarousel');
                }
            });
        });

        const carousel = document.querySelectorAll('.edu-carousel');
        carousel.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center tw-py-8 tw-bg-slate-100 education-box' id='education'>
            <div className='tw-flex tw-items-center tw-mb-8'>
                <p className='tw-text-2xl tw-text-gray-950 tw-font-bold'>EDUCATION</p>
            </div>

            <div className={`tw-carousel tw-carousel-center ${carouselWidth} ${carouselHeight} tw-p-4 tw-space-x-4 ${carouselBGColor} tw-rounded-box ${carouselShadow} edu-carousel`}>
                <div className="tw-carousel-item tw-w-[80%]">
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-start tw-w-full tw-p-4 tw-rounded-2xl first-slide'>
                        <h2 className='tw-w-full tw-text-center tw-font-bold tw-text-xl tw-mb-4 tw-text-white'>GRADUATION</h2>
                        <ul className='tw-w-full'>
                            <h3 className={`tw-font-bold ${fontSize} tw-text-[yellow]`}>COURSE</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>B.Tech in Computer Science and Engineering</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[yellow]`}>INSTITUTION</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>Gandhi Institute of Excellent Technocrats, Bhubaneswar</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[yellow]`}>DURATION</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>From 2018-2022</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[yellow]`}>SCORE</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>CGPA: 7.56</p>
                        </ul>
                    </div>
                </div>
                <div className="tw-carousel-item tw-w-[80%]">
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-start tw-w-full tw-p-4 tw-rounded-2xl second-slide'>
                        <h2 className='tw-w-full tw-text-center tw-font-bold tw-text-xl tw-mb-4'>12TH</h2>
                        <ul className='tw-w-full'>
                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#e41111]`}>BOARD</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4`}>11th and 12th in CHSE Board (Science stream)</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#e41111]`}>INSTITUTION</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4`}>Nimapara Autonomous College, Nimapara</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#e41111]`}>DURATION</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4`}>From 2016-2018</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#e41111]`}>SCORE</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4`}>74%</p>

                            <p className={`tw-font-bold ${fontSize} tw-mb-4`}><span className='tw-text-[#e41111]'>*</span> Got e-Medhabruti scholarship for meritorious students in 12th.</p>
                        </ul>
                    </div>
                </div>
                <div className="tw-carousel-item tw-w-[80%]">
                    <div className='tw-flex tw-flex-col tw-items-start tw-justify-start tw-w-full tw-p-4 tw-rounded-2xl third-slide'>
                        <h2 className='tw-w-full tw-text-center tw-font-bold tw-text-xl tw-mb-4 tw-text-white'>SCHOOL</h2>
                        <ul className='tw-w-full'>
                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#2d2771]`}>BOARD</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>10th in CBSE Board</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#2d2771]`}>INSTITUTION</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>DAV Public School, Nimapara</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#2d2771]`}>DURATION</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>From 2015-2016</p>

                            <h3 className={`tw-font-bold ${fontSize} tw-text-[#2d2771]`}>SCORE</h3>
                            <p className={`tw-font-bold ${fontSize} tw-mb-4 tw-text-white`}>CGPA: 9.4</p>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Education