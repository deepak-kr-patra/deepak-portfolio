import './App.css'
import './styling/animations.css'
import { useEffect } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Internship from './components/Internship';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import useScreenWidth from './zustand/useScreenWidth';


function App() {

  const { setScreenWidth } = useScreenWidth();

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);

    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    console.log('Actual scrollbar width:', scrollbarWidth);

    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (scrollbarWidth > 0) {
        navbar.style.width = `calc(100% - ${scrollbarWidth}px)`;
      } else {
        navbar.style.width = '100%'; // fallback for overlay scrollbars
      }
    }
  }, []);

  return (
    <div className='bigbox' id='bigbox'>
      <Navbar />
      <div className="my-container tw-flex tw-flex-col tw-items-center">
        <Header />
        <Projects />
        <Internship />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  )
}

export default App
