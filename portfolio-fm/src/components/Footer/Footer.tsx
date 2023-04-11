import {FaHome} from "react-icons/fa"
import {MdWork} from "react-icons/md"
import {BsFillPersonVcardFill} from "react-icons/bs"

const Footer =()=>{
    return(
        <div className="bg-gray-100 text-black dark:text-white dark:bg-zinc-800 flex flex-col items-center justify-center text-center h-28 w-full ">
            <div className="z-10 flex flex-col gap-4 ">
            <p className="text-sm">© 2023 - Franco Marcuzzi</p>
                <div className="flex flex-row gap-8 items-center justify-center ">
                    <a href="#home"
                    className="items-center justify-center  flex  flex-col text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400">
                        Inicio<FaHome/>
                    </a>
                    <a href="#proyectos"
                    className=" items-center justify-center  flex  flex-col text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400">
                    Proyectos<MdWork/>
                    </a>
                    <a href="#about"
                    className=" items-center justify-center  flex  flex-col text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400">
                        Sobre mi<BsFillPersonVcardFill/>
                    </a>
                </div>
                <div>
                    <p className="text-sm">Esta pagina fue creada por
                        <a href="https://portfolio-dd.vercel.app/" target="_blank" className="text-gray-500 hover:text-blue-700"> D-D</a>
                    </p>

                </div>
            </div>
            
            </div>
    )}

export default Footer