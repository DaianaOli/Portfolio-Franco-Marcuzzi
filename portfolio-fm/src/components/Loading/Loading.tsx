import { useEffect } from "react";
import logo from "../../assets/logo.png";

const Loading = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <div className="flex flex-col justify-end w-full h-3/6 ">
        <h1
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-center   font-serif  text-9xl"
        >
          FM
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1000"
        className=" flex flex-col h-3/6 justify-end  items-center  "
      >
        <h1 className="  animate-bounce mb-20 text-5xl">﹀</h1>
      </div>
    </div>
  );
};

export default Loading;
