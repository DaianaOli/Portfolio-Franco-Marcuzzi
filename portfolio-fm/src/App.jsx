import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
    {/*<div id="google_translate_element">  ---para traductor---- */} 
    <NavBar/>
    <LandingPage/>
    <Contact/>
    </div>
    
  )
}

export default App
