import React, { useEffect } from 'react'
import useScreenWidth from '../../zustand/useScreenWidth'

const CircularProg = () => {

    useEffect(() => {
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
    })

    const { screenWidth } = useScreenWidth();

    const gridWidth = screenWidth >= 600 ? "tw-w-[70%]" : "tw-w-full";

    return (
        <div className={`tw-grid tw-grid-cols-2 tw-gap-5 ${gridWidth} circles-container`}>
            {/* Java */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-Java">
                    <span className="progress-value value-Java">0%</span>
                </div>

                <span className="text">Java</span>
            </div>
            {/* OOPs */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-OOPs">
                    <span className="progress-value value-OOPs">0%</span>
                </div>

                <span className="text">OOPs</span>
            </div>
            {/* DSA */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-DSA">
                    <span className="progress-value value-DSA">0%</span>
                </div>

                <span className="text">DSA</span>
            </div>
            {/* Python */}
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5'>
                <div className="circular-progress prog-Python">
                    <span className="progress-value value-Python">0%</span>
                </div>

                <span className="text">Python</span>
            </div>
        </div>
    )
}

export default CircularProg