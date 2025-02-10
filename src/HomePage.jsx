import Navbar from "./Components/Navbar"
import Bienvenida from "./Components/Bienvenida"
import Icons from "./Components/Icons"
import Proyecto from "./Components/Proyecto"
import CodeSvg from "./assets/CodeSvg";
import { useTheme } from "./context/ThemeContext";
import Experiencia from "./Components/Experiencia"
import GmailSvg from "./assets/GmailSvg";
import GithubSvg from "./assets/GithubSvg";
import LinkedinSvg from "./assets/LinkedinSvg";
import FastApiSvg from "./assets/FastApiSvg";
import imgProyecto1 from "./imagenes/SnakeMeta.jpg";
import imgProyecto2 from "./imagenes/HololensApp.png";
import FlutterSvg from "./assets/flutterSvg";
import PostgresSvg from "./assets/PostgresSvg";
import UnityLogo from "./assets/UnitySvg";

import CsharpSvg from "./assets/CsharpSvg";
import Mrtk3Svg from "./assets/Mrtk3Svg";
import SobreMi from "./Components/SobreMi"
import DjangoSvg from "./assets/DjangoSvg";
import DockerSvg from "./assets/DockerSvg";
import imgProyecto3 from "./imagenes/DjangoAdmin.png";

export default function HomePage() {
    const { darkMode } = useTheme();
    
    return (
        <>
            <Navbar/>
            <main className="container mx-auto sm:x-4 pt-24 pb-12">
                <div className={`max-w-4xl mx-auto ${
                    darkMode 
                        ? 'bg-gray-900/30' 
                        : 'bg-white/60'
                } rounded-xl backdrop-blur-sm shadow-lg ${
                    darkMode 
                        ? 'border-gray-900 sm:border' 
                        : 'border-gray-200 sm:border'
                } sm:px-4`}>
                    <Bienvenida/>
                    
                    <section id="experiencia" className="px-2 sm:px-4 py-8 sm:py-12">
                        <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white/80' : 'text-black/80'} mb-6`}>
                            Experiencia
                        </h2>
                        <Experiencia />
                    </section>

                    <section id="proyectos" className="px-2 sm:px-4 py-8 sm:py-12">
                        <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white/80' : 'text-black/80'} flex items-center gap-4 mb-6`}>
                            <CodeSvg className="w-10 h-10" />
                            Proyectos
                        </h2>
                        <Proyecto 
                            titulo="Snake Meta - Panel Administrativo" 
                            component1={DjangoSvg} 
                            compName1="Django"
                            component2={PostgresSvg} 
                            compName2="PostgreSQL"
                            component3={DockerSvg}
                            compName3="Docker"
                            descripcion="Panel administrativo desarrollado con Django para la gestión de datos de serpientes. Sistema robusto para importación/exportación de datos en formatos CSV y XLSX, con autenticación y autorización integrada."
                            frontendLink="https://github.com/JohanM-1/Django-Admin-SM"
                            imgsrc={imgProyecto3}
                            etapas={[
                                {
                                    titulo: "Backend con Django",
                                    descripcion: "Sistema administrativo completo desarrollado con Django y PostgreSQL.",
                                    tecnologias: [
                                        "Django Admin Interface",
                                        "PostgreSQL Database",
                                        "Docker & Docker Compose",
                                        "CSV/XLSX Import/Export",
                                        "Authentication System",
                                        "Custom Admin Actions"
                                    ]
                                },
                                {
                                    titulo: "Características Implementadas",
                                    descripcion: "Sistema completo de gestión de datos con funcionalidades avanzadas.",
                                    tecnologias: [
                                        "Gestión de datos de serpientes",
                                        "Importación masiva de datos",
                                        "Exportación en múltiples formatos",
                                        "Sistema de logs",
                                        "Interfaz administrativa personalizada",
                                        "Gestión de usuarios y permisos"
                                    ]
                                },
                                {
                                    titulo: "Infraestructura",
                                    descripcion: "Configuración robusta usando Docker y servicios modernos.",
                                    tecnologias: [
                                        "Contenedores Docker",
                                        "PostgreSQL Database",
                                        "Environment Variables",
                                        "Logging System",
                                        "Backup System",
                                        "Development/Production Environments"
                                    ]
                                }
                            ]}
                        />
                        
                        <Proyecto 
                            titulo="Meta Snake - Aplicación de Identificación de Serpientes" 
                            component1={FlutterSvg} 
                            compName1="Flutter"
                            component2={FastApiSvg} 
                            compName2="FastAPI"
                            component3={PostgresSvg}
                            compName3="PostgreSQL"
                            descripcion="Aplicación móvil full-stack para la identificación y gestión de información sobre serpientes. Incluye autenticación, geolocalización y gestión de datos en tiempo real."
                            frontendLink="https://github.com/JuanRojasDev/Snake_Flutter"
                            backendLink="https://github.com/JohanM-1/Back"
                            imgsrc={imgProyecto1}
                            etapas={[
                                {
                                    titulo: "Backend (FastAPI)",

                                    descripcion: "API robusta desarrollada con FastAPI para gestionar la información de serpientes, autenticación de usuarios y datos de geolocalización.",
                                    tecnologias: [
                                        "FastAPI y Uvicorn",
                                        "PostgreSQL y SQLAlchemy async",
                                        "Firebase Authentication",
                                        "JWT y OAuth2",
                                        "CORS Middleware",
                                        "Pydantic"
                                    ]
                                },
                                {
                                    titulo: "Frontend (Flutter)",
                                    descripcion: "Aplicación móvil multiplataforma desarrollada con Flutter, con características avanzadas de gestión de estado y autenticación.",
                                    tecnologias: [
                                        "Flutter Framework",
                                        "Provider (State Management)",
                                        "Dio (HTTP Client)",
                                        "Firebase Auth",
                                        "Google Sign In",
                                        "Flutter Secure Storage"
                                    ]
                                },
                                {
                                    titulo: "Características Principales",
                                    descripcion: "El sistema completo incluye funcionalidades avanzadas para la gestión de información sobre serpientes.",
                                    tecnologias: [
                                        "Autenticación múltiple (Email, Google, Invitado)",
                                        "Geolocalización y tracking",
                                        "Sistema de roles y permisos",
                                        "Gestión de imágenes",
                                        "Modo offline",
                                        "Reportes de usuarios"
                                    ]
                                },
                                {
                                    titulo: "Infraestructura y Seguridad",
                                    descripcion: "Implementación robusta de seguridad y manejo de datos en ambas capas de la aplicación.",
                                    tecnologias: [
                                        "JWT Authentication",
                                        "Secure Storage",
                                        "Firebase Integration",
                                        "Rate Limiting",
                                        "Error Handling",
                                        "Data Encryption"
                                    ]
                                }
                            ]}
                        />
                        
                        <Proyecto 
                            titulo="Realidad Mixta - Cuentos de Caminos" 
                            component1={UnityLogo} 
                            compName1="Unity"
                            component2={CsharpSvg} 
                            compName2="C#"
                            component3={Mrtk3Svg}
                            compName3="MRTK3"
                            descripcion="Aplicación de realidad mixta desarrollada para HoloLens 2 durante mis prácticas en Factoryim. El proyecto integra elementos interactivos, multimedia y modelos 3D para crear una experiencia inmersiva basada en cuentos de caminos."
                            imgsrc={imgProyecto2}
                            videsrc="https://uniminuto0-my.sharepoint.com/personal/johan_monroy-f_uniminuto_edu_co/_layouts/15/embed.aspx?UniqueId=36d4eaee-a8a0-4ba7-910f-5704a55e3274&embed=%7B%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"

                            etapas={[
                                {
                                    titulo: "Desarrollo con Unity y MRTK3",
                                    descripcion: "Implementación de una aplicación de realidad mixta utilizando el Mixed Reality Toolkit 3 de Microsoft.",
                                    tecnologias: [
                                        "Unity 3D Engine",
                                        "Microsoft MRTK3",
                                        "HoloLens 2 SDK",
                                        "Spatial Mapping",
                                        "Gesture Recognition",
                                        "Voice Commands"
                                    ]
                                },
                                {
                                    titulo: "Características Implementadas",
                                    descripcion: "Sistema completo de interacción y presentación de contenido multimedia.",
                                    tecnologias: [
                                        "Manipulación de modelos 3D",
                                        "Reproducción multimedia",
                                        "Interacción gestual",
                                        "Sistema de juego interactivo",
                                        "Integración con el entorno real",
                                        "Experiencia narrativa inmersiva"
                                    ]
                                },
                                {
                                    titulo: "Optimización y Rendimiento",
                                    descripcion: "Ajustes y optimizaciones específicas para el hardware HoloLens 2.",
                                    tecnologias: [
                                        "Optimización de assets",
                                        "Gestión de memoria",
                                        "Rendimiento gráfico",
                                        "Spatial awareness",
                                        "Calibración de interacciones",
                                        "Testing en dispositivo"
                                    ]
                                }
                            ]}
                        />
                    </section>
                    <Icons/>
                    <section id="sobre-mi" className="px-2 sm:px-4 py-8 sm:py-12">
                        <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white/80' : 'text-black/80'} mb-6`}>
                            Sobre Mí
                        </h2>
                        <SobreMi />
                    </section>
                    <section id="contacto" className="px-2 sm:px-4 py-8 sm:py-12">
                        <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white/80' : 'text-black/80'} mb-6`}>
                            Contacto
                        </h2>
                        <div className="space-y-4">
                            <a href="mailto:johan16231@gmail.com" 
                               className={`block p-4 rounded-lg border ${
                                   darkMode 
                                       ? 'border-gray-700 hover:border-blue-500 bg-gray-800/30' 
                                       : 'border-gray-300 hover:border-blue-500 bg-white/80'
                               } backdrop-blur-sm transition-colors shadow-sm hover:shadow-md`}
                            >
                                <div className="flex items-center gap-3">
                                    <GmailSvg className="w-6 h-6 text-red-500" />
                                    <span>johan16231@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://github.com/JohanM-1" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className={`block p-4 rounded-lg border ${
                                   darkMode 
                                       ? 'border-gray-700 hover:border-blue-500 bg-gray-800/30' 
                                       : 'border-gray-300 hover:border-blue-500 bg-white/80'
                               } backdrop-blur-sm transition-colors shadow-sm hover:shadow-md`}
                            >
                                <div className="flex items-center gap-3">
                                    <GithubSvg className="w-6 h-6" />
                                    <span>GitHub</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/johan-monroy/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className={`block p-4 rounded-lg border ${
                                   darkMode 
                                       ? 'border-gray-700 hover:border-blue-500 bg-gray-800/30' 
                                       : 'border-gray-300 hover:border-blue-500 bg-white/80'
                               } backdrop-blur-sm transition-colors shadow-sm hover:shadow-md`}
                            >
                                <div className="flex items-center gap-3">
                                    <LinkedinSvg className="w-6 h-6" />
                                    <span>LinkedIn</span>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
