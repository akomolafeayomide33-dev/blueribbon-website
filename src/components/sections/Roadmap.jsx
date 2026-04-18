import { motion } from "framer-motion";

export function Roadmap() {
    const milestones = [
        {
            period: "2026",
            phase: "SHORT-TERM",
            title: "Foundation & Launch",
            tasks: [
                "Legal registration & board formalization",
                "Launch of structured disability inclusion program",
                "Implementation of world-class governance models",
            ],
            type: "SHORT-TERM",
            badgeStyle: "bg-[#D4A017] text-white",
        },
        {
            period: "2027–2028",
            phase: "MID-TERM",
            title: "Expansion & Pilot",
            tasks: [
                "Multi-state program expansion across Nigeria",
                "Pilot housing project launch under The Blue City",
                "Global partnership and sponsorship formalization",
            ],
            type: "MID-TERM",
            badgeStyle: "border border-gray-300 text-gray-500",
        },
        {
            period: "2029–2030",
            phase: "LONG-TERM",
            title: "Pan-African Scaling",
            tasks: [
                "Scaling housing network into a sustainable national system",
                "Full expansion of operations across Africa",
                "Global impact benchmarking and digital youth platform launch",
            ],
            type: "LONG-TERM",
            badgeStyle: "border border-gray-300 text-gray-500",
        },
    ];

    return (
        <section className="py-24 bg-[#F8F8F6] overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl text-[#1A3A6B] font-display"
                    >
                        Strategic Roadmap
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 font-serif max-w-2xl mx-auto"
                    >
                        Our vision is long-term. We are committed to a structured growth
                        plan that ensures sustainable impact from local roots to global reach.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-[#D4A017]/30 hidden lg:block" />

                    <div className="space-y-16 lg:space-y-24">
                        {milestones.map((milestone, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex flex-col lg:flex-row items-center justify-center group">
                                    {/* Connector Dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4A017] z-10 hidden lg:block border-[3px] border-white shadow-sm ring-4 ring-[#D4A017]/10" />

                                    {/* Content Container */}
                                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-16 order-1 lg:order-none">
                                        {isLeft ? (
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                className="bg-white p-10 rounded-[2rem] shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100 max-w-[480px] w-full"
                                            >
                                                <div className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-6 ${milestone.badgeStyle}`}>
                                                    {milestone.phase}
                                                </div>
                                                <h3 className="text-2xl font-display text-[#1A3A6B] mb-6">
                                                    {milestone.period}: {milestone.title}
                                                </h3>
                                                <ul className="space-y-4 text-gray-500 font-serif text-sm md:text-base">
                                                    {milestone.tasks.map((task, i) => (
                                                        <li key={i} className="flex items-start gap-4">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0 mt-2" />
                                                            <span>{task}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ) : (
                                            <div className="hidden lg:block w-full" />
                                        )}
                                    </div>

                                    {/* Mirror Content Container */}
                                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-16 order-2 lg:order-none mt-8 lg:mt-0">
                                        {!isLeft ? (
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                className="bg-white p-10 rounded-[2rem] shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100 max-w-[480px] w-full"
                                            >
                                                <div className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-6 ${milestone.badgeStyle}`}>
                                                    {milestone.phase}
                                                </div>
                                                <h3 className="text-2xl font-display text-[#1A3A6B] mb-6">
                                                    {milestone.period}: {milestone.title}
                                                </h3>
                                                <ul className="space-y-4 text-gray-500 font-serif text-sm md:text-base">
                                                    {milestone.tasks.map((task, i) => (
                                                        <li key={i} className="flex items-start gap-4">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0 mt-2" />
                                                            <span>{task}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ) : (
                                            <div className="hidden lg:block w-full" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
