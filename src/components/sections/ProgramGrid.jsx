import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Users,
    UserCheck,
    Sparkles,
    HandHelping,
    Accessibility,
    Home,
    ArrowUpRight,
    House,
    CircleDollarSign,
    RefreshCcw
} from "lucide-react";

export function ProgramGrid() {
    const programs = [
        {
            id: "tiv",
            title: "Teens in Vogue (TIV)",
            tagline: "DEFINING IDENTITY. DEVELOPING LEADERS.",
            description: "Empowering teenagers to navigate identity and build foundational leadership skills in an annual high-impact conference.",
            icon: <Users className="w-8 h-8" />,
            color: "bg-prog-tiv/10",
            iconColor: "text-prog-tiv",
        },
        {
            id: "gatekeepers",
            title: "The Gatekeepers",
            tagline: "RAISING MEN OF CHARACTER.",
            description: "Mentoring boys into responsible young men driven by integrity, discipline, and purpose through structured character development.",
            icon: <UserCheck className="w-8 h-8" />,
            color: "bg-prog-gatekeepers/10",
            iconColor: "text-prog-gatekeepers",
        },
        {
            id: "liones",
            title: "LIONESS",
            tagline: "EMPOWERING GIRLS TO LEAD.",
            description: "Providing girls with the tools, confidence, and vision to break barriers and step into societal leadership with excellence.",
            icon: <Sparkles className="w-8 h-8" />,
            color: "bg-prog-lioness/10",
            iconColor: "text-prog-lioness",
        },
        {
            id: "lots",
            title: "Love on the Street (LOTS)",
            tagline: "BRINGING RELIEF TO THE COMMUNITY.",
            description: "Our direct-action outreach arm providing essential educational materials, welfare support, and psychosocial encouragement to underserved communities.",
            icon: <HandHelping className="w-8 h-8" />,
            color: "bg-prog-lots/10",
            iconColor: "text-prog-lots",
        },
        {
            id: "accessible",
            title: "Touch the Accessible",
            tagline: "INCLUSION IS A COMMITMENT.",
            description: "Advocating for disability inclusion and providing direct support, emotional empowerment, and practical resources for children living with disabilities.",
            icon: <Accessibility className="w-8 h-8" />,
            color: "bg-prog-accessible/10",
            iconColor: "text-prog-accessible",
        },
        {
            id: "blue-city",
            title: "The Blue City",
            tagline: "SUSTAINABLE HOUSING FOR IMPACT.",
            description: "An ethical estate management model designed to fund our humanitarian work sustainably through affordable, inclusive housing solutions.",
            icon: <Home className="w-8 h-8" />,
            color: "bg-prog-bluecity/10",
            iconColor: "text-prog-bluecity",
        },
    ];

    return (
        <section id="programs" className="py-24 bg-accent/30">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-primary/5 text-primary/60 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
                    >
                        Our 6 Impact Pillars
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl mb-6 text-primary font-display">
                        Strategy Meets <span className="italic">Spirituality.</span>
                    </h2>
                    <p className="text-[#3F3F46] text-lg font-serif">
                        Six core areas of impact, each designed to transform lives and build a more inclusive, empowered society across Nigeria and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${program.color} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 bg-gray-50 ${program.iconColor} rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    {program.icon}
                                </div>

                                <h3 className="text-2xl font-display text-primary mb-2">
                                    {program.title}
                                </h3>
                                <p className={cn("font-bold text-[10px] uppercase tracking-[0.2em] mb-4", program.iconColor)}>
                                    {program.tagline}
                                </p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-serif">
                                    {program.description}
                                </p>

                                <Link to={`/programs/${program.id}`} className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/btn">
                                    Learn More
                                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Blue City Highlight Portal */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
                >
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-32" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-white/10 text-white/80 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                                Our Social Enterprise Arm
                            </div>
                            <h3 className="text-white text-4xl md:text-5xl mb-8 font-display leading-tight">
                                The Blue City: <span className="text-white/40 italic">Funding the Mission.</span>
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed mb-10 font-serif max-w-2xl">
                                The Blue City is more than a housing project — it is an ethical engine for social change.
                                By developing sustainable, affordable residential estates and reinvesting proceeds into
                                our programs, The Blue City ensures Blue Ribbon Foundation remains self-sustaining and
                                impactful for generations to come.
                            </p>
                             <Link to="/programs/blue-city" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/20 transition-all transform hover:scale-105">
                                Explore the Model
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>

                        {/* Right Side Visual Card: How It Works */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-3xl relative"
                        >
                            <h4 className="text-primary font-display text-2xl mb-8">
                                How The Blue City Works
                            </h4>

                            <div className="space-y-8">
                                 <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-prog-bluecity/10 rounded-xl flex items-center justify-center text-prog-bluecity shrink-0">
                                        <House size={24} />
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Step 1 — Build</p>
                                        <p className="text-gray-500 text-sm font-serif">
                                            Ethical, affordable housing estates developed for vulnerable families and youth.
                                        </p>
                                    </div>
                                </div>

                                 <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-prog-bluecity/10 rounded-xl flex items-center justify-center text-prog-bluecity shrink-0">
                                        <CircleDollarSign size={24} />
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Step 2 — Generate</p>
                                        <p className="text-gray-500 text-sm font-serif">
                                            Estate management creates sustainable income streams for the Foundation.
                                        </p>
                                    </div>
                                </div>

                                 <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-prog-bluecity/10 rounded-xl flex items-center justify-center text-prog-bluecity shrink-0">
                                        <RefreshCcw size={24} />
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Step 3 — Reinvest</p>
                                        <p className="text-gray-500 text-sm font-serif">
                                            100% of proceeds fund Blue Ribbon's humanitarian and youth programs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                             <div className="mt-10 pt-8 border-t border-gray-50 flex justify-center">
                                <span className="inline-block px-4 py-2 border border-primary/10 text-primary/40 rounded-full font-bold text-[9px] uppercase tracking-[0.2em]">
                                    A Social Enterprise Model
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
