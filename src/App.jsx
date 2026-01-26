import './App.css'
import Navbar from './component/Navbar/Navbar'
import Header from './container/Header/Header'
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/Menu/SpecialMenu'
import Chef from './container/Chef/Chef';
import Intro from './container/Intro/Intro';
import Laurels from './container/Laurels/Laurels';
import Gallery from './container/Gallery/Gallery';
import Findus from './container/Findus/Findus';
function App() {
  return (
   <>
   <Navbar />
   <Header />
   <AboutUs />
   <SpecialMenu />
   <Chef />
   <Intro />
   <Laurels />
   <Gallery />
   <Findus />
   </>
  )
}

export default App
