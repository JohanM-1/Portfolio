import GithubSvg from "../assets/GithubSvg"
import LinkedinSvg from "../assets/LinkedinSvg"
import GmailSvg from "../assets/GmailSvg"
import person from '../imagenes/PersonaIcon.png'; 
import { useTheme } from "../context/ThemeContext";

export default function Bienvenida(){
    const { darkMode } = useTheme();

    return(
        <div id="bienvenida" className="flex md:flex-row flex-col font-sans pt-20 px-4">
            <section className="text-center md:w-1/3">
                <div className="flex justify-center items-center">
                    <img 
                        className="p-1 w-52 h-52 rounded-full object-cover border-2 border-blue-500 shadow-lg" 
                        src={person} 
                        alt="Imagen de Persona"
                    />
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
                    <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Johan Alexander Monroy Fernandez
                    </h2>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Tecnólogo en Desarrollo de Software
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <a 
                            href="https://github.com/JohanM-1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <GithubSvg className="w-8 h-8" />
                        </a>
                        <a 
                            href="mailto:johan16231@gmail.com"
                            className="hover:scale-110 transition-transform"
                        >
                            <GmailSvg className="w-8 h-8 text-red-500" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/johan-monroy/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <LinkedinSvg className="w-10 h-10"/>
                        </a>
                    </div>
                </div>
            </section>

            <section className="md:w-2/3 md:pl-8">
                <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    ¡Hola! 👋
                </h1>
                
                <div className={`space-y-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <p>
                        Soy un desarrollador de software apasionado por crear soluciones innovadoras, 
                        especializado en Python, SQL y desarrollo móvil. Mi objetivo es diseñar y 
                        construir aplicaciones que resuelvan problemas reales y generen valor para los usuarios.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                            <h3 className="font-semibold mb-2">Desarrollo Backend</h3>
                            <p className="text-sm">Python, FastAPI, SQL, APIs RESTful</p>
                        </div>
                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                            <h3 className="font-semibold mb-2">Desarrollo Frontend</h3>
                            <p className="text-sm">React, Tailwind CSS, Flutter</p>
                        </div>
                    </div>
                    
                    <div className="pt-4">
                        <a 
                            href="dist/Cv Python johan Monroy.pdf" 
                            download="CV_Johan_Monroy.pdf"
                            className={`inline-flex items-center px-4 py-2 rounded-lg ${
                                darkMode 
                                    ? 'bg-blue-600 hover:bg-blue-700' 
                                    : 'bg-blue-500 hover:bg-blue-600'
                            } text-white transition-colors`}
                        >
                            <span>Descargar CV</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}