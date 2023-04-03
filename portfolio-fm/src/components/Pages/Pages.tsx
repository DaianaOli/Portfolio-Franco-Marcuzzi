import About from "../About/About"
import LandingPage from "../LandingPage/LandingPage"
import NavBar from "../NavBar/NavBar"
import Proyectos from "../Proyects/Proyectos"
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import Loading from "../Loading/Loading";


AOS.init();

const Pages = () => {
  const [loading, setLoading] = useState(true);
  const changeLoading = () => {
    setLoading(false);
    setTimeout(()=>{
      document.body.classList.remove("overflow-hidden")
    },800)
  };

  return (
    <div onWheel={changeLoading} onClick={changeLoading} className="">
      
        <div
          className={`fixed duration-1000 z-50 top-0 left-0 right-0 bottom-0 transition-transform ${
            loading ? "" : "transform -translate-y-full "
          }`}>
          <Loading />
        </div>
        <div className="overflow-hidden">
        <div>
          <NavBar />
        </div>
        <div>
          <LandingPage />
        </div>
        <div>
          <Proyectos />
        </div>
        <div className="h-screen">
          <About />
        </div>
      </div>
    
    </div>
  );
};

export default Pages