import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function PageHero({ title, subtitle, breadcrumb = [] }) {
    return (
        <section className="relative pt-40 pb-24 bg-[#FDF6EC] overflow-hidden">
            {/* Decorative Ribbon Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A3A6B]/5 skew-x-12 translate-x-20 hidden lg:block" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest text-[#1A3A6B]/50">
                        <Link to="/" className="hover:text-[#D4A017] transition-colors">Home</Link>
                        {breadcrumb.map((item, index) => (
                            <span key={index} className="flex items-center gap-2">
                                <span>/</span>
                                <span className={index === breadcrumb.length - 1 ? "text-[#D4A017]" : ""}>
                                    {item}
                                </span>
                            </span>
                        ))}
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-display text-[#1A3A6B] mb-8 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 font-serif leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
