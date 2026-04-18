import { motion } from "framer-motion";

export function SectionLabel({ label, dark = false }) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-[10px] font-bold uppercase tracking-[0.3em] ${dark ? "text-white/60" : "text-[#B5840D]"
                }`}
        >
            {label}
        </motion.span>
    );
}
