import './App.css'
import Header from "./components/Header"
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Education from './components/Education'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <About/>
        <Skills/>
        <Experience/>
        <Education/>
        <Certificates/>
        <Projects/>
        <Contact/>
      </main>
      <Footer />
    </div>
  )
}

export default App

