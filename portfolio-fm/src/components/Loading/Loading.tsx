import React from "react";
import logo from "../../assets/logo.png";

const Loading = () => {

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className=" bg-gray-900 rounded-full animate-pulse drop-shadow-xl">
            <img src={logo} alt="" className="w-60 h-60 mx-auto" />
        </div>
        </div>
    );
    };

export default Loading;