import { useState, useEffect } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode') === 'true'
  );
  const toggleDarkMode = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    localStorage.setItem('isDarkMode', JSON.stringify(newValue));
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    if (localStorage.getItem('isDarkMode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const onUrlChange = () => {
      setIsDarkMode(localStorage.getItem('isDarkMode') === 'true');
    };
    
    window.addEventListener('hashchange', onUrlChange);
    
    return () => {
      window.removeEventListener('hashchange', onUrlChange);
    };
  }, []);
  
  return (
    <div className='flex items-center'>
 <button
    className='bg-gray-300 relative flex items-center rounded-full w-12 h-6 transition-colors focus:outline-none'
  onClick={toggleDarkMode}
>
<img
    className={`${
      isDarkMode ? 'opacity-0' : 'opacity-100'
    } absolute inset-y-0 right-0 w-6 h-6 my-auto mr-1 rounded-full transition-opacity`}
    src="https://cdn.icon-icons.com/icons2/32/PNG/256/sun_weather_2764.png"
    alt="Sun icon"
  />
  <img
    className={`${
      isDarkMode ? 'opacity-100' : 'opacity-0'
    } absolute inset-y-0 left-0 w-6 h-6 my-auto ml-1 rounded-full transition-opacity`}
    src="https://cdn.icon-icons.com/icons2/32/PNG/256/moon_night_midnight_2768.png"
    alt="Moon icon"
  />
  
</button>
    </div>
   
  );
};

export default DarkMode;
