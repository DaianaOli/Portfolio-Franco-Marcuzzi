//como se importan las cosas con typescript?
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import fondo from "../../assets/fondo.png"
import Loading from "../Loading/Loading";

const LandingPage = () => {
    const [loading , setLoading] = useState(false)
  return (

    <div className="w-full h-screen">
      <NavBar />
      <Loading/>
      <div className="w-full h-1/2 bg-gray-900">
        <div className="w-full h-1/2 bg-gray-900">
          <img
            className="w-full h-auto"
            src={fondo}
            alt="
                    "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
