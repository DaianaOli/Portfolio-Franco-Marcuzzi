import { data } from "../../data.json";
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";

const About = () => {
  const { nombre, apellido, edad, email, imagen, github } = data;
  const nombreCompleto = nombre + " " + apellido;
  const { t } = useTranslation();

  return (
    <div id="about" className="relative flex justify-center items-center w-full flex-wrap">
    <div className="flex flex-col sm:flex-wrap md:flex-row items-center justify-center p-4 ">
      <div className="flex flex-col font-semibold gap-3 w-full md:w-1/2 dark:text-white ">
        <h1>{t("Sobre mi")} </h1>
        <div data-aos="zoom-in-up" data-aos-duration="1000"
        className="bg-slate-400 dark:bg-gray-800 p-3 rounded-lg items-center justify-center text-center w-90% md:w-10/12">
          <h2>
            {t("Soy")} {nombreCompleto}, {t("tengo")} {edad} {t("años.")} {t("descripcion")}
          </h2>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          <h4>{t ("Podes comunicarte conmigo via")}</h4>
          <div className="flex flex-row gap-2 items-center justify-center">
            <a href={github} target="_blank" rel="noreferrer">
              <img
                className="w-12 h-12 dark:invert"
                src="https://img.icons8.com/ios-filled/256/github.png"
                alt="github"
              />
            </a>
            <a
              href={`mailto:${email}`} target="_blank" rel="noreferrer"
            >
              <img
                className="w-12 h-12 dark:invert"
                src="https://img.icons8.com/ios-filled/256/apple-mail.png"
                alt="email"
              />
            </a>
          </div>
        </div>
        <div className="p-3 flex flex-col gap-2 w-90% md:w-10/12" >
          <Link to="idiomas">
          <button className="underline underline-offset-8" data-aos="fade-right" >
            {t("Idiomas")}
          </button>
          </Link>
          <Link to="lenguajes">
          <button className="underline underline-offset-8" data-aos="fade-right" data-aos-delay="100">
            {t("Lenguajes de programacion")}
          </button>
          </Link>
          <Link to="experiencia">
          <button className="underline underline-offset-8" data-aos="fade-right" data-aos-delay="200">
            {t("Experiencia laboral")}
          </button>
          </Link>
          <Link to="cursos">
          <button className="underline underline-offset-8" data-aos="fade-right" data-aos-delay="300">
            {t("Cursos")}
          </button>
          </Link>
          <a href="">
           <button className="flex items-center gap-2 justify-center bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
           {t("Descargar CV")}
            <img className="w-6 h-6" src="https://img.icons8.com/ios/50/000000/download.png" alt="download"/>
          </button>
          </a>
        </div>
      </div>
      <div data-aos="fade-down-left" data-aos-duration="2000"
      className="flex justify-center items-center bg-slate-300 dark:bg-gray-700 sm:w-1/2 md:w-1/3 border-dashed border-2 border-slate-600">
        <img className=" w-full h-auto" src={imagen} alt={nombre} />
      </div>
    </div>
    </div>
  );
};

export default About;
