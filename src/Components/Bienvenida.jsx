import { useTheme } from "../context/ThemeContext";
import bienvenidaData from "../data/bienvenida.json";

export default function Bienvenida(){
    const { darkMode } = useTheme();

    return(
        <section id="sobre-mi" className="flex flex-col justify-center min-h-[80vh] font-sans px-4 lg:pt-0 pt-20">
            <div className="space-y-6">
                <p className={`font-mono text-blue-500 text-base ml-1`}>
                    {bienvenidaData.hero.greeting}
                </p>
                
                <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {bienvenidaData.hero.name}
                </h1>
                
                {bienvenidaData.hero.subtitle && (
                    <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {bienvenidaData.hero.subtitle}
                    </h2>
                )}
                
                <p className={`text-base leading-relaxed mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                   dangerouslySetInnerHTML={{ __html: bienvenidaData.hero.description }}
                />

                <div className={`text-base leading-relaxed space-y-4 mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {bienvenidaData.about.map((paragraph, index) => (
                         <p 
                             key={index} 
                             dangerouslySetInnerHTML={{ __html: paragraph }}
                         />
                    ))}
                </div>

                <div className="mt-8">
                    <ul className={`grid grid-cols-2 gap-2 font-mono text-sm max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {bienvenidaData.recentTechnologies.map((tech, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-blue-500">▹</span> {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="pt-12">
                    <a 
                        href={bienvenidaData.cv.url}
                        target="_blank"
                        className={`inline-block font-mono text-sm transition-all duration-300 relative group ${
                            darkMode 
                                ? 'text-blue-500' 
                                : 'text-blue-600'
                        }`}
                    >
                        {bienvenidaData.cv.text}
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}