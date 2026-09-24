import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import bienvenidaData from "../data/bienvenida.json";

export default function Bienvenida(){
    const { darkMode } = useTheme();

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return(
        <section id="sobre-mi" className="flex flex-col justify-center min-h-[80vh] font-sans px-4 lg:pt-0 pt-20">
            <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
                <motion.p variants={item} className={`font-mono text-blue-500 text-base ml-1`}>
                    {bienvenidaData.hero.greeting}
                </motion.p>
                
                <motion.h1 variants={item} className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {bienvenidaData.hero.name}
                </motion.h1>
                
                {bienvenidaData.hero.subtitle && (
                    <motion.h2 variants={item} className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {bienvenidaData.hero.subtitle}
                    </motion.h2>
                )}
                
                <motion.p variants={item} className={`text-base leading-relaxed mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                   dangerouslySetInnerHTML={{ __html: bienvenidaData.hero.description }}
                />

                <motion.div variants={item} className={`text-base leading-relaxed space-y-4 mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {bienvenidaData.about.map((paragraph, index) => (
                         <p 
                             key={index} 
                             dangerouslySetInnerHTML={{ __html: paragraph }}
                         />
                    ))}
                </motion.div>

                <motion.div variants={item} className="mt-8">
                    <ul className={`grid grid-cols-2 gap-2 font-mono text-sm max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {bienvenidaData.recentTechnologies.map((tech, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="text-blue-500">▹</span> {tech}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                
                <motion.div variants={item} className="pt-12">
                    <a 
                        href={bienvenidaData.cv.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block font-mono text-sm transition-colors duration-300 relative group ${
                            darkMode 
                                ? 'text-blue-500' 
                                : 'text-blue-600'
                        }`}
                    >
                        {bienvenidaData.cv.text}
                        <span className={`absolute -bottom-1 left-0 w-full h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
                        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}