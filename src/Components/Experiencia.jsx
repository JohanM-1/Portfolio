import { useTheme } from "../context/ThemeContext";
import experienciaData from "../data/experiencia.json";

export default function Experiencia() {
    const { darkMode } = useTheme();

    return (
        <div className="space-y-6">
            {experienciaData.map((exp, index) => (
                <div key={index} className="p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <p className="text-blue-500">{exp.company}</p>
                        </div>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {exp.period}
                        </span>
                    </div>
                    <ul className="space-y-2 list-disc list-inside">
                        {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
} 