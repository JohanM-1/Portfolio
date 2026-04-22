import { useTheme } from "../context/ThemeContext";
import { assets } from "../data/assetsMap";

export default function TechSelector({ tecnologias, tecnologiaSeleccionada, setTecnologiaSeleccionada }) {
    const { darkMode } = useTheme();

    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {tecnologias.map((tech) => {
                const IconComponent = assets.icons[tech.icono];
                const isSelected = tecnologiaSeleccionada === tech.id;

                return (
                    <button
                        key={tech.id}
                        onClick={() => setTecnologiaSeleccionada(tech.id)}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300
                            ${isSelected 
                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                                : darkMode 
                                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                            }
                        `}
                    >
                        {IconComponent && (
                            <IconComponent className="w-5 h-5" />
                        )}
                        <span>{tech.nombre}</span>
                        <span className={`
                            text-xs px-2 py-0.5 rounded-full
                            ${isSelected 
                                ? 'bg-white/20 text-white' 
                                : darkMode 
                                    ? 'bg-gray-700 text-gray-400' 
                                    : 'bg-gray-200 text-gray-500'
                            }
                        `}>
                            {tech.proyectos.length}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}