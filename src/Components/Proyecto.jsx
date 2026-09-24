import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import ProyectoModal from "./ProyectoModal";

export default function Proyecto({
  titulo,
  descripcion,
  imgsrc,
  videsrc,
  previewLink,
  fullStackLink,
  backendLink,
  frontendLink,
  techIcons = [],
  etapas = [],
  habilidades = [],
  valor = ""
}) {
  const { darkMode } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Spotlight que sigue al mouse dentro de la tarjeta (sin re-renders)
  const spotlightRef = useRef(null);
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${
    darkMode ? "rgba(59, 130, 246, 0.10)" : "rgba(37, 99, 235, 0.08)"
  }, transparent 70%)`;

  const handlePointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const rect = spotlightRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onClick={openModal}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal();
          }
        }}
        onPointerMove={handlePointerMove}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`Ver detalles de ${titulo}`}
        className="group relative grid gap-4 pb-1 transition-opacity duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer mb-12 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-8 focus-visible:ring-offset-transparent"
      >
        <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block ${darkMode ? 'lg:group-hover:bg-slate-800/50' : 'lg:group-hover:bg-slate-100/50'} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}></div>
        <motion.div
          ref={spotlightRef}
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:-inset-x-6 lg:block"
          style={{ background: spotlight }}
        />
        
        <div className="z-10 sm:col-span-2 mt-1">
          <img 
            alt={titulo} 
            loading="lazy" 
            width="200" 
            height="48" 
            decoding="async" 
            className="rounded border-2 border-slate-200/10 transition duration-300 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
            src={imgsrc} 
          />
        </div>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <span className={`inline-flex items-baseline font-medium leading-tight ${darkMode ? 'text-slate-200' : 'text-slate-900'} transition-colors duration-300 group-hover:text-blue-500 group-focus-visible:text-blue-500 text-base`}>
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block pointer-events-none"></span>
                <span>
                  {titulo}
                  <span className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
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
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                key={index} 
                className="mr-1.5 mt-2"
              >
                <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${darkMode ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                  {tech.name}
                </div>
              </motion.li>
            ))}
          </ul>
          
          {/* Habilidades - minimal inline */}
          {habilidades && habilidades.length > 0 && (
            <div className="mt-2">
              <ul className="flex flex-wrap gap-1">
                {habilidades.slice(0, 5).map((hab, hIndex) => (
                  <li 
                    key={hIndex}
                    className={`text-xs font-mono ${
                      darkMode 
                        ? 'text-gray-500' 
                        : 'text-gray-500'
                    }`}
                  >
                    {hab}{hIndex < Math.min(habilidades.length, 5) - 1 ? ',' : ''}
                  </li>
                ))}
                {habilidades.length > 5 && (
                  <li className={`text-xs font-mono ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    +{habilidades.length - 5}
                  </li>
                )}
              </ul>
            </div>
          )}
          
          {/* Valor - minimal inline */}
          {valor && (
            <div className={`mt-1 text-xs font-mono ${
              darkMode 
                ? 'text-green-400' 
                : 'text-green-600'
            }`}>
              ✓ {valor}
            </div>
          )}
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
          etapas,
          habilidades,
          valor
        }}
      />
    </>
  );
}