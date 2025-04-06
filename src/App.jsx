import React from 'react'
import MyNavbar from './components/MyNavbar'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <div className="main-app">
      <MyNavbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>
      
    </>
  )
}
