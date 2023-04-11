import { useTranslation } from "react-i18next"

const Error = ()=>{
    const {t} = useTranslation()

    const volver = () => {
        window.history.back();
      };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="z-10 items-center flex flex-col">
            <h1 className="text-4xl font-bold">{t("Pagina no encontrada")}</h1>
            <img src="https://img.icons8.com/pastel-glyph/256/page-not-found.png" alt="error"/>
            <button onClick={volver} className="bg-slate-500 text-white p-2 rounded-md mt-4">{t("Volver")}</button>
            </div>
            
        </div>

    )
}

export default Error