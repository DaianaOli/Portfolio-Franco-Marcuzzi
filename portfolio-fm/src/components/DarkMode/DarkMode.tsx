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
    <button
      className="bg-slate-500 hover:bg-slate-400 font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded-full"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkMode;
