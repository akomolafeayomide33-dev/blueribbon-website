import { motion } from "framer-motion";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import {
    BarChart3,
    Calendar,
    Globe,
    Download,
    CheckCircle2,
    CalendarDays,
    Users2,
    Clock,
    ImageIcon
} from "lucide-react";
import { useState } from "react";

// Ibara Outreach Images
import ibara1 from "../assets/images/outreach_ibara_202_1.jpg";
import ibara2 from "../assets/images/outreach_ibara_202_2.jpg";
import ibara3 from "../assets/images/outreach_ibara_202_3.jpg";
import ibara4 from "../assets/images/outreach_ibara_202_4.jpg";
import ibara5 from "../assets/images/outreach_ibara_202_5.jpg";
import ibara6 from "../assets/images/outreach_ibara_202_6.jpg";

// LOTS 1.0 Images
import lots1_1 from "../assets/images/outreach_lots1_2021_1.jpg";
import lots1_2 from "../assets/images/outreach_lots1_2021_2.jpg";
import lots1_3 from "../assets/images/outreach_lots1_2021_3.jpg";
import lots1_4 from "../assets/images/outreach_lots1_2021_4.jpg";
import lots1_5 from "../assets/images/outreach_lots1_2021_5.jpg";

export default function Impact() {
    const outreaches = [
        {
            date: "March 2021",
            title: "Ibara Correctional Center Outreach",
            description: "Our historic first major outreach. We provided psychological support and essential welfare materials to juveniles. (Value: $900; 35 mattresses and toiletries donated).",
            images: [ibara1, ibara2, ibara3, ibara4, ibara5, ibara6],
            status: "completed",
        },
        {
            date: "Dec 24, 2021",
            title: "LOTS 1.0 — Lafenwa Outreach",
            description: "Bringing relief to the streets on Christmas Eve. We distributed educational and empowerment materials to underserved children. (Value: $700).",
            images: [lots1_1, lots1_2, lots1_3, lots1_4, lots1_5],
            status: "completed",
        },
        {
            date: "Coming Soon",
            title: "Annual TIV Conferences",
            description: "High-impact identity and leadership summits empowering hundreds of Nigerian teenagers annually.",
            images: [],
            status: "upcoming",
        },
        {
            date: "Coming Soon",
            title: "LOTS 2.0 Christmas Outreach",
            description: "Major feeding and clothing drive reaching vulnerable families across three local government areas.",
            images: [],
            status: "upcoming",
        },
    ];

    const sdgs = [
        { id: 1, title: "No Poverty", desc: "Economic empowerment through Blue City reinvestment." },
        { id: 2, title: "Zero Hunger", desc: "Direct food relief via LOTS outreaches." },
        { id: 4, title: "Quality Education", desc: "TIV conferences and educational materials support." },
        { id: 10, title: "Reduced Inequalities", desc: "Touch the Accessible inclusion advocacy." },
        { id: 11, title: "Sustainable Cities", desc: "Ethical estate development for inclusive living." },
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                title="Transforming Lives, One Story at a Time"
                subtitle="Measuring success not just in numbers, but in the dignity restored to every individual we serve."
                breadcrumb={["Impact"]}
            />

            {/* Stats Summary Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Lives Touched", val: "100+", icon: <Users2 size={24} /> },
                            { label: "Outreaches", val: "10+", icon: <CalendarDays size={24} /> },
                            { label: "Invested", val: "$1.6k+", icon: <BarChart3 size={24} /> },
                            { label: "Volunteers", val: "25+", icon: <Users2 size={24} /> },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-[#FDF6EC] border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#D4A017] mx-auto mb-6 shadow-sm">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-display text-[#1A3A6B] mb-2">{stat.val}</h3>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A3A6B]/50">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outreach Showcase */}
            <section className="py-24 bg-[#F8F8F6]">
                <div className="container-custom">
                    <div className="text-center space-y-6 mb-20">
                        <SectionLabel label="Our History" />
                        <h2 className="text-4xl md:text-5xl text-[#1A3A6B] font-display">
                            A Record of <span className="italic">Service.</span>
                        </h2>
                    </div>

                    <div className="space-y-32">
                        {outreaches.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Outreach Header */}
                                <div className={`flex flex-col lg:flex-row gap-12 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                                    {/* Text Content */}
                                    <div className="lg:w-2/5 space-y-6">
                                        <div className="flex items-center gap-3">
                                            {item.status === "upcoming" ? (
                                                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1A3A6B]/10 text-[#1A3A6B] rounded-full font-bold text-[10px] uppercase tracking-[0.15em]">
                                                    <Clock size={12} />
                                                    {item.date}
                                                </span>
                                            ) : (
                                                <span className="text-[#D4A017] font-bold text-xs uppercase tracking-widest">
                                                    {item.date}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-3xl font-display text-[#1A3A6B]">{item.title}</h3>
                                        <p className="text-gray-500 font-serif text-base leading-relaxed">{item.description}</p>

                                        {item.status === "upcoming" && (
                                            <div className="bg-white p-6 rounded-2xl border border-dashed border-[#D4A017]/30 mt-4">
                                                <p className="text-[#1A3A6B]/60 font-serif text-sm italic">
                                                    This initiative is currently in the planning phase. Stay tuned for updates as we prepare to launch.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="lg:w-3/5">
                                        {item.images.length > 0 ? (
                                            <ImageGallery images={item.images} title={item.title} />
                                        ) : (
                                            <div className="aspect-[16/10] bg-white rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4">
                                                <div className="w-16 h-16 bg-[#FDF6EC] rounded-2xl flex items-center justify-center">
                                                    <ImageIcon size={28} className="text-[#D4A017]/40" />
                                                </div>
                                                <p className="text-[#1A3A6B]/30 font-bold text-xs uppercase tracking-widest">Coming Soon</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SDG Alignment */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <SectionLabel label="Global Goals" />
                            <h2 className="text-4xl md:text-5xl text-[#1A3A6B] font-display">
                                Aligned with the <span className="italic">World's Agenda.</span>
                            </h2>
                            <p className="text-gray-500 font-serif text-lg leading-relaxed">
                                Our work isn't just local; it contributes directly to the United Nations Sustainable Development Goals (SDGs),
                                ensuring we are part of a global movement for a more equitable and sustainable future.
                            </p>
                            <div className="space-y-4 pt-4">
                                {sdgs.map((sdg) => (
                                    <div key={sdg.id} className="flex gap-4 items-start">
                                        <CheckCircle2 size={20} className="text-[#D4A017] shrink-0 mt-1" />
                                        <div>
                                            <p className="text-[#1A3A6B] font-bold text-sm uppercase tracking-wide">Goal {sdg.id}: {sdg.title}</p>
                                            <p className="text-gray-500 text-sm font-serif">{sdg.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square bg-[#FDF6EC] rounded-[3rem] p-12 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 4, 10, 11, 17].map((num) => (
                                        <div key={num} className="w-24 h-24 bg-[#1A3A6B] text-white flex flex-col items-center justify-center p-2 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
                                            <span className="text-xs font-bold uppercase tracking-tighter leading-none mb-1">Sustainable Development</span>
                                            <span className="text-2xl font-bold">Goal {num}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4A017]/5 rounded-full blur-[100px] -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports Placeholder */}
            <section className="py-24 bg-[#FDF6EC]/50 border-t border-gray-100">
                <div className="container-custom text-center space-y-8">
                    <BarChart3 size={48} className="text-[#1A3A6B] mx-auto opacity-20" />
                    <div className="space-y-4">
                        <h3 className="text-3xl font-display text-[#1A3A6B]">Transparency & Reports</h3>
                        <p className="text-gray-500 font-serif max-w-xl mx-auto">
                            We publish our annual impact and financial reports to ensure our partners and sponsors can track the stewardship of their investments.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full text-[#1A3A6B] font-bold text-sm opacity-50 cursor-not-allowed">
                            <Download size={18} />
                            2024 Impact Report (Coming Soon)
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* ───── Image Gallery Component ───── */
function ImageGallery({ images, title }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border-[6px] border-white"
            >
                <img
                    src={images[activeIndex]}
                    alt={`${title} - Photo ${activeIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                            idx === activeIndex
                                ? "border-[#D4A017] shadow-md scale-105"
                                : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                        <img
                            src={img}
                            alt={`${title} thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
