import {data} from '../../data.json'
import {Link} from 'react-router-dom'
import DarkMode from '../DarkMode/DarkMode';

interface Lenguaje {
    id: number;
    nombre: string;
    experiencia: string;
    logo: string
}

const Lenguajes = () => {
    const {lenguajes_programacion} = data;
    const volver = () => {
        window.history.back()
    }


    const lenguaje = lenguajes_programacion.map((l:Lenguaje) => (
        <Lenguaje key={l.id} lenguaje={l}/>
    ))
    return (    
        <div className="flex flex-col dark:bg-zinc-900 dark:text-white  w-full h-screen items-center justify-between p-4 gap-4">
            <DarkMode/>
            <h1 className="font-semibold">Lenguajes de Programación</h1>
            <div className='flex flex-col gap-14 w-full h-full items-center justify-center sm:flex-wrap md:flex-row'>
            {lenguaje}
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

const Lenguaje = ({lenguaje}: {lenguaje: Lenguaje}) => {
    return (
        <div data-aos="zoom-in">
            <div className="flex flex-col w-52 h-3/4 bg-slate-300 dark:bg-transparent gap-4 items-center text-center p-4  ">
                <img className='w-auto h-auto ' src={lenguaje.logo} alt=""/>
                <div className='flex flex-col gap-4 '>
                <h1>{lenguaje.nombre}</h1>
                <h2>{lenguaje.experiencia}</h2>
                </div>
            </div>
        </div>
    )
}

export default Lenguajes