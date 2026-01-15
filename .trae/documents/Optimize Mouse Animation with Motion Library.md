I will upgrade your existing mouse-following spotlight effect to use the `motion` library (formerly Framer Motion) as requested. This will significantly improve performance by avoiding React re-renders on every mouse movement.

**Plan:**

1. **Install** **`motion`**: Add the library to your project dependencies.
2. **Refactor** **`HomePage.jsx`**:

   * Replace the `useState` mouse tracking with `useMotionValue` and `useMotionTemplate`.

   * This ensures the gradient updates directly in the DOM, keeping your app fast and smooth (60fps+).

   * The visual effect (the radial gradient spotlight) will remain the same but will be much more performant.
3. **Clean up**: Remove the old state-based implementation.

I will use the standard `motion` package as requested (no paid features).

## 4. Cursor con trailing / follow effect

&#x20;

🔹 Un rastro suave o delay elegante\
🔹 Puede ser un blur, sombra o partículas

⚠️ Usar **muy sutil**, nada gamer\
✔️ Perfecto para landing o hero section

***

## 5. Cursor + highlight inteligente

🔹 El cursor ilumina la zona donde pasa\
🔹 Resalta cards, títulos o secciones

Ejemplo:

* Spotlight circular suave
* Gradiente que sigue el mouse

💡 Ideal para secciones de proyectos
