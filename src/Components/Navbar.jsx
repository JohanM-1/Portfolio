import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeDark from "../assets/themeDark";
import ThemeLight from "../assets/themeLight";
import bienvenidaData from "../data/bienvenida.json";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('sobre-mi');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.3 });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
            setActiveSection(sectionId);
        }
    };

    const navItems = [
        { id: 'sobre-mi', label: 'Sobre mí' },
        { id: 'experiencia', label: 'Experiencia' },
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'contacto', label: 'Contacto' }
    ];

    return (
        <header className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24
            ${darkMode 
                ? 'bg-gray-900/95 lg:bg-transparent border-b border-gray-700 lg:border-none' 
                : 'bg-white/95 lg:bg-transparent border-b border-gray-200 lg:border-none shadow-sm lg:shadow-none'
            } backdrop-blur-sm lg:backdrop-blur-none z-50 fixed top-0 w-full lg:static`}>
            
            <div className="h-full lg:flex lg:flex-col lg:justify-between px-6 py-4 lg:px-0">
                
                {/* Header Info (Desktop) */}
                <div className="hidden lg:block">
                    <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        <a href="/">{bienvenidaData.hero.greeting.replace('.', '')}</a>
                    </h1>
                    <h2 className={`mt-3 text-lg font-medium tracking-tight sm:text-xl ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        Desarrollador Full Stack
                    </h2>
                    <div 
                        className={`mt-4 max-w-xs leading-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    >
                       Soy un desarrollador de software, especializado en crear experiencias digitales.
                    </div>

                    {/* Navigation Desktop */}
                    <nav className="nav hidden lg:block" aria-label="In-page jump links">
                        <ul className="mt-16 w-max space-y-2">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button 
                                        onClick={() => scrollToSection(item.id)}
                                        className="group flex items-center py-3 focus:outline-none"
                                    >
                                        <span className={`nav-indicator mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                                            activeSection === item.id 
                                                ? `w-16 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}` 
                                                : `w-8 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'} group-hover:w-16 ${darkMode ? 'group-hover:bg-blue-400' : 'group-hover:bg-blue-600'}`
                                        }`}></span>
                                        <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                                            activeSection === item.id 
                                                ? (darkMode ? 'text-gray-100' : 'text-gray-900')
                                                : (darkMode ? 'text-gray-500 group-hover:text-gray-200' : 'text-gray-500 group-hover:text-gray-900')
                                        }`}>
                                            {item.label}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile Header Bar */}
                <div className="flex lg:hidden items-center justify-between h-full">
                    <span className={`font-bold text-lg ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        JA
                    </span>

                    <div className="flex items-center gap-4">
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

                        <button 
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </button>
                    </div>
                </div>

                {/* Footer / Socials / Theme Toggle (Desktop) */}
                <div className="hidden lg:flex flex-col gap-6 mt-auto">
                    <SocialLinks />
                    
                    <button 
                        onClick={toggleDarkMode}
                        className={`flex items-center gap-3 w-fit px-4 py-2 rounded-full border transition-all duration-300 ${
                        darkMode 
                            ? 'border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-400' 
                            : 'border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600'
                        }`}
                        aria-label="Toggle theme"
                    >
                        {darkMode ?  <ThemeLight className="w-5 h-5" /> : <ThemeDark className="w-5 h-5 " />}
                        <span className="text-xs font-bold uppercase tracking-widest">
                            {darkMode ? 'Light' : 'Dark'}
                        </span>
                    </button>
                </div>

                {/* Menú móvil desplegable */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden px-4 pb-4 bg-inherit border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                  {navItems.map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => scrollToSection(item.id)} 
                        className={`block w-full text-left py-3 px-4 rounded-lg mt-2 transition-colors ${
                            activeSection === item.id
                                ? (darkMode ? 'bg-gray-800 text-blue-400' : 'bg-gray-100 text-blue-600')
                                : (darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600')
                        }`}
                      >
                        {item.label}
                      </button>
                  ))}
                </div>
            </div>
        </header>
    )
}