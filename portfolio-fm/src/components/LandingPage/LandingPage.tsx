import React from 'react';
import fondo from '../../assets/fondo.png'

type Properties<T> = { [key: string]: T };

interface CustomCSSProperties extends React.CSSProperties {
  '--delay': string;
  backgroundImage: string;
}

const LandingPage = () => {
  const style: CustomCSSProperties = {
    '--delay': '0.1s',
    transitionDelay: '0.5s',
    backgroundImage: fondo
  };

  const tablets = {
    front: ['F', 'r', 'a', 'n', 'c', 'o', ' ', 'A', '.', 'M', 'a', 'r', 'c', 'u', 'z', 'z', 'i', ' '],
    back: ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', 'B', 'a', 'c', 'k', 'e', 'n', 'd', ' '],
  };

  return (
    <section id="home">
      <div className=" flex py-20 md:flex-row flex-col bg-slate-700 h-screen justify-between items-center">
        <div className="flex-grow px-5 w-screen md:w-auto sm:mb-5 flex items-center justify-center flex-col group cursor-pointer">
          <div className="grid grid-cols-9 content-center w-full text-center font-extrabold font-serif text-2xl sm:text-4xl lg:text-6xl">
            {/* <--------------------ACA VA TU CODIGO-----------> */}
            {tablets.front.map((e, index) => (
              <div
                className="bg-neutral-800 h-16 sm:h-32 lg:h-48 transform transition ease-in-out shadow-xl shadow-black/40 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 delay-[var(--delay)]"
                style={{
                  transitionDelay: index * 0.1 + 's',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                key={index}
              >
                <div className="text-white">{e}</div>
                <div className="bg-neutral-800 absolute inset-0 h-full w-full  [transform:rotateY(180deg)]  [backface-visibility:hidden]"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <p className="text-white">{tablets.back[index]}</p>
                </div>
              </div>
              ))}
              {/* <--------------------HASTA ACA-----------> */}
          </div>
        </div>
        <div className="bg-slate-200 px-0 mx-0 cursor-pointer justify-center w-screen lg:w-1/3 md:w-2/5 items-center group">
          {/* <--------------------ACA ESTA LA FOTO DE PERFIL-----------> */}  
          <div className='h-full w-full relative'
          >
            <img className='w-screen px-0 h-80  sm:h-96 md:h-screen lg:h-screen     justify-center object-center rounded'
              alt='avatar' src={fondo}/>
              <div className='absolute text-white text-center top-1/4 before:opacity-0 '>
                 <h1 className='text-2xl group-hover:translate-y-10 duration-1000  '>Desarrollador Backend con experiencia en múltiples tecnologías</h1>
                 <p className='mt-14 opacity-0 group-hover:translate-y-10 group-hover:opacity-100 duration-1000 delay-500 ' > Me especializo en la creación de aplicaciones robustas y escalables.</p>
              </div>
              <img
              className=" absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-0 inset-0 duration-1000 w-screen px-0 h-80 sm:h-96 md:h-screen  lg:h-screen  justify-center object-center rounded "
              alt="hero"
              src="https://images.unsplash.com/photo-1620122830785-a18b43585b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlJTIwYmxhbmNvJTIweSUyMG5lZ3JvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
          </div> 
        </div>
      </div>
    </section>
  );
};

export default LandingPage;