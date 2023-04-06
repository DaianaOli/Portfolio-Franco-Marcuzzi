import { data } from "../../data.json";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Proyecto {
  id: number;
  descripcion: string;
  estado: string;
  fecha_inicio: string;
  fecha_fin: string;
  nombre: string;
}

const Proyectos = () => {
  const { t } = useTranslation();
  const { proyectos } = data;
  const proyecto = proyectos.map((p: Proyecto) => (
    <Proyecto key={p.id} proyecto={p} />
  ));
  return (
    <div  id="proyectos" className="page flex relative flex-col items-center justify-center gap-8 dark:text-white p-6">
      <h1 className="md:mt-16 font-light text-4xl flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">{t("Proyectos")}</h1>
      {proyecto}
    </div>
  );
};

const Proyecto = ({ proyecto }: { proyecto: Proyecto }) => {
  const [verDetalles, setVerDetalles] = useState(false);
  const {t} = useTranslation()
  const handleVerDetalles = () => {
    setVerDetalles(!verDetalles);
  };

  return (
    <div 
      className="flex flex-row items-center justify-center w-4/5 bg-slate-400/50 dark:bg-zinc-800/60"
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
          data-aos="fade-down"
          data-aos-duration="2000"
          >{t(proyecto.descripcion)}</h1>
        ) : (
          <div className="w-1/2 flex flex-col items-center text-center justify-center" data-aos="fade-down"
          data-aos-duration="1000">
            <h3>{t(proyecto.estado)}</h3>
            <h2>{proyecto.fecha_inicio}</h2>
            <h2>{proyecto.fecha_fin}</h2>
            <h1>{t(proyecto.nombre)}</h1>
          </div>
        )}

        <button onClick={handleVerDetalles}  className="underline underline-offset-8">
          {verDetalles ? (
            <h1>
            {t("Ver menos")}
            </h1>
          ) : (
            <h1>
            {t("Ver mas")}
            </h1>
          )}
        </button>
      </div>
    </div>
  );
};

export default Proyectos;