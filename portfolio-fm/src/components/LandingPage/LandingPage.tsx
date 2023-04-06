import  {useState} from 'react';
import fondo from '../../assets/fondo.png'
import { useTranslation } from 'react-i18next';

type Properties<T> = { [key: string]: T };

interface CustomCSSProperties extends React.CSSProperties {
  '--delay': string;
  backgroundImage: string;
}

const LandingPage = () => {
  const [hover, setHover] = useState(false);
  const {t} = useTranslation()
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
    <section >
      <div className="page flex md:flex-row flex-col h-screen items-center  ">  
      <div className='flex  w-screen md:w-2/3 '>
            <div className=" grid grid-cols-9 my-20 md:my-0 md:mx-5  lg:my-0  w-screen h-2/5 rounded-md overflow-hidden shadow-lg font-extrabold font-serif text-2xl sm:text-4xl lg:text-6xl group">
              {tablets.front.map((e, index) => (
                <div
                className={` h-16 sm:h-32 lg:h-48  transition ease-in-out 
                bg-zinc-800/60 [transform-style:preserve-3d]
                [backface-visibility:hidden] 
                ${hover ? " [transform:rotateY(180deg)]" : ""}  duration-1000 delay-[var(--delay)]`}
                style={{
                  transitionDelay: index * 0.1 + 's',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                key={index}
                >
                  <div className="text-white">{e}</div>
                  <div className=" bg-zinc-800/60 absolute inset-0 h-full w-full  [transform:rotateY(180deg)]  [backface-visibility:hidden]"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <p className="text-white">{tablets.back[index]}</p>
                  </div>
                </div>
                ))}
            
            </div>  
          </div>
   
        <div className="bg-slate-200 flex px-0 mx-0  items-center  w-screen lg:w-1/3 hover md:w-2/5 h-2/5 md:h-screen lg:h-screen relative group">
        <img 
            className="object-cover w-full h-full" 
            alt='avatar' src={fondo}/>
              <div className='absolute text-white text-center w-full
              h-auto md:top-1/4 lg:top-1/4 '>
                 <h1 className=' text-2xl md:text-3xl lg:text-4xl shadow-sm font-mono tran group-hover:translate-y-5 lg:group-hover:translate-y-10 duration-1000 '>{t("Desarrollador Backend con experiencia en múltiples tecnologías")} &#x1F9D1;&#x200D;&#x1F4BB;</h1>
                 <p className='mt-14 opacity-0 group-hover:translate-y-5 lg:group-hover:translate-y-10 group-hover:opacity-100 duration-1000 delay-500' > {t("Me especializo en la creación de aplicaciones robustas y escalables.")}</p>
              </div>
        <img
          className=" absolute object-cover w-full h-full group-hover:opacity-0 duration-1000 rounded "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          alt="hero"
          src="https://images.unsplash.com/photo-1620122830785-a18b43585b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlJTIwYmxhbmNvJTIweSUyMG5lZ3JvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          
          </div> 
            </div>
        
      
    </section>
  );
};

export default LandingPage;