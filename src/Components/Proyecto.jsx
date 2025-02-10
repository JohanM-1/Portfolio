/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import GithubSvg from "../assets/GithubSvg";
import TecUsed from "./TecUsed";
import { useTheme } from "../context/ThemeContext";
import ProyectoModal from "./ProyectoModal";

export default function Proyecto({
  imgsrc = "src/imagenes/EjemploProyecto.png",
  videsrc,
  titulo = "Titulo Ejemplo",
  descripcion = "Ejemplo descripcion",
  frontendLink,
  backendLink,
  component1: Svg1,
  component2: Svg2,
  component3: Svg3,
  compName1: name1,
  compName2: name2,
  compName3: name3,
  etapas = []
}) {
  const { darkMode } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment>
      <article 
        className={`w-full mx-auto grid grid-cols-2 gap-4 font-sans pb-12 cursor-pointer ${
          darkMode ? 'text-gray-100' : 'text-gray-800'
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        <a 
          target="_blank"
          rel="noopener noreferrer" 
          className="col-span-2 md:col-span-1 group"
        >
          <div className={`
            relative flex flex-col items-center gap-4 p-4
            transition duration-300 ease-in-out transform 
            shadow-xl rounded-xl overflow-hidden
            md:group-hover:-translate-y-1 md:group-hover:shadow-2xl
            ${darkMode 
              ? 'bg-gray-800 hover:bg-gray-700' 
              : 'bg-white hover:bg-gray-50'
            }
          `}>
            <h3 className="text-2xl font-bold">{titulo}</h3>
            <img 
              className="w-full h-[200px] object-cover object-top rounded-lg shadow-md" 
              src={imgsrc} 
              alt={`Vista previa del proyecto ${titulo}`}
            />
          </div>
        </a>

        <section className="col-span-2 md:col-span-1 flex flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            <TecUsed component={Svg1} Name={name1}/>
            <TecUsed component={Svg2} Name={name2}/>
            <TecUsed component={Svg3} Name={name3}/>
          </div>

          <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {descripcion}
          </p>

          <footer className="flex items-center gap-4">
            {frontendLink && (
              <a 
                href={frontendLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`
                  inline-flex items-center gap-2 px-4 py-2
                  transition duration-300 rounded-xl border
                  ${darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-500'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                <GithubSvg className="w-5 h-5" />
                <span>Frontend</span>
              </a>
            )}
            
            {backendLink && (
              <a 
                href={backendLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`
                  inline-flex items-center gap-2 px-4 py-2
                  transition duration-300 rounded-xl border
                  ${darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-500'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                <GithubSvg className="w-5 h-5" />
                <span>Backend</span>
              </a>
            )}
          </footer>
        </section>
      </article>

      <ProyectoModal 
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        proyecto={{
          titulo,
          descripcion,
          imgsrc,
          videsrc,
          frontendLink,
          backendLink,
          etapas
        }}
      />
    </Fragment>
  );
}