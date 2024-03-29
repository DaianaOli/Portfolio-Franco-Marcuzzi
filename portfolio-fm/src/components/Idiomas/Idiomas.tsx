import { data } from "../../data.json";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

const Idiomas = () => {
  const { idiomas } = data;

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

  const datos = idiomas.map((i) => {
    return (
      <div data-aos="zoom-out" data-aos-duration="2000" key={i.lengua}>
        <div className="flex flex-col items-center justify-center text-center p-10 gap-8 bg-slate-300/40 dark:bg-zinc-700/50  rounded-lg border-x-2 border-black dark:border-white ">
          <img
            className="w-44 h-44 border-2 border-black rounded-full dark:border-white"
            src={i.bandera}
            alt={i.lengua}
          />
          <div className="flex flex-col gap-14">
            <h1 className="font-bold text-3xl">{t(i.lengua)}</h1>
            <h2 className="font-semibold">{t(i.estado)}</h2>
          </div>
        </div>
      </div>
    );
  });

  const volver = () => {
    window.history.back();
  };

  return (
    <div className="flex relative flex-col p-4  dark:text-white w-full min-h-screen items-center justify-between gap-4">
      <DarkMode />
      <h1 className="font-light text-4xl flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        {t("Idiomas")}
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="flex flex-wrap gap-14 justify-center p-4"
      >
        {datos}
      </div>
      <button
        className="flex items-center gap-2 justify-center bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        onClick={volver}
      >
        {t("Volver")}
      </button>
    </div>
  );
};

export default Idiomas;
