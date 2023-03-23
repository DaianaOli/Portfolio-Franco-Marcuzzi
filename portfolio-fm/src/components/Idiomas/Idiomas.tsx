import {data} from "../../data.json"
import {Link} from 'react-router-dom'
import DarkMode from "../DarkMode/DarkMode"

const Idiomas = ()=>{
    const {idiomas} = data
    const datos = idiomas.map((i)=>{
        return(
            <div data-aos="zoom-in">
                <div className="flex flex-col bg-slate-300 dark:bg-transparent gap-14 items-center text-center p-10  ">
                    <img className="w-auto h-auto" src={i.bandera} alt={i.lengua}/>
                    <div className="flex flex-col gap-10">
                        <h1 className="font-bold">{i.lengua}</h1>
                        <h2 className="text-neutral-600">{i.estado}</h2>
                    </div>
                </div>
            </div>
            
        )
    })

    const volver = () => {
        window.history.back()
    }


    return(
        <div className="flex flex-col dark:bg-zinc-900 dark:text-white  w-full h-screen items-center justify-between p-4">
            <DarkMode/>
            <h1 className="text-lg font-semibold">Idiomas</h1>
            <div className="flex flex-col gap-14  items-center justify-center sm:flex-wrap md:flex-row">
                {datos}
            </div>
            <button 
            className="flex items-center gap-2 justify-center bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
            onClick={volver}
            >
                Atras
            </button>
        </div>
    )

}

export default Idiomas