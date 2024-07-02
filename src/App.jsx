import './App.css'
import './styling/animations.css'
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
