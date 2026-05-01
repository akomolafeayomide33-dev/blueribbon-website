import { motion } from "framer-motion";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import {
    Heart,
    Users,
    Handshake,
    Copy,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Globe
} from "lucide-react";
import { useState } from "react";

export default function GetInvolved() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const options = [
        {
            title: "Donate",
            desc: "Provide the financial resources needed to sustain our programs and scale The Blue City.",
            icon: <Heart size={28} />,
            btnText: "Ways to Give",
            anchor: "#donate",
            color: "bg-cta/10 text-cta",
        },
        {
            title: "Volunteer",
            desc: "Lend your time and skills to our LOTS outreaches or mentorship programs.",
            icon: <Users size={28} />,
            btnText: "Join the Team",
            anchor: "#volunteer",
            color: "bg-primary/5 text-primary/60",
        },
        {
            title: "Partner",
            desc: "Collaborate with us as a corporate sponsor or strategic institutional partner.",
            icon: <Handshake size={28} />,
            btnText: "Let's Talk",
            anchor: "#partner",
            color: "bg-cta/10 text-cta",
        },
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                title="Be the Change You Want to See"
                subtitle="Your support is the engine that drives our mission. Together, we can restore hope to the most vulnerable."
                breadcrumb={["Get Involved"]}
            />

            {/* Options Grid */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {options.map((opt, i) => (
                            <motion.div
                                key={opt.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[3rem] border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className={`w-14 h-14 ${opt.color} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                    {opt.icon}
                                </div>
                                <h3 className="text-2xl font-display text-[#1A3A6B] mb-4">{opt.title}</h3>
                                <p className="text-gray-500 font-serif leading-relaxed mb-8">{opt.desc}</p>
                                 <a
                                    href={opt.anchor}
                                    className={cn(
                                        "inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors",
                                        opt.title === "Volunteer" ? "text-primary hover:opacity-60" : "text-cta hover:opacity-80"
                                    )}
                                >
                                    {opt.btnText}
                                    <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Section */}
            <section id="donate" className="py-24 bg-[#FDF6EC]/50 border-y border-gray-100">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                 <SectionLabel label="Financial Support" />
                                <h2 className="text-4xl md:text-5xl text-primary font-display">
                                    Invest in <span className="italic font-normal">Humanity.</span>
                                </h2>
                                <p className="text-gray-500 font-serif text-lg leading-relaxed">
                                    Blue Ribbon Foundation is committed to the highest standards of financial stewardship.
                                    100% of your donations go directly to program implementation and community support.
                                </p>
                                 <div className="space-y-4">
                                    {[
                                        "Transparent financial reporting",
                                        "Direct program impact",
                                        "Sustainable growth focus"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-primary/40 font-serif">
                                            <CheckCircle2 size={18} className="text-primary/20" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#1A3A6B] p-10 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

                                <h3 className="text-2xl font-display mb-8 text-white">Bank Transfer Details</h3>

                                <div className="space-y-6">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Bank Name</p>
                                        <p className="text-lg font-bold">Zenith Bank PLC</p>
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors group relative">
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Account Number</p>
                                        <div className="flex justify-between items-center">
                                            <p className="text-2xl font-display font-bold tracking-wider">1222455858</p>
                                             <button
                                                onClick={() => copyToClipboard("1222455858")}
                                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cta transition-all"
                                            >
                                                <Copy size={16} />
                                            </button>
                                        </div>
                                         {copied && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -top-8 right-0 bg-cta text-white text-[10px] font-bold px-3 py-1 rounded-full"
                                            >
                                                COPIED
                                            </motion.div>
                                        )}
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Account Name</p>
                                        <p className="text-lg font-bold">Blue Ribbon Impact Foundation</p>
                                    </div>
                                </div>

                                <p className="mt-8 text-white/40 text-xs font-serif italic text-center leading-relaxed">
                                    Please include your name or organization in the description for our records.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accountability Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 flex flex-col items-center text-center space-y-10 relative">
                         <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-xl rotate-3">
                            <ShieldCheck size={40} />
                        </div>
                        <div className="space-y-6 max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-display text-primary">Why Your Support <span className="italic font-normal">Matters.</span></h2>
                            <p className="text-gray-500 font-serif text-lg leading-relaxed">
                                We don't just spend; we invest. Every naira or dollar contributed is carefully positioned to create self-sustaining impact.
                                From mental health support for incarcerated youth to building ethical estates,
                                your contribution transforms from a one-time gift into a lifetime of change.
                            </p>
                        </div>
                         <div className="flex flex-wrap justify-center gap-12 pt-4">
                            <div className="flex flex-col items-center">
                                <Globe size={24} className="text-primary/20 mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Global Standards</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <CheckCircle2 size={24} className="text-primary/20 mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Direct Impact</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Users size={24} className="text-primary/20 mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Community Focused</span>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-1/4 h-full bg-white/40 -skew-x-12 translate-x-[-50%] pointer-events-none" />
                    </div>
                </div>
            </section>
        </div>
    );
}
