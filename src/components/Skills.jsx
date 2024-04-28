import React from 'react'
import '../styling/skills.css'
import CircularProg from './progressBars/CircularProg';
import LinearProg from './progressBars/LinearProg';
import useScreenWidth from '../zustand/useScreenWidth';


const Skills = () => {

    window.onload = () => {
        // let shownBarsSection = false;
        const progressbars = document.querySelectorAll('.skill-per');
        // progressbars.forEach((progressbar) => progressbar.classList.remove('run-bar-animation'));

        const interObserverLeft = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);

                if (entry.isIntersecting) {
                    // shownBarsSection = true;
                    progressbars.forEach((progressbar) => progressbar.classList.add('run-bar-animation'));
                }
            });
        });

        const hiddenBarsSection = document.querySelector('.bars-container');
        interObserverLeft.observe(hiddenBarsSection);

        // for circular bars
        let shownCirclesSection = false;

        const intObserverRight = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);

                if (entry.isIntersecting && shownCirclesSection == false) {
                    show();
                    shownCirclesSection = true;
                }
            });
        });

        const hiddenCirclesSection = document.querySelector('.circles-container');
        intObserverRight.observe(hiddenCirclesSection);

        function animate(circular_bar_ele_received, value_element_received, end_value_received) {
            let circular_bar_element = circular_bar_ele_received,
                value_element = value_element_received;

            let start_value = 0,
                end_value = end_value_received,
                interval = 50;

            let progress = setInterval(() => {
                start_value++;

                value_element.textContent = `${start_value}%`;
                circular_bar_element.style.background = `conic-gradient(rgb(180, 99, 255) ${start_value * 3.6}deg, #000 0deg)`;

                if (start_value == end_value) {
                    clearInterval(progress);
                }

            }, interval);
        }

        function show() {
            // for Java
            let circular_bar_Java = document.querySelector('.prog-Java'),
                value_Java = document.querySelector('.value-Java');
            
            animate(circular_bar_Java, value_Java, 60);

            // for OOPs
            let circular_bar_OOPs = document.querySelector('.prog-OOPs'),
                value_OOPs = document.querySelector('.value-OOPs');

            animate(circular_bar_OOPs, value_OOPs, 65);

            // for DSA
            let circular_bar_DSA = document.querySelector('.prog-DSA'),
                value_DSA = document.querySelector('.value-DSA');

            animate(circular_bar_DSA, value_DSA, 55);

            // for Python
            let circular_bar_Python = document.querySelector('.prog-Python'),
                value_Python = document.querySelector('.value-Python');
            
            animate(circular_bar_Python, value_Python, 50);

        }
    }

    const { screenWidth } = useScreenWidth();

    const flexDir = screenWidth < 1000 ? "tw-flex-col" : "";
    const alignment = screenWidth < 1000 ? "tw-items-center" : "tw-items-start";
    const leftRightWidth = screenWidth < 1000 ? "tw-w-full" : "tw-w-[50%]";
    const leftRightMarginY = screenWidth < 1000 ? "tw-my-6" : "tw-my-6";
    const rightBoxItemsGap = screenWidth < 1000 ? "tw-gap-y-4" : "tw-gap-y-20";

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center tw-py-8 skills-box' id='skills'>
            <div className='tw-flex tw-items-center tw-mb-8'>
                <p className='tw-text-2xl tw-font-bold'>SKILLS</p>
            </div>

            <div className={`tw-flex ${flexDir} tw-w-full ${alignment} tw-justify-center`}>
                {/* LEFT BOX */}
                <div className={`tw-flex tw-flex-col ${leftRightWidth} tw-items-center tw-justify-center ${leftRightMarginY}`}>
                    <div className='tw-flex tw-items-center'>
                        <p className='tw-text-lg tw-font-bold'>Web <span className='purple-text'>Development</span></p>
                    </div>

                    <LinearProg />
                </div>

                {/* RIGHT BOX */}
                <div className={`tw-flex tw-flex-col ${leftRightWidth} tw-items-center tw-justify-str ${leftRightMarginY} ${rightBoxItemsGap}`}>
                    <div className='tw-flex tw-items-center'>
                        <p className='tw-text-lg tw-font-bold'>Other <span className='purple-text'>Skills</span></p>
                    </div>

                    <CircularProg />
                </div>
            </div>
        </div>
    )
}

export default Skills