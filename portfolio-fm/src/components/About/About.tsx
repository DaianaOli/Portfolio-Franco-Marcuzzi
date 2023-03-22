import { data } from "../../data.json";

const About = () => {
  const { nombre, apellido, descripcion, edad, email, imagen, github } = data;
  const nombreCompleto = nombre + " " + apellido;

  return (
    <div id="about" className="relative flex justify-center items-center w-full flex-wrap ">
    <div className="flex flex-col sm:flex-wrap md:flex-row items-center justify-center p-4">
      <div className="flex flex-col font-semibold gap-3 w-full md:w-1/2 dark:text-white">
        <h1>Sobre mi</h1>
        <div className="bg-slate-400 dark:bg-gray-800 p-3 rounded-lg items-center justify-center text-center w-90% md:w-10/12">
          <h2>
            Soy {nombreCompleto}, tengo {edad} años. {descripcion}
          </h2>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          <h4>Podes comunicarte conmigo via</h4>
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
        <div className="p-3 flex flex-col gap-2">
          <a className="underline underline-offset-8" href="#idiomas">
            Idiomas
          </a>
          <a className="underline underline-offset-8" href="#lenguajes">
            Lenguajes de programacion
          </a>
          <a className="underline underline-offset-8" href="#experiencia">
            Experiencia laboral
          </a>
          <a className="underline underline-offset-8" href="#cursos">
            Cursos
          </a>
          <a href="">
           <button className="flex items-center gap-2 justify-center bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
            Descargar CV
            <img className="w-6 h-6" src="https://img.icons8.com/ios/50/000000/download.png" alt="download"/>
          </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-300 dark:bg-gray-700 sm:w-1/2 md:w-1/3 border-dashed border-2 border-slate-600">
        {/* <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-28 h-28 bg-slate-500 rounded-full"></div>
        </div>    -----------esto son los circulos----------------
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 z-10">
          <div className="w-28 h-28 bg-slate-500 rounded-full"></div>
        </div> */}
        <img className=" w-full h-auto" src={imagen} alt={nombre} />
      </div>
    </div>
    </div>
  );
};

export default About;
