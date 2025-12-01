import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Graphics from './components/Graphics'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Graphics />
      <Certificates />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
