import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeDark from "../assets/themeDark";
import ThemeLight from "../assets/themeLight";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 ${
            darkMode 
                ? 'bg-gray-900/80 border-gray-700' 
                : 'bg-white/90 border-gray-200 shadow-sm'
        } backdrop-blur-sm border-b`}>
            <div className="container mx-auto">
                <nav className="flex items-center justify-between px-4 py-4">
                    {/* Logo o Nombre */}
                    <div className="font-bold text-xl">
                        Portafolio
                    </div>

                    {/* Enlaces de navegación */}
                    <div className="hidden md:flex items-center gap-8">
                      <button onClick={() => scrollToSection('experiencia')} 
                        className="hover:text-blue-500 transition-colors duration-200 font-medium">
                        Experiencia
                      </button>
                      <button onClick={() => scrollToSection('proyectos')} 
                        className="hover:text-blue-500 transition-colors duration-200 font-medium">
                        Proyectos
                      </button>
                      <button onClick={() => scrollToSection('sobre-mi')} 
                        className="hover:text-blue-500 transition-colors duration-200 font-medium">
                        Sobre mí
                      </button>
                      <button onClick={() => scrollToSection('contacto')} 
                        className="hover:text-blue-500 transition-colors duration-200 font-medium">
                        Contacto
                      </button>
                    </div>

                    {/* Botón de tema */}
                    <button 
                      onClick={toggleDarkMode}
                      className={`p-2 rounded-xl ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors duration-200`}
                      aria-label="Toggle theme"
                    >
                      {darkMode ?  <ThemeLight className="w-6 h-6" /> : <ThemeDark className="w-6 h-6 " />}
                    </button>

                    {/* Menú móvil */}
                    <button 
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                </nav>

                {/* Menú móvil desplegable (puedes agregar lógica para mostrarlo/ocultarlo) */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-4 pb-2`}>
                  <button onClick={() => scrollToSection('experiencia')} 
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    Experiencia
                  </button>
                  <button onClick={() => scrollToSection('proyectos')} 
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    Proyectos
                  </button>
                  <button onClick={() => scrollToSection('sobre-mi')} 
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    Sobre mí
                  </button>
                  <button onClick={() => scrollToSection('contacto')} 
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    Contacto
                  </button>
                </div>
            </div>
        </header>
    )
}