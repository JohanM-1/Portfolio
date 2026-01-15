import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./Components/Navbar"
import Bienvenida from "./Components/Bienvenida"
import Icons from "./Components/Icons"
import Proyecto from "./Components/Proyecto"
import { useTheme } from "./context/ThemeContext";
import Experiencia from "./Components/Experiencia"
import proyectosData from "./data/proyectos.json";
import { assets } from "./data/assetsMap";
import SocialLinks from "./Components/SocialLinks";

export default function HomePage() {
    const { darkMode } = useTheme();
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        // Solo mostrar cursor personalizado en dispositivos que soportan hover (mouse)
        // y no en móviles/tablets para evitar problemas de UX y compatibilidad
        const isDesktop = window.matchMedia("(pointer: fine)").matches;
        setShowCursor(isDesktop);
    }, []);

    const CodeIcon = assets.icons.Code;

    return (
        <div className="relative min-h-screen">
            {showCursor && (
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    hasBlendMode={true}
                    outerStyle={{
                        border: `3px solid ${darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}`,
                        zIndex: 10000
                    }}
                    innerStyle={{
                        backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                        zIndex: 10000
                    }}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link',
                        '.cursor-pointer'
                    ]}
                />
            )}

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
                                <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-12 flex items-center gap-4`}>
                                    Experiencia
                                    <div className={`h-px bg-gray-700 flex-grow max-w-xs ml-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                </h2>
                                <Experiencia />
                            </section>

                            {/* Sección Proyectos */}
                            <section id="proyectos" className="px-4 py-24">
                                <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-12 flex items-center gap-4`}>
                                    Proyectos
                                    <div className={`h-px bg-gray-700 flex-grow max-w-xs ml-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                </h2>
                                <div className="space-y-12">
                                    {proyectosData.map((proj, index) => (
                                        <Proyecto
                                            key={index}
                                            titulo={proj.title}
                                            descripcion={proj.description}
                                            imgsrc={assets.images[proj.imageKey]}
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
                                        />
                                    ))}
                                </div>
                            </section>
                            
                            {/* Sección Contacto (Footer) */}
                            <section id="contacto" className="px-4 py-24 text-center max-w-2xl mx-auto">
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
                                    className={`inline-block px-8 py-4 rounded border font-mono text-sm transition-all duration-300 ${
                                        darkMode 
                                            ? 'border-blue-500 text-blue-500 hover:bg-blue-500/10' 
                                            : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    Saludar
                                </a>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}