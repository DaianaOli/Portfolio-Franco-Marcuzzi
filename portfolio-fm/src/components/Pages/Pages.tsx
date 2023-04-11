import About from "../About/About";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import Proyectos from "../Proyects/Proyectos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useState } from "react";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

AOS.init();

const Pages = () => {
  const [loading, setLoading] = useState(true);

  const changeLoading = () => {
    setLoading(false);
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
    }, 800);
  };

  return (
    <div className="" onWheel={changeLoading} onClick={changeLoading}>
      <div
        className={`fixed duration-1000 z-50 top-0 left-0 right-0 bottom-0 transition-transform ${
          loading ? "" : "transform -translate-y-full "
        }`}
      >
        <Loading />
      </div>
      <div className="overflow-hidden ">
        <div className="flex flex-col gap-2 ">
          <div className="h-14">
            <NavBar />
          </div>
          <div id="home" className="">
            <LandingPage />
          </div>
          <div id="proyectos" className="">
            <Proyectos />
          </div>
          <div id="about" className="">
            <About />
          </div>
          <div className="">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
