import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

function ThemeBackground({ darkMode }) {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Gradiente principal */}
            <div className={`absolute inset-0 ${
                darkMode 
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
                    : 'bg-gradient-to-br from-blue-100 via-white to-indigo-100'
            }`}></div>
            
            {/* Círculos decorativos con blur */}
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${
                darkMode 
                    ? 'bg-blue-500/5' 
                    : 'bg-blue-300/40'
            } blur-3xl`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${
                darkMode 
                    ? 'bg-purple-500/5' 
                    : 'bg-purple-300/40'
            } blur-3xl`}></div>

            {/* Grid pattern más visible en modo claro */}
            <div className={`absolute inset-0 ${
                darkMode 
                    ? 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]' 
                    : 'bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]'
            } bg-[size:50px_50px]`}></div>
        </div>
    );
}

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={`min-h-screen ${darkMode ? 'text-white' : 'text-black'}`}>
                <ThemeBackground darkMode={darkMode} />
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext); 