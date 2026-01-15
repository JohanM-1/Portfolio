import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

function ThemeBackground({ darkMode }) {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const lastPosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        // Inicializar tamaño
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Clase Particle para manejar cada punto de humo
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 20 + 10; // Tamaño inicial
                this.maxSize = this.size * 4; // Tamaño final (expansión)
                this.life = 100; // Vida de la partícula (0-100)
                this.decay = Math.random() * 0.5 + 0.5; // Velocidad de desvanecimiento
                // Velocidad aleatoria para dispersión suave
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
                
                // Expansión suave
                if (this.size < this.maxSize) {
                    this.size += 0.2;
                }
            }

            draw(context, isDark) {
                context.beginPath();
                // Gradiente radial para simular humo suave
                const gradient = context.createRadialGradient(
                    this.x, this.y, 0, 
                    this.x, this.y, this.size
                );
                
                // Color base azul
                const r = isDark ? 59 : 37;
                const g = isDark ? 130 : 99;
                const b = isDark ? 246 : 235;
                
                // Opacidad basada en la vida
                const alpha = (this.life / 100) * (isDark ? 0.15 : 0.25);
                
                gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
                gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                
                context.fillStyle = gradient;
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();
            }
        }

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const dist = Math.hypot(clientX - lastPosRef.current.x, clientY - lastPosRef.current.y);

            // Generar partículas si se mueve el mouse
            if (dist > 5) { // Umbral bajo para continuidad
                // Añadir varias partículas para densidad
                const particlesCount = 2; 
                for(let i = 0; i < particlesCount; i++) {
                    particlesRef.current.push(new Particle(clientX, clientY));
                }
                lastPosRef.current = { x: clientX, y: clientY };
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Usar composite operation para mejor mezcla de "humo"
            ctx.globalCompositeOperation = 'screen'; 

            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i];
                p.update();
                p.draw(ctx, darkMode);
                
                if (p.life <= 0) {
                    particlesRef.current.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', handleMouseMove);
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]); // Reiniciar si cambia el modo (para actualizar colores)

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Gradiente principal */}
            <div className={`absolute inset-0 ${
                darkMode 
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
                    : 'bg-gradient-to-br from-blue-100 via-white to-indigo-100'
            }`}></div>
            
            {/* Canvas para el efecto de humo optimizado */}
            <canvas 
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

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
