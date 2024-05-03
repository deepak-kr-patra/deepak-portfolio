import React from 'react'
import '../styling/skills.css'
import CircularProg from './progressBars/CircularProg';
import LinearProg from './progressBars/LinearProg';
import useScreenWidth from '../zustand/useScreenWidth';


const Skills = () => {

    const { screenWidth } = useScreenWidth();

    const flexDir = screenWidth < 1000 ? "tw-flex-col" : "";
    const alignment = screenWidth < 1000 ? "tw-items-center" : "tw-items-start";
    const leftRightWidth = screenWidth < 1000 ? "tw-w-full" : "tw-w-[50%]";
    // const leftRightMarginY = screenWidth < 1000 ? "tw-myy-4" : "tw-myy-4";
    const rightBoxItemsGap = screenWidth < 1000 ? "tw-gap-y-4" : "tw-gap-y-20";

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center tw-py-8 skills-box' id='skills'>
            <div className='tw-flex tw-items-center tw-mb-8'>
                <p className='tw-text-2xl tw-font-bold'>SKILLS</p>
            </div>

            <div className={`tw-flex ${flexDir} tw-w-full ${alignment} tw-justify-center tw-gap-y-4`}>
                {/* LEFT BOX */}
                <div className={`tw-flex tw-flex-col ${leftRightWidth} tw-items-center tw-justify-center`}>
                    <div className='tw-flex tw-items-center'>
                        <p className='tw-text-lg tw-font-bold'>Web <span className='purple-text'>Development</span></p>
                    </div>

                    <LinearProg />
                </div>

                {/* RIGHT BOX */}
                <div className={`tw-flex tw-flex-col ${leftRightWidth} tw-items-center tw-justify-str ${rightBoxItemsGap}`}>
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