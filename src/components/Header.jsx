import React from 'react'
import useScreenWidth from '../zustand/useScreenWidth'

const Header = () => {

  const { screenWidth } = useScreenWidth();

  // let picSize = "";
  let headerSize = "";
  let paraSize = "";
  let headerBoxWidth = "";
  if (screenWidth > 1100) {
    // picSize = "tw-w-64 tw-h-64";
    headerSize = "tw-text-4xl";
    paraSize = "tw-text-2xl";
    headerBoxWidth = "tw-w-[80%]";
  } else if (screenWidth <= 1100 && screenWidth > 800) {
    // picSize = "tw-w-64 tw-h-64";
    headerSize = "tw-text-3xl";
    paraSize = "tw-text-xl";
    headerBoxWidth = "tw-w-[95%]";
  } else if (screenWidth <= 800 && screenWidth > 650) {
    // picSize = "tw-w-52 tw-h-52";
    headerSize = "tw-text-2xl";
    paraSize = "tw-text-lg";
    headerBoxWidth = "tw-w-[95%]";
  } else {
    // picSize = "tw-w-48 tw-h-48";
    headerSize = "tw-text-2xl";
    paraSize = "tw-text-md";
    headerBoxWidth = "tw-w-full";
  }

  const flexDir = screenWidth <= 650 ? "tw-flex-col-reverse" : "";
  const innerDivsWidth = screenWidth <= 650 ? "tw-w-full" : "tw-w-1/2";
  const textAlign = screenWidth <= 650 ? "tw-text-center" : "";

  const picSizeClass = screenWidth <= 650 ? "smallPic" : "largePic";

  return (
    <div className={`tw-flex ${flexDir} tw-p-2 tw-items-center tw-justify-center ${headerBoxWidth} tw-h-96`} id='about'>
      {/* intro */}
      <div className={`tw-flex tw-flex-col tw-p-4 tw-items-center tw-justify-center ${innerDivsWidth} tw-gap-4`}>
        <h1 className={`${headerSize} tw-w-full ${textAlign} tw-font-bold`}>Deepak Kumar Patra</h1>
        <p className={`${paraSize} tw-w-full tw-text-start`}>Hello 👋 I am a B.Tech graduate who aspires to be a web developer. This is my developer portfolio, have a glimpse!</p>
      </div>

      {/* pic */}
      <div className={`tw-flex tw-p-4 tw-items-center tw-justify-center ${innerDivsWidth}`}>
        {/* <div className={`${picSize} tw-rounded-full tw-shrink-0 tw-flex tw-items-center tw-justify-center`}>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg" alt="my pic" className='tw-w-full tw-h-full tw-object-cover tw-rounded-full' />
        </div> */}

        {/* div containing image */}
        <div className={`header-pic ${picSizeClass} boingInUp`}>
        </div>
      </div>
    </div>
  )
}

export default Header