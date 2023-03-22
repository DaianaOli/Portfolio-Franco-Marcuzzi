import About from "../About/About"
import LandingPage from "../LandingPage/LandingPage"
import NavBar from "../NavBar/NavBar"
import Proyectos from "../Proyects/Proyectos"

const Pages =()=>{
    return(
        <div>
            <NavBar/>
            <div>
                <LandingPage/>
            </div>
            <div>
                <Proyectos/>
            </div>
            <div>
                <About/>
            </div>
        </div>
    )
}

export default Pages