import { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <button className="bg-slate-500 hover:bg-slate-400 font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded-full" onClick={toggleDarkMode}>
    {isDarkMode ? '🌞' : '🌙'}
  </button>
);
};

export default DarkMode;