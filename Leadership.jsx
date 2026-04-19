import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import presidentImg from "../../assets/images/president_sandra.png";
import vpImg from "../../assets/images/Vice President.png";

export function Leadership() {
    const leaders = [
        {
            name: "Sandra Emmanuel - Akomolafe",
            role: "Founder & President",
            bio: "Provides vision stewardship, strategic oversight, and institutional direction. The Foundation exists to fulfill a divine mandate — and every program, partnership, and initiative is built on that foundation.",
            image: presidentImg,
            accent: "bg-[#FDF6EC]",
            border: "border-[#D4A017]/10"
        },
        {
            name: "Ayomide Akomolafe",
            role: "Vice President",
            bio: "A marketing strategist driving impact and sustainable growth across communities and businesses.",
            image: vpImg,
            accent: "bg-white",
            border: "border-gray-100"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5840D]"
                    >
                        Our Leadership
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl text-[#1A3A6B] font-display"
                    >
                        Visionaries of <span className="italic">Impact.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={`${leader.accent} p-8 md:p-12 rounded-[3.5rem] border ${leader.border} shadow-sm group hover:shadow-xl transition-all duration-500`}
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div className="relative shrink-0">
                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:scale-105">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#D4A017] rounded-2xl flex items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                        <Quote size={20} fill="currentColor" />
                                    </div>
                                </div>
                                
                                <div className="text-center md:text-left space-y-4 pt-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-display text-[#1A3A6B] mb-1 leading-tight">
                                            {leader.name}
                                        </h3>
                                        <p className="text-[#B5840D] font-bold text-[10px] uppercase tracking-[0.2em]">
                                            {leader.role}
                                        </p>
                                    </div>
                                    <p className="text-gray-600 font-serif leading-relaxed italic text-sm md:text-base">
                                        "{leader.bio}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
