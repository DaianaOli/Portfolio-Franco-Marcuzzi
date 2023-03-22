import React from "react";
import logo from "../../assets/logo.png";

const Loading = () => {

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
        <div className="animate-pulse">
            <img src={logo} alt="logo" className="w-60 h-60 mx-auto" />
        </div>
            <h1 className="text-center text-white font-serif font-bold text-2xl">Desarrollador Backend</h1>
        </div>
    );
    };

export default Loading;