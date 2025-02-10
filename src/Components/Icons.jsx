import PythonSvg from "../assets/PythonSvg"
import SqlAlqSvg from "../assets/SqlAlqSvg"
import FastApiSvg from "../assets/FastApiSvg"
import ReactSvg from "../assets/ReactSvg"
import TailwindSvg from "../assets/TailwindSvg"
import PostgresSvg from "../assets/PostgresSvg"
import FlutterSvg from "../assets/flutterSvg"
import DjangoSvg from "../assets/DjangoSvg"
import DockerSvg from "../assets/DockerSvg"
import UnityLogo from "../assets/UnitySvg"
import CsharpSvg from "../assets/CsharpSvg"
import Mrtk3Svg from "../assets/Mrtk3Svg"
import { useTheme } from "../context/ThemeContext"

export default function Icons() {
    const { darkMode } = useTheme();

    const technologies = [
        { icon: PythonSvg, name: "Python", color: "text-yellow-400" },
        { icon: DjangoSvg, name: "Django", color: "text-green-600" },
        { icon: FastApiSvg, name: "FastAPI" },
        { icon: SqlAlqSvg, name: "SQLAlchemy", color: "text-red-500" },
        { icon: PostgresSvg, name: "PostgreSQL", color: "text-sky-500" },
        { icon: DockerSvg, name: "Docker", color: "text-blue-500" },
        { icon: ReactSvg, name: "React", color: "text-cyan-400" },
        { icon: TailwindSvg, name: "Tailwind", color: "text-cyan-400" },
        { icon: FlutterSvg, name: "Flutter", color: "text-blue-400" },
        { icon: UnityLogo, name: "Unity", color: "text-gray-200" },
        { icon: CsharpSvg, name: "C#", color: "text-purple-600" },
        { icon: Mrtk3Svg, name: "MRTK3", color: "text-blue-500" },
    ];

    return (
        <section className="px-4 py-20">
            <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white/80' : 'text-black/80'} mb-8`}>
                Tecnologías
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                    <div 
                        key={index}
                        className={`flex flex-col items-center p-4 rounded-xl ${
                            darkMode 
                                ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                                : 'bg-white/50 hover:bg-gray-50/50'
                        } transition-all duration-300 transform hover:scale-105 border ${
                            darkMode ? 'border-gray-700' : 'border-gray-200'
                        }`}
                    >
                        <tech.icon className={`w-16 h-16 ${tech.color} mb-3`} />
                        <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}