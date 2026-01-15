import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import GithubSvg from "../assets/GithubSvg";
import { createPortal } from "react-dom";

export default function ProyectoModal({ isOpen, setIsOpen, proyecto }) {
  const { darkMode } = useTheme();

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm bg-black/50 cursor-none" 
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-6 shadow-2xl ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} cursor-none`}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-bold mb-4">{proyecto.titulo}</h2>
            
            {/* Media Section */}
            <div className="mb-6">
               {proyecto.videsrc ? (
                   <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                       <iframe 
                           src={proyecto.videsrc} 
                           title={proyecto.titulo}
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                           allowFullScreen
                           className="w-full h-[400px]"
                       ></iframe>
                   </div>
               ) : (
                   <img 
                       src={proyecto.imgsrc} 
                       alt={proyecto.titulo} 
                       className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                   />
               )}
            </div>

            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {proyecto.descripcion}
            </p>

            {/* Links Section */}
            <div className="flex flex-wrap gap-4 mb-8">
                {proyecto.previewLink && (
                  <a href={proyecto.previewLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Ver Demo
                  </a>
                )}
                {proyecto.fullStackLink && (
                  <a href={proyecto.fullStackLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
                    <GithubSvg className="w-5 h-5" />
                    Código
                  </a>
                )}
                 {proyecto.frontendLink && (
                  <a href={proyecto.frontendLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
                    <GithubSvg className="w-5 h-5" />
                    Frontend
                  </a>
                )}
                 {proyecto.backendLink && (
                  <a href={proyecto.backendLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
                    <GithubSvg className="w-5 h-5" />
                    Backend
                  </a>
                )}
            </div>

            {/* Stages / Details Section */}
            {proyecto.etapas && proyecto.etapas.length > 0 && (
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold border-b pb-2 border-gray-700">Detalles Técnicos</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {proyecto.etapas.map((etapa, index) => (
                            <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                                <h4 className="text-xl font-bold mb-2 text-blue-500">{etapa.title || etapa.titulo}</h4>
                                <p className="mb-4 text-sm">{etapa.description || etapa.descripcion}</p>
                                {etapa.technologies && (
                                    <div className="flex flex-wrap gap-2">
                                        {etapa.technologies.map((tech, i) => (
                                            <motion.span 
                                                key={i} 
                                                whileHover={{ scale: 1.2 }}
                                                className={`text-xs px-2 py-1 rounded inline-block cursor-default ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}