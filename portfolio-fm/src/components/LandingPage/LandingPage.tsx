import React from "react";

const LandingPage = () => {
  return (
    <section id="home">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="bg-slate-500 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       {/* <--------------------ACA VA TU CODIGO-----------> */}
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hola, soy Franco 
          <br className="hidden lg:inline-block" />Me encanta construir aplicaciones web.
        </h1>
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
        </p>
          {/* <--------------------HASTA ACA-----------> */}
       {/* <--------------------ACA ESTA EL BOTON-----------> */}
        <div className="flex justify-center">
          <a
            href="#about"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            More
          </a>
        </div>
      </div>
       {/* <--------------------ACA ESTA LA FOTO DE PERFIL-----------> */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1870181.jpg"
        />
      </div>
    </div>
  </section>

  );
};

export default LandingPage;
