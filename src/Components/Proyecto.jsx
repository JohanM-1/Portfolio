import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import GithubSvg from "../assets/GithubSvg";
import ProyectoModal from "./ProyectoModal";

export default function Proyecto({
  titulo,
  descripcion,
  imgsrc,
  videsrc,
  previewLink,
  fullStackLink,
  frontendLink,
  backendLink,
  techIcons = [],
  etapas = []
}) {
  const { darkMode } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className={`group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer mb-12`}
      >
        <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${darkMode ? 'lg:group-hover:bg-slate-800/50' : 'lg:group-hover:bg-slate-100/50'} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}></div>
        
        <div className="z-10 sm:col-span-2 mt-1">
          <img 
            alt={titulo} 
            loading="lazy" 
            width="200" 
            height="48" 
            decoding="async" 
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
            src={imgsrc} 
          />
        </div>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <span className={`inline-flex items-baseline font-medium leading-tight ${darkMode ? 'text-slate-200' : 'text-slate-900'} group-hover:text-blue-500 focus-visible:text-blue-500  group/link text-base`}>
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block pointer-events-none"></span>
                <span>
                  {titulo}
                  <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </div>
          </h3>
          
          <p className={`mt-2 text-sm leading-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {descripcion}
          </p>

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {techIcons.map((tech, index) => (
              <motion.li 
                whileHover={{ scale: 1.2 }}
                key={index} 
                className="mr-1.5 mt-2"
              >
                <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${darkMode ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                  {tech.name}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

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
          previewLink,
          fullStackLink,
          etapas
        }}
      />
    </>
  );
}