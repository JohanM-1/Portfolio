
import { useTheme } from "../context/ThemeContext";
import PropTypes from 'prop-types';

export default function TecUsed({ component: Component = null, Name = "Ejemplo" }){
    const { darkMode } = useTheme();
    
    if (Component != null) {
        return(
            <ul className="flex flex-row mb-2 gap-x-2">
            <li>
                <span className={`inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition border focus-visible:ring-yellow-500/80 text-md group max-w-fit rounded-xl focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 ${
                    darkMode 
                        ? 'text-white bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500' 
                        : 'text-gray-900 bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
                }`}>
                    <Component className="w-5 h-5" />
                    {Name}
                </span>
            </li>
            </ul>
        )
    }
}

TecUsed.propTypes = {
    component: PropTypes.elementType,
    Name: PropTypes.string
};