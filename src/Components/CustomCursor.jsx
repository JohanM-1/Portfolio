import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useTheme } from "../context/ThemeContext";

// Elementos sobre los que el anillo se expande
const INTERACTIVE = 'a, button, [role="button"], label[for], select, summary, .link, .cursor-pointer';
// Campos de texto: se deja el cursor nativo (I-beam) y se oculta el personalizado
const TEXT_FIELD = 'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]';

// Solo en dispositivos con mouse real y sin preferencia de movimiento reducido
const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(() =>
        typeof window !== "undefined" && typeof window.matchMedia === "function"
            ? window.matchMedia(query).matches
            : false
    );

    useEffect(() => {
        if (typeof window.matchMedia !== "function") return;
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        onChange();
        // Safari < 14 solo soporta addListener
        if (mql.addEventListener) mql.addEventListener("change", onChange);
        else mql.addListener(onChange);
        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", onChange);
            else mql.removeListener(onChange);
        };
    }, [query]);

    return matches;
}

export default function CustomCursor() {
    const enabled = useMediaQuery(QUERY);
    return enabled ? <Cursor /> : null;
}

function Cursor() {
    const { darkMode } = useTheme();
    const [visible, setVisible] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [pressed, setPressed] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    // El punto sigue casi pegado; el anillo con un retraso suave y elástico
    const dotX = useSpring(x, { stiffness: 1500, damping: 60, mass: 0.2 });
    const dotY = useSpring(y, { stiffness: 1500, damping: 60, mass: 0.2 });
    const ringX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.6 });
    const ringY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.6 });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.add("has-custom-cursor");

        let lastX = -100;
        let lastY = -100;
        let firstMove = true;
        let scrollFrame = 0;

        const updateTarget = (target) => {
            const el = target instanceof Element ? target : null;
            const overText = !!el?.closest(TEXT_FIELD);
            setHovering(!overText && !!el?.closest(INTERACTIVE));
            setVisible(!overText);
        };

        const onMove = (e) => {
            // Ignorar toques/lápiz en dispositivos híbridos
            if (e.pointerType && e.pointerType !== "mouse") {
                setVisible(false);
                return;
            }
            lastX = e.clientX;
            lastY = e.clientY;
            if (firstMove) {
                // Evita que el anillo "vuele" desde la esquina al entrar
                firstMove = false;
                dotX.jump(lastX); dotY.jump(lastY);
                ringX.jump(lastX); ringY.jump(lastY);
            }
            x.set(lastX);
            y.set(lastY);
            updateTarget(e.target);
        };

        const onDown = (e) => { if (!e.pointerType || e.pointerType === "mouse") setPressed(true); };
        const onUp = () => setPressed(false);

        const onLeave = (e) => {
            // relatedTarget null = el puntero salió de la ventana o entró a un iframe
            if (!e.relatedTarget) {
                setVisible(false);
                setPressed(false);
                firstMove = true;
            }
        };
        const onBlur = () => { setVisible(false); setPressed(false); firstMove = true; };

        // Al hacer scroll con la rueda cambia el elemento bajo el cursor sin mover el mouse
        const onScroll = () => {
            if (firstMove || scrollFrame) return;
            scrollFrame = requestAnimationFrame(() => {
                scrollFrame = 0;
                updateTarget(document.elementFromPoint(lastX, lastY));
            });
        };

        const opts = { passive: true };
        window.addEventListener("pointermove", onMove, opts);
        window.addEventListener("pointerdown", onDown, opts);
        window.addEventListener("pointerup", onUp, opts);
        window.addEventListener("pointercancel", onUp, opts);
        document.addEventListener("pointerout", onLeave, opts);
        window.addEventListener("blur", onBlur);
        window.addEventListener("scroll", onScroll, { passive: true, capture: true });

        return () => {
            root.classList.remove("has-custom-cursor");
            cancelAnimationFrame(scrollFrame);
            window.removeEventListener("pointermove", onMove, opts);
            window.removeEventListener("pointerdown", onDown, opts);
            window.removeEventListener("pointerup", onUp, opts);
            window.removeEventListener("pointercancel", onUp, opts);
            document.removeEventListener("pointerout", onLeave, opts);
            window.removeEventListener("blur", onBlur);
            window.removeEventListener("scroll", onScroll, { passive: true, capture: true });
        };
    }, [x, y, dotX, dotY, ringX, ringY]);

    const base = darkMode ? "255, 255, 255" : "17, 24, 39";
    const accent = darkMode ? "96, 165, 250" : "37, 99, 235"; // blue-400 / blue-600

    const ringScale = pressed ? (hovering ? 1.35 : 0.75) : hovering ? 1.6 : 1;
    const dotScale = hovering ? 0 : pressed ? 0.6 : 1;

    return (
        <div aria-hidden="true" className="custom-cursor">
            <motion.div
                className="custom-cursor__ring"
                style={{ x: ringX, y: ringY }}
                initial={false}
                animate={{
                    opacity: visible ? 1 : 0,
                    scale: visible ? ringScale : 0.4,
                    borderColor: hovering ? `rgba(${accent}, 0.9)` : `rgba(${base}, 0.45)`,
                    backgroundColor: hovering ? `rgba(${accent}, 0.12)` : `rgba(${accent}, 0)`,
                }}
                transition={{
                    opacity: { duration: 0.2 },
                    scale: { type: "spring", stiffness: 400, damping: 25 },
                    default: { duration: 0.25, ease: "easeOut" },
                }}
            />
            <motion.div
                className="custom-cursor__dot"
                style={{ x: dotX, y: dotY }}
                initial={false}
                animate={{
                    opacity: visible ? 1 : 0,
                    scale: visible ? dotScale : 0,
                    backgroundColor: `rgba(${base}, 0.9)`,
                }}
                transition={{
                    opacity: { duration: 0.15 },
                    scale: { type: "spring", stiffness: 500, damping: 30 },
                    default: { duration: 0.25 },
                }}
            />
        </div>
    );
}
