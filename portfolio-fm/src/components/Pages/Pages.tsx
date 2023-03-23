import About from "../About/About"
import LandingPage from "../LandingPage/LandingPage"
import NavBar from "../NavBar/NavBar"
import Proyectos from "../Proyects/Proyectos"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import bgNoiseImage from "../../assets/noise-transparent.png"

AOS.init();

const Pages = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
    AOS.refresh();
  }, 3000);
  AOS.refresh();
}, [])


  return (
    <div>
      {loading ? (
        <div>
            <Loading />
        </div>
      ) : (
        <div className="overflow-hidden"  >
          <div className="fixed top-[-50%] bg-imageNoise left-[-50%] right-[-50%] bottom-[-50%]  animate-bganimation w-[200%] h-[200vh] ">
          </div>
         <div>
          <NavBar />
         </div>
        
          <div>
            <LandingPage />
          </div>

          <div >
            <Proyectos />
          </div>
          <div className="h-screen" >
            <About />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pages