import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className='bg-white dark:bg-zinc-900'>
    {/*<div id="google_translate_element">  ---para traductor---- */} 
    <NavBar/>
    <LandingPage/>
    <About />
    <Contact/>
    </div>
    
  )
}

export default App
