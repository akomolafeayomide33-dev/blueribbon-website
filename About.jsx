import { motion } from "framer-motion";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import { Target, Eye, Shield, Users, BarChart3, Globe, ShieldCheck, Cpu } from "lucide-react";
import founderImg from "../assets/images/president_sandra.png";
import vpImg from "../assets/images/Vice President.png";
import patronImg from "../assets/images/patron_gorgetter.png";
import communityImg from "../assets/images/community_impact_outreach_1773416174071.jpg";
import teensImg from "../assets/images/nigerian_teens_empowerment_1773416132724.png";
import { Governance } from "../components/sections/Governance";


export default function About() {
    const values = [
        {
            icon: <Target size={24} />,
            title: "Faith with Excellence",
            description: "Grounded in Christian principles while operating with global best practices.",
        },
        {
            icon: <Users size={24} />,
            title: "Dignity & Inclusion",
            description: "Every child and family deserves respect, access, and opportunity.",
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Accountability & Transparency",
            description: "Strong governance and responsible stewardship of resources.",
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Empowerment over Dependency",
            description: "Long-term transformation over temporary relief.",
        },
        {
            icon: <Cpu size={24} />,
            title: "Innovation and Sustainability",
            description: "Solutions designed for modern social and technological realities.",
        },
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                title="About Blue Ribbon Foundation"
                subtitle="A faith-inspired, impact-driven organisation committed to restoring hope, dignity, and opportunity to vulnerable children, teens, and underserved communities."
                breadcrumb={["About"]}
            />

            {/* Our Story Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <SectionLabel label="Our Story" />
                            <h2 className="text-4xl md:text-5xl text-[#1A3A6B] font-display">
                                Born from a Calling. <span className="italic">Built for Impact.</span>
                            </h2>
                            <div className="space-y-6 text-gray-500 font-serif leading-relaxed text-lg">
                                <p>
                                    Blue Ribbon Foundation was founded in December 2020, rooted in the belief that every life can be restored, empowered, and positioned for meaningful impact. Inspired by Isaiah 61:1–2 — a scripture that speaks of binding the brokenhearted, proclaiming freedom to captives, and bringing beauty from ashes — our founder established the Foundation with a clear mandate: serve the most vulnerable with excellence.
                                </p>
                                <p>
                                    From our first outreach at Ibara Correctional Center in March 2021, to delivering school supplies in the Lafenwa community on Christmas Eve that same year, every step has been driven by one conviction: compassion must be paired with strategy if it is to create lasting change.
                                </p>
                                <p>
                                    Today, Blue Ribbon Foundation operates through six integrated program pillars, a growing governance structure, and a long-term vision to expand across Africa.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src={communityImg}
                                    alt="Nigerian Community Impact"
                                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4A017] rounded-full blur-3xl opacity-20 -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Detailed */}
            <section className="py-24 bg-[#FDF6EC]/50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1A3A6B] text-white p-12 md:p-16 rounded-[3rem] shadow-xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Target size={40} className="text-[#D4A017]" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-display mb-6">Our Mission</h3>
                                    <p className="text-xl text-white/80 font-serif leading-relaxed">
                                        To restore hope, unlock potential, and build sustainable futures for distressed, underserved, abused, psychologically challenged, and marginalized children and teens through strategic empowerment programs, community outreach, leadership development, and inclusive social initiatives.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white border-2 border-[#D4A017]/20 p-12 md:p-16 rounded-[3rem] shadow-sm relative overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                <div className="w-20 h-20 bg-[#FDF6EC] rounded-2xl flex items-center justify-center shrink-0">
                                    <Eye size={40} className="text-[#D4A017]" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-display text-[#1A3A6B] mb-6">Our Vision</h3>
                                    <p className="text-xl text-gray-500 font-serif leading-relaxed">
                                        To raise resilient, purpose-driven generations transformed through access to education, leadership systems, mentorship, inclusive housing solutions, and faith-based values.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Values Section */}
                        <div className="pt-16">
                            <div className="text-center mb-16">
                                <SectionLabel label="Our Values" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {values.map((v, i) => (
                                    <motion.div
                                        key={v.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-12 h-12 bg-[#FDF6EC] rounded-xl flex items-center justify-center text-[#D4A017] mb-6">
                                            {v.icon}
                                        </div>
                                        <h4 className="text-xl font-display text-[#1A3A6B] mb-4">{v.title}</h4>
                                        <p className="text-gray-500 font-serif text-sm leading-relaxed">{v.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16 space-y-4">
                        <SectionLabel label="Our Leadership" />
                        <h2 className="text-4xl md:text-5xl text-[#1A3A6B] font-display">
                            Guided by Vision. <span className="italic">Governed with Excellence.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Founder Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FDF6EC] p-8 md:p-10 rounded-[3rem] border border-[#D4A017]/10 flex flex-col"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl shrink-0 mb-6">
                                    <img
                                        src={founderImg}
                                        alt="Sandra Emmanuel - Akomolafe - Founder"
                                        className="w-full h-full object-cover object-[center_20%] scale-110"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-display text-[#1A3A6B] mb-1">Sandra Emmanuel - Akomolafe</h3>
                                <p className="text-[#B5840D] font-bold text-[10px] uppercase tracking-widest mb-6">Founder & President</p>
                                <p className="text-gray-600 font-serif leading-relaxed italic text-sm">
                                    "Provides vision stewardship, strategic oversight, and institutional direction. The Foundation exists to fulfill a divine mandate — and every program, partnership, and initiative is built on that foundation."
                                </p>
                            </div>
                        </motion.div>

                        {/* Vice President Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 md:p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FDF6EC] shadow-xl shrink-0 mb-6">
                                    <img
                                        src={vpImg}
                                        alt="Ayomide Akomolafe - Vice President"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-display text-[#1A3A6B] mb-1">Ayomide Akomolafe</h3>
                                <p className="text-[#B5840D] font-bold text-[10px] uppercase tracking-widest mb-6">Vice President</p>
                                <p className="text-gray-600 font-serif leading-relaxed italic text-sm">
                                    "A marketing strategist driving impact and sustainable growth across communities and businesses."
                                </p>
                            </div>
                        </motion.div>

                        {/* Patron Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FDF6EC] shadow-xl shrink-0 mb-6">
                                    <img
                                        src={patronImg}
                                        alt="Dr. Gorgetter Godwin, PhD"
                                        className="w-full h-full object-cover object-[center_15%] scale-125"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-display text-[#1A3A6B] mb-1">Dr. Gorgetter Godwin, PhD</h3>
                                <p className="text-[#B5840D] font-bold text-[10px] uppercase tracking-widest mb-6">Patron — Bermuda</p>
                                <p className="text-gray-600 font-serif leading-relaxed text-sm italic">
                                    "A distinguished leadership scholar providing advisory guidance, strategic credibility, and institutional support from Bermuda."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-8 bg-gray-50 rounded-[2rem] border border-dashed border-gray-300 text-center"
                    >
                        <p className="text-[#3F3F46] font-serif italic">
                            "Our Board of Trustees is currently being formalized. We are recruiting distinguished leaders in governance, finance, law, and social development to ensure world-class oversight."
                        </p>
                    </motion.div>
                </div>
            </section>

            <Governance />

            {/* Governance Structure */}
            <section className="py-24 bg-[#FDF6EC]/30">
                <div className="container-custom">
                    <div className="text-center mb-16 space-y-4">
                        <SectionLabel label="Our Structure" />
                        <h2 className="text-4xl md:text-5xl text-[#1A3A6B] font-display">
                            Built for <span className="italic">Accountability.</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { label: "Programs & Impact", icon: <Target size={20} /> },
                                { label: "M&E", icon: <BarChart3 size={20} /> },
                                { label: "Partnerships & Global Relations", icon: <Globe size={20} /> },
                                { label: "Finance & Compliance", icon: <ShieldCheck size={20} /> },
                                { label: "Media & Technology", icon: <Cpu size={20} /> },
                                { label: "Blue City Estate Management", icon: <Users size={20} /> },
                            ].map((unit, i) => (
                                <motion.div
                                    key={unit.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:translate-y-[-4px] transition-transform"
                                >
                                    <div className="w-10 h-10 bg-[#1A3A6B]/5 rounded-lg flex items-center justify-center text-[#1A3A6B]">
                                        {unit.icon}
                                    </div>
                                    <span className="font-bold text-xs uppercase tracking-wider text-[#1A3A6B]">
                                        {unit.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-px h-12 bg-gray-200" />
                            <div className="px-8 py-4 bg-[#1A3A6B] text-white rounded-xl font-display text-lg shadow-lg">
                                Founder & President
                            </div>
                            <div className="flex gap-16 mt-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-8 bg-gray-200" />
                                    <div className="px-4 py-2 border border-[#1A3A6B] text-[#1A3A6B] rounded-lg text-xs font-bold tracking-widest uppercase">Board of Trustees</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-8 bg-gray-200" />
                                    <div className="px-4 py-2 border border-[#1A3A6B] text-[#1A3A6B] rounded-lg text-xs font-bold tracking-widest uppercase">Patron (Advisory)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
