import { useTheme } from "../context/ThemeContext";

export default function Experiencia() {
    const { darkMode } = useTheme();

    return (
        <div className="space-y-6">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold">Desarrollador de Software</h3>
                        <p className="text-blue-500">Factoryim</p>
                    </div>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        07.2024 - Actual
                    </span>
                </div>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Coordinación con equipo multidisciplinario para desarrollo de servicios backend escalables</li>
                    <li>Diseño de flujos de trabajo eficientes y optimización del rendimiento del sistema</li>
                    <li>Colaboración estrecha con desarrolladores frontend para mejorar la experiencia de usuario</li>
                    <li>Implementación de soluciones innovadoras para gestión dinámica de contenidos</li>
                </ul>
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold">Practicante Desarrollador</h3>
                        <p className="text-blue-500">Factoryim</p>
                    </div>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        03.2024 - 05.2024
                    </span>
                </div>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Desarrollo de MVP en Unity utilizando C#</li>
                    <li>Creación de aplicación de realidad mixta para HoloLens 2</li>
                    <li>Impacto significativo en ferias tecnológicas con soluciones innovadoras</li>
                </ul>
            </div>
        </div>
    );
} 