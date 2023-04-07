import { useState } from "react";
import logo from "../../assets/logo.png";
import DarkMode from "../DarkMode/DarkMode";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Traductor from "../Traductor/Traductor";

function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="bg-gray-100 text-black dark:text-white dark:bg-zinc-800 fixed w-full  z-10 ">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8  ">
        <div className="relative flex items-center  h-16 ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-dark dark:text-white  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex items-center ">
              <h1 className="text-black dark:text-white text-center font-serif  text-4xl block lg:hidden  w-auto ">
                FM
              </h1>
              <h1 className="text-black dark:text-white -center font-serif  text-4xl hidden lg:block  w-auto ">
                FM
              </h1>
            </div>
            <div className=" hidden  sm:block sm:ml-6  ">
              <div className="flex h-full space-x-4 items-center text-2xl ">
                <a
                  href="#home"
                  className="hover:border-b border-black  dark:border-white 700 px-3    font-medium"
                  aria-current="page"
                >
                  {" "}
                  Menu
                </a>

                <a
                  href="#proyectos"
                  className="hover:border-b  border-black  dark:border-white 700 px-3   font-medium"
                >
                  {t("Proyectos")}
                </a>

                <a
                  href="#about"
                  className="hover:border-b border-black  dark:border-white 700 px-3   font-medium"
                >
                  {t("Sobre mi")}
                </a>
              </div>
            </div>
            <div className=" hidden  sm:flex gap-4">
              <DarkMode />
              <Traductor />
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "hidden" : "block"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="hover:border-b border-black  dark:border-white  block px-3 py-2 rounded-md text-base font-medium"
          >
            Menu
          </a>
          <a
            href="#proyectos"
            className=" hover:border-b border-black  dark:border-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {t("Proyectos")}
          </a>
          <a
            href="#about"
            className="hover:border-b border-black  dark:border-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {t("Sobre mi")}
          </a>
          <DarkMode />
          <Traductor />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
