import { data } from "../../data.json";
import { useState } from "react";

const Proyectos = () => {
  const { proyectos } = data;

  const proyecto = proyectos.map((p) => <Proyecto key={p.id} proyecto={p} />);

  return (
    <div className="flex flex-col items-center justify-center gap-4 dark:text-white p-2">
      <h1 className="font-semibold">Proyectos</h1>
      {proyecto}
    </div>
  );
};

const Proyecto = ({ proyecto }) => {
  const [verDetalles, setVerDetalles] = useState(false);

  const handleVerDetalles = () => {
    setVerDetalles(!verDetalles);
  };

  return (
    <div
      id="proyectos"
      className="flex flex-row items-center justify-center w-4/5 bg-gray-500 dark:bg-slate-800"
      data-aos={proyecto.id %2 ===0? 'fade-right':'fade-left'}
      data-aos-duration="2000"

    >
      <div className="flex w-1/2">
        <img
          className="w-full"
          src="https://img.interempresas.net/fotos/1965707.jpeg"
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col items-center text-center justify-center">
        {verDetalles ? (
          <h1 
          data-aos="fade-up"
          data-aos-duration="2000"
          >{proyecto.descripcion}</h1>
        ) : (
          <div className="w-1/2 flex flex-col items-center text-center justify-center" data-aos="fade-down"
          data-aos-duration="1000">
            <h3>{proyecto.estado}</h3>
            <h2>{proyecto.fecha_inicio}</h2>
            <h2>{proyecto.fecha_fin}</h2>
            <h1>{proyecto.nombre}</h1>
          </div>
        )}

        <button onClick={handleVerDetalles} className="underline underline-offset-8">
          {verDetalles ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

export default Proyectos;