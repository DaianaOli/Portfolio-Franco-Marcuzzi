import { data } from "../../data.json";
import DarkMode from "../DarkMode/DarkMode";
import { useTranslation } from "react-i18next";

interface Lenguaje {
  id: number;
  nombre: string;
  experiencia: string;
  logo: string;
}

const Lenguajes = () => {
  const { lenguajes_programacion } = data;
  const { t } = useTranslation();

  const volver = () => {
    window.history.back();
  };

  const lenguaje = lenguajes_programacion.map((l: Lenguaje) => (
    <Lenguaje key={l.id} lenguaje={l} />
  ));
  return (
    <div className="flex relative flex-col bg-no-repeat bg-cover bg-center dark:text-white  w-full h-screen items-center justify-between p-4 gap-4">
      <DarkMode />
      <h1 className="font-light text-4xl flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">{t("Lenguajes de programacion")}</h1>
      <div className="flex flex-wrap gap-14 justify-center p-4">{lenguaje}</div>
      <button
        className="flex items-center gap-2 justify-center bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        onClick={volver}
      >
        {t("Volver")}
      </button>
    </div>
  );
};

const Lenguaje = ({ lenguaje }: { lenguaje: Lenguaje }) => {
  const { t } = useTranslation();
  return (
    <div
      data-aos={lenguaje.id % 2 === 0 ? "flip-left" : "flip-right"}
      data-aos-duration="1500"
      className="max-w-xs py-4 px-8 bg-slate-300/40 dark:bg-zinc-700/50 backdrop-blur-sm shadow-lg rounded-lg my-10"
    >
      <div className="flex justify-center md:justify-end -mt-16 ">
        <img
          data-aos="zoom-in"
          data-aos-duration="2500"
          className="w-20 h-20 object-cover rounded-full border-2 border-slate-300/40  bg-slate-300/40 dark:bg-zinc-700/50"
          src={lenguaje.logo}
          alt={lenguaje.nombre}
        />
      </div>
      <div>
        <h2 className=" text-3xl font-semibold">
          {lenguaje.nombre}
        </h2>
        <p className="mt-2 ">{t(lenguaje.experiencia)}</p>
      </div>
    </div>
  );
};

export default Lenguajes;
