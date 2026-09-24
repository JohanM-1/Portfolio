import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { assets } from "../data/assetsMap";

export default function TechSelector({ tecnologias, tecnologiaSeleccionada, setTecnologiaSeleccionada }) {
    const { darkMode } = useTheme();

    return (
        <div className="flex flex-wrap gap-3 mb-8" role="tablist" aria-label="Filtrar proyectos por tecnología">
            {tecnologias.map((tech) => {
                const IconComponent = assets.icons[tech.icono];
                const isSelected = tecnologiaSeleccionada === tech.id;

                return (
                    <motion.button
                        key={tech.id}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setTecnologiaSeleccionada(tech.id)}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className={`
                            relative isolate flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-colors duration-300
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
                            ${isSelected 
                                ? 'text-white' 
                                : darkMode 
                                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                            }
                        `}
                    >
                        {isSelected && (
                            <motion.span
                                layoutId="tech-selector-active"
                                className="absolute inset-0 -z-10 rounded-lg bg-blue-500 shadow-lg shadow-blue-500/25"
                                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            />
                        )}
                        {IconComponent && (
                            <IconComponent className="w-5 h-5" />
                        )}
                        <span>{tech.nombre}</span>
                        <span className={`
                            text-xs px-2 py-0.5 rounded-full transition-colors duration-300
                            ${isSelected 
                                ? 'bg-white/20 text-white' 
                                : darkMode 
                                    ? 'bg-gray-700 text-gray-400' 
                                    : 'bg-gray-200 text-gray-500'
                            }
                        `}>
                            {tech.proyectos.length}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
}
