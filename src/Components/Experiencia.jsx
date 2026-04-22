import { useTheme } from "../context/ThemeContext";
import experienciaData from "../data/experiencia.json";

export default function Experiencia() {
    const { darkMode } = useTheme();

    return (
        <div className="space-y-10">
            {experienciaData.map((exp, index) => (
                <div key={index}>
                    {/* Header */}
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-6">
                        <div>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <p className="text-blue-500">{exp.company}</p>
                        </div>
                        <span className={`text-sm font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {exp.period}
                        </span>
                    </div>

                    {/* Proyectos con habilidades */}
                    {exp.proyectos && exp.proyectos.length > 0 && (
                        <div className="space-y-4">
                            {exp.proyectos.map((proyecto, pIndex) => (
                                <div 
                                    key={pIndex} 
                                    className={`relative pl-4 border-l-2 transition-colors duration-300 ${
                                        darkMode 
                                            ? 'border-blue-500/50 hover:border-blue-500' 
                                            : 'border-blue-600/50 hover:border-blue-600'
                                    }`}
                                >
                                    {/* Título y tipo */}
                                    <div className="mb-2">
                                        <h4 className="text-lg font-semibold">{proyecto.nombre}</h4>
                                        <span className={`text-xs font-mono uppercase tracking-wider ${
                                            darkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                            {proyecto.tipo}
                                        </span>
                                    </div>

                                    {/* Descripción */}
                                    <p className={`mb-3 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {proyecto.descripcion}
                                    </p>

                                    {/* Habilidades - minimal style */}
                                    {proyecto.habilidades && proyecto.habilidades.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {proyecto.habilidades.map((hab, hIndex) => (
                                                <span 
                                                    key={hIndex}
                                                    className={`px-2 py-0.5 text-xs font-mono ${
                                                        darkMode 
                                                            ? 'bg-gray-800 text-gray-400' 
                                                            : 'bg-gray-100 text-gray-600'
                                                    }`}
                                                >
                                                    {hab}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Valor - minimal highlight */}
                                    {proyecto.valor && (
                                        <div className={`text-xs font-mono ${
                                            darkMode 
                                                ? 'text-green-400' 
                                                : 'text-green-600'
                                        }`}>
                                            ✓ {proyecto.valor}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Descripción simple (para practicante) */}
                    {exp.description && exp.description.length > 0 && (
                        <ul className="space-y-2 list-disc list-inside">
                            {exp.description.map((item, i) => (
                                <li key={i} className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}