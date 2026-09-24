import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import CustomCursor from "./Components/CustomCursor";
import Reveal from "./Components/Reveal";
import Navbar from "./Components/Navbar"
import Bienvenida from "./Components/Bienvenida"
import Proyecto from "./Components/Proyecto"
import { useTheme } from "./context/ThemeContext";
import Experiencia from "./Components/Experiencia"
import proyectosPortfolio from "./data/proyectos_portfolio.json";
import { assets } from "./data/assetsMap";
import SocialLinks from "./Components/SocialLinks";
import TechSelector from "./Components/TechSelector";

export default function HomePage() {
    const { darkMode } = useTheme();
    const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState("flutter");
    
    // Get projects for selected technology
    const techData = proyectosPortfolio.tecnologias.find(t => t.id === tecnologiaSeleccionada);
    const proyectosFiltrados = techData?.proyectos || [];


    return (
        <div className="relative min-h-screen">
            <CustomCursor />

            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Navbar />

                    <main className="pt-24 lg:w-[52%] lg:py-24 relative z-10">
                        <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            
                            {/* Sección Hero / Sobre Mí */}
                            <div className="lg:pt-0 pt-0">
                                <Bienvenida />
                            </div>

                            {/* Sección Experiencia */}
                            <section id="experiencia" className="px-4 py-24 min-h-[50vh]">
                                <Reveal as="h2" className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-12 flex items-center gap-4`}>
                                    Experiencia
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        className={`h-px flex-grow max-w-xs ml-4 origin-left ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                                    ></motion.div>
                                </Reveal>
                                <Experiencia />
                            </section>

                            {/* Sección Proyectos */}
                            <section id="proyectos" className="px-4 py-24">
                                <Reveal as="h2" className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-12 flex items-center gap-4`}>
                                    Proyectos
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        className={`h-px flex-grow max-w-xs ml-4 origin-left ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                                    ></motion.div>
                                </Reveal>
                                
                                {/* Tech Selector */}
                                <TechSelector 
                                    tecnologias={proyectosPortfolio.tecnologias}
                                    tecnologiaSeleccionada={tecnologiaSeleccionada}
                                    setTecnologiaSeleccionada={setTecnologiaSeleccionada}
                                />
                                
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.ul
                                        key={tecnologiaSeleccionada}
                                        className="group/list"
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        variants={{
                                            hidden: {},
                                            show: { transition: { staggerChildren: 0.07 } },
                                            exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" } },
                                        }}
                                    >
                                        {proyectosFiltrados.map((proj) => (
                                            <motion.li
                                                key={proj.title}
                                                variants={{
                                                    hidden: { opacity: 0, y: 16 },
                                                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                                                }}
                                            >
                                                <Proyecto
                                                    titulo={proj.title}
                                                    descripcion={proj.description}
                                                    imgsrc={assets.images[proj.imageKey] || assets.images.Default}
                                                    videsrc={proj.videoSrc}
                                                    frontendLink={proj.links?.frontend}
                                                    backendLink={proj.links?.backend}
                                                    fullStackLink={proj.links?.fullStack}
                                                    previewLink={proj.links?.preview}
                                                    techIcons={proj.techIcons.map(tech => ({
                                                        Component: assets.icons[tech.key],
                                                        name: tech.name
                                                    }))}
                                                    etapas={proj.stages}
                                                    habilidades={proj.habilidades || []}
                                                    valor={proj.valor || ""}
                                                />
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </AnimatePresence>
                            </section>
                            
                            {/* Sección Contacto (Footer) */}
                            <section id="contacto" className="px-4 py-24 text-center max-w-2xl mx-auto">
                                <Reveal>
                                <p className="font-mono text-blue-500 mb-4">¿Qué sigue?</p>
                                <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
                                    Contacto
                                </h2>
                                <p className={`text-lg mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible para responderte!
                                </p>
                                
                                <div className="flex justify-center gap-8 mb-12 lg:hidden">
                                    <SocialLinks />
                                </div>

                                <a 
                                    href="mailto:johan16231@gmail.com"
                                    className={`inline-block px-8 py-4 rounded border font-mono text-sm transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                                        darkMode 
                                            ? 'border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:shadow-[0_6px_20px_-6px_rgba(59,130,246,0.5)]' 
                                            : 'border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-[0_6px_20px_-6px_rgba(37,99,235,0.45)]'
                                    }`}
                                >
                                    Saludar
                                </a>
                                </Reveal>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}