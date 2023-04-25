import { useEffect, useState } from "react";
import { data } from "../../data.json";
import DarkMode from "../DarkMode/DarkMode";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

interface ExperienciaLaboral {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
  imagenes?: Imagenes[];
  imagenes2?: Imagenes[];
}

interface Imagenes {
  id: number;
  imagen: string;
}

function Experiencia({ experiencia }: { experiencia: ExperienciaLaboral }) {
  const [hover, setHover] = useState(false);
  const [statePhotos, setStatePhotos] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!hover) {
        setStatePhotos((prevCounter) => {
          setHover(true);
          return prevCounter === 1 ? 0 : 1;
        });
      } else {
        setHover(false);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [hover]);

  return (
    <div className="flex flex-col h-screen w-full justify-center gap-6 ">
      <h1 className=" mx-4 text-4xl text-gray-900 dark:text-gray-300">
        {t(experiencia.nombre)}
      </h1>
      <div className="flex items-center  m-4 h-3/5">
        <div
          data-aos="fade-right"
          className="flex flex-col text-3xl gap-5   text-gray-600  w-2/4"
        >
          <h1>{t(experiencia.descripcion)}</h1>
          <div className="mt-2">
            <p data-aos="fade-right">
              {t("Fecha de inicio:")}{" "}
              <span className="text-gray-900 dark:text-white">
                {experiencia.fecha_inicio}
              </span>
            </p>
            <p data-aos="fade-right">
              {t("Fecha de fin:")}{" "}
              <span className="text-gray-900 dark:text-white">
                {experiencia.fecha_fin}
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-2/4 h-full  justify-center items-center group">
          <div
            data-aos="fade-right"
            className=" border-4 shadow-lg grid grid-cols-4 content-center   group-hover"
          >
            {data.fondo.map((e, index) => {
              return (
                <div
                  className={`  object-cover transition ease-in-out [transform-style:preserve-3d] ${
                    hover ? "[transform:rotateY(180deg)]" : ""
                  }
                  duration-1000 delay-[var(--delay)]`}
                  style={{
                    transitionDelay: index * 0.1 + "s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {e.imagen && (
                    <div key={e.id}>
                      <img src={e.imagen} alt="imagen" />
                    </div>
                  )}

                  <div
                    className="absolute inset-0 h-full w-full  [transform:rotateY(180deg)]  [backface-visibility:hidden]"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {statePhotos === 0 ? (
                      <>
                        {experiencia.imagenes &&
                          experiencia.imagenes.length > index && (
                            <img
                              className=""
                              src={experiencia.imagenes[index].imagen}
                              alt="imagen"
                            />
                          )}
                      </>
                    ) : (
                      <>
                        {experiencia.imagenes2 &&
                          experiencia.imagenes2.length > index && (
                            <img
                              className=""
                              src={experiencia.imagenes2[index].imagen}
                              alt="imagen"
                            />
                          )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Experiencias() {
  const { experiencia_laboral } = data;
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const volver = () => {
    window.history.back();
  };

  return (
    <div className="relative flex flex-col font-serif w-full h-full items-center p-8 gap-6">
      <DarkMode />

      <div className="flex w-full font  text-gray-700 text-5xl items-center">
        <span className="h-[1px]  flex-grow rounded-3xl dark:bg-white bg-black" />
        <h1 className="px-3 text-sm text-gray-900  dark:text-white font-light md:text-4xl lg:text-5xl xl:text-6xl">
          {t("Experiencia laboral")}
        </h1>

        <span className="h-[1px] flex-grow rounded-3xl dark:bg-white bg-black" />
      </div>

      {experiencia_laboral.map((e: ExperienciaLaboral) => (
        <Experiencia key={e.id} experiencia={e} />
      ))}
      <button
        className="flex items-center gap-2 justify-center bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        onClick={volver}
      >
        {t("Volver")}
      </button>
    </div>
  );
}

export default Experiencias;
