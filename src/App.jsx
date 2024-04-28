import { useReducer } from 'react';
import './App.css'
import './styling/animations.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import useScreenWidth from './zustand/useScreenWidth';
import Internship from './components/Internship';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {

  const { screenWidth, setScreenWidth } = useScreenWidth();

  // useLayoutEffect(() => {
  //   function updateSize() {
  //     setScreenWidth(window.innerWidth);
  //   }
  //   window.addEventListener('resize', updateSize);
  //   updateSize();
  //   return () => window.removeEventListener('resize', updateSize);
  // }, []);

  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
    forceUpdate();
    console.log(screenWidth);
  };

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
