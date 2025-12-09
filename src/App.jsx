import './App.css'
import Navbar from './component/Navbar/Navbar'
import Header from './container/Header/Header'
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/Menu/SpecialMenu'
import Chef from './container/Chef/Chef';
import Intro from './container/Intro/Intro';
function App() {
  return (
   <>
   <Navbar />
   <Header />
   <AboutUs />
   <SpecialMenu />
   <Chef />
   <Intro />
   </>
  )
}

export default App
