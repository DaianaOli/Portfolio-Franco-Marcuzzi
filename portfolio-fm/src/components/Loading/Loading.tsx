import logo from "../../assets/logo.png";

const Loading = () => {

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
        <div className="animate-pulse" data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
            <img src={logo} alt="logo" className="w-60 h-60 mx-auto" />
        </div>
            <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-center text-white font-serif font-bold text-2xl">Desarrollador Backend</h1>
        </div>
    );
    };

export default Loading;