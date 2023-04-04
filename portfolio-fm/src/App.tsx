import './App.css'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Idiomas from './components/Idiomas/Idiomas'
import Lenguajes from './components/Lenguajes-P/Lenguajes'
import Experiencia from './components/Experiencia/Experiencia'
import Cursos from './components/Cursos/Cursos'
import Proyectos from './components/Proyects/Proyectos'
import Pages from './components/Pages/Pages'
import background from './assets/noise-transparent.png'


function App() {
  return (
    <BrowserRouter>
    <div className="bg-white font-serif dark:bg-colorNoise"
    >
      <div className="fixed top-[-50%] bg-imageNoise left-[-50%] right-[-50%] bottom-[-50%]  animate-bganimation w- [200%] h-[200vh] ">
        </div>
    {/*<div id="google_translate_element">  ---para traductor---- */} 
    <Routes>
      <Route path='/' element={<Pages/>} />
      <Route path='/idiomas' element={<Idiomas/>}/>
      <Route path='/lenguajes' element={<Lenguajes/>}/>
      <Route path='/experiencia' element={<Experiencia/>}/>
      <Route path='/cursos' element={<Cursos/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
