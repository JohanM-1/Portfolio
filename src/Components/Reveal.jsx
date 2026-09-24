import { motion } from "motion/react";

// Aparición sutil al entrar en pantalla (una sola vez)
export default function Reveal({ as = "div", delay = 0, y = 24, className, children, ...props }) {
    const Component = motion[as];
    return (
        <Component
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
}
