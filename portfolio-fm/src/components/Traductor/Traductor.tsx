import { useState } from "react";
import { useTranslation } from "react-i18next";

const Traductor: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "es");

const changeL = () => {
  if (language === "es") {
    i18n.changeLanguage("en");
    setLanguage("en");
    localStorage.setItem("language", "en");
  } else {
    i18n.changeLanguage("es");
    setLanguage("es");
    localStorage.setItem("language", "es");
  }
};


  return (
    <div>
      <button onClick={changeL}>
        {language === "es" ? (
           <img src="https://img.icons8.com/emoji/42/spain-emoji.png" alt="es-flag" />
         
        ) : (
          <img src="https://img.icons8.com/emoji/42/united-kingdom-emoji.png" alt="en-flag" />
        )}
      </button>
    </div>
  );
};

export default Traductor;
