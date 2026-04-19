import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";

export function MissionSnapshot() {
    const cards = [
        {
            title: "Our Mission",
            description: "To restore hope and unlock the potential of vulnerable children and teens through leadership, empowerment, and community-driven impact.",
            icon: <Target size={32} className="text-[#D4A017]" />,
            bgClass: "bg-white",
            titleClass: "text-[#1A3A6B]",
            descClass: "text-gray-500",
            iconBgClass: "bg-[#FDF6EC]",
        },
        {
            title: "Our Vision",
            description: "A future where every child leads with purpose, and communities are transformed through the intersection of strategy and faith.",
            icon: <Eye size={32} className="text-[#D4A017]" />,
            bgClass: "bg-white",
            titleClass: "text-[#B5840D]",
            descClass: "text-gray-500",
            iconBgClass: "bg-[#FDF6EC]",
        },
        {
            title: "Our Values",
            description: "Faith with excellence. Dignity and inclusion. Accountability and transparency. Empowerment over dependency. Innovation and sustainability.",
            icon: <Shield size={32} className="text-[#D4A017]" />,
            bgClass: "bg-white",
            titleClass: "text-[#1A3A6B]",
            descClass: "text-gray-500",
            iconBgClass: "bg-[#FDF6EC]",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" id="about">
            <div className="container-custom">
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5840D]"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl text-[#1A3A6B] font-display"
                    >
                        Heart for the <span className="italic">People.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className={`${card.bgClass} p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center group transition-all`}
                        >
                            <div className={`w-20 h-20 ${card.iconBgClass} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                {card.icon}
                            </div>
                            <h3 className={`text-2xl font-display font-bold mb-6 ${card.titleClass}`}>
                                {card.title}
                            </h3>
                            <p className={`leading-relaxed font-serif text-sm md:text-base ${card.descClass}`}>
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
