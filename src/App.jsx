
import './App.css'
import Navbar from './components/section/Navbar'
import Presentation from './components/section/Presentation'
import Projects from './components/section/Projects'
import Timeline from './components/section/Timeline'
import Footer from './components/section/Footer'
import Tech from './components/elements/Tech'


function App() {


  return (
    <>
    <div className="App">
      <div className="animated-background"></div>
      <div className="content">
        <Navbar />
        <Presentation />
        <Projects />
        <Timeline />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
