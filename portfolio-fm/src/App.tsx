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


function App() {
  return (
    <BrowserRouter>
    <div className='bg-white dark:bg-zinc-900'>
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
