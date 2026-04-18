import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import {
    Users,
    UserCheck,
    Sparkles,
    HandHelping,
    Accessibility,
    Home,
    Target,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Globe
} from "lucide-react";

const programData = {
    tiv: {
        title: "Teens in Vogue (TIV)",
        tagline: "Defining Identity. Developing Leaders.",
        overview: "Teens in Vogue (TIV) is a specialized initiative focused on the total development of teenagers. In an era of rapid social change and digital influence, TIV provides a safe, structured environment for teens to explore their identities, discover their giftings, and build the character required for future leadership. Our flagship annual conference brings together hundreds of teenagers from diverse backgrounds for a day of transformation, mentorship, and empowerment.",
        icon: <Users size={32} />,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        stats: [
            { label: "Teens Impacted", val: "500+" },
            { label: "Mentors/Volunteers", val: "50+" },
            { label: "Conferences Held", val: "4" },
        ],
        sections: [
            {
                title: "The Identity Gap",
                text: "The teenage years are the most critical period for identity formation. TIV addresses the crisis of identity among Nigerian youth by providing them with biblical and strategic tools to navigate social pressures and discover their unique purpose.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
            },
            {
                title: "Leadership Architecture",
                text: "We believe leadership isn't just about positions; it's about influence. We teach teens to lead themselves first through discipline, emotional intelligence, and values-based decision-making, preparing them for future societal leadership.",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
            },
        ],
        features: ["Annual Empowerment Conference", "Peer Mentorship Circles", "Identity Discovery Workshops", "Leadership Retreats"],
    },
    gatekeepers: {
        title: "The Gatekeepers",
        tagline: "Raising Men of Character.",
        overview: "The Gatekeepers is dedicated to the character architecture of boys and young men. We recognize the unique challenges facing young men in modern society and provide a framework for developing integrity, discipline, and a sense of responsibility. Through mentorship and structured character development, we are raising a generation of men who will lead their families and communities with honor.",
        icon: <UserCheck size={32} />,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        stats: [
            { label: "Boys Mentored", val: "200+" },
            { label: "Life Skills Taught", val: "12+" },
            { label: "Community Hubs", val: "3" },
        ],
        sections: [
            {
                title: "Character First",
                text: "We focus on building a strong internal compass. Through regular mentorship sessions, we address issues of masculinity, responsibility, and the importance of ethical living in a complex world.",
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
            },
            {
                title: "Skill & Discipline",
                text: "Beyond character, we provide young men with practical life skills and the discipline required to excel in their chosen paths, ensuring they become contributors to national development.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
            },
        ],
        features: ["Character Mentorship", "Vocational Guidance", "Sports & Teamwork Drills", "Father-Figure Support"],
    },
    liones: {
        title: "LIONES",
        tagline: "Empowering Girls to Lead.",
        overview: "LIONES is a specialized initiative for girls and young women, designed to break societal glass ceilings through confidence, voice, and vision. We provide a platform where young women can discover their strengths, heal from past traumas, and step into their roles as leaders in governance, industry, and social development.",
        icon: <Sparkles size={32} />,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        stats: [
            { label: "Girls Empowered", val: "350+" },
            { label: "Scholarships Given", val: "15" },
            { label: "Leadership Tracks", val: "5" },
        ],
        sections: [
            {
                title: "Confidence & Voice",
                text: "Many young women in our communities face barriers to self-expression. LIONES provides the emotional and psychological support needed to build unshakeable confidence and an impactful voice.",
                image: "https://images.unsplash.com/photo-1529612631642-706700c0175d?q=80&w=2070&auto=format&fit=crop",
            },
            {
                title: "Vision Mapping",
                text: "We help girls move from daydreams to detailed plans. Through our vision mapping workshops, we equip them with the tools to navigate academic and professional landscapes with excellence.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop",
            },
        ],
        features: ["Voice Mastery Workshops", "Academic Mentorship", "Health & Wellness Education", "Entrepreneurial Training"],
    },
    lots: {
        title: "Love on the Street (LOTS)",
        tagline: "Bringing Relief to the Community.",
        overview: "Love on the Street (LOTS) is our primary outreach arm, focused on providing immediate relief and long-term hope to underserved communities. From delivering educational materials to correctional centers to providing welfare support for families in need, LOTS is the heartbeat of our compassion in action.",
        icon: <HandHelping size={32} />,
        color: "text-rose-600",
        bgColor: "bg-rose-50",
        stats: [
            { label: "Outreaches Held", val: "12+" },
            { label: "Families Supported", val: "1k+" },
            { label: "States Covered", val: "3" },
        ],
        sections: [
            {
                title: "Direct Action",
                text: "We believe compassion must be tangible. LOTS mobilizes volunteers to deliver food, medical supplies, and educational resources directly to those who need them most in rural and urban slums.",
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
            },
            {
                title: "Psychosocial Support",
                text: "Welfare is more than just materials. In correctional centers and IDP camps, we provide the psychological and emotional encouragement needed to restore dignity and hope.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2013&auto=format&fit=crop",
            },
        ],
        features: ["Correctional Center Visits", "Community Welfare Drives", "Emergency Relief Support", "Volunteer Mobilization"],
    },
    accessible: {
        title: "Touch the Accessible",
        tagline: "Inclusion is a Commitment.",
        overview: "Touch the Accessible focuses on advocacy and direct support for children and teens living with disabilities. We believe that inclusion is not an option but a commitment to human dignity. We work to break the stigma surrounding disability in African communities and ensure every child has access to the resources they need to thrive.",
        icon: <Accessibility size={32} />,
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        stats: [
            { label: "Children Supported", val: "100+" },
            { label: "Devices Provided", val: "25+" },
            { label: "Awareness Drives", val: "8" },
        ],
        sections: [
            {
                title: "Breaking Stigma",
                text: "Disability is often misunderstood in many communities. We lead conversations and awareness campaigns to reframe the narrative and build more inclusive schools and neighborhoods.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2098&auto=format&fit=crop",
            },
            {
                title: "Adaptive Resources",
                text: "We provide practical support through adaptive learning tools, medical referrals, and economic empowerment for the caregivers of children with special needs.",
                image: "https://images.unsplash.com/photo-1551029506-0807d4a21f68?q=80&w=2148&auto=format&fit=crop",
            },
        ],
        features: ["Inclusion Advocacy", "Caregiver Support Hubs", "Special Education Support", "Adaptive Tech Grants"],
    },
    "blue-city": {
        title: "The Blue City",
        tagline: "Sustainable Housing. Structured Impact.",
        overview: "The Blue City is the flagship social enterprise arm of the Blue Ribbon Foundation. It operates as a structured estate management model designed to solve two critical challenges: the deficit of inclusive, affordable housing in Africa and the need for sustainable, non-grant-dependent funding for humanitarian work. By developing residential estates with global standards and reinvesting 100% of the proceeds into our 6 Impact Pillars, The Blue City ensures that our mission for children and teens remains self-sustaining for generations.",
        icon: <Home size={32} />,
        color: "text-[#1A3A6B]",
        bgColor: "bg-slate-50",
        stats: [
            { label: "Community Model", val: "Self-Sustaining" },
            { label: "Funding Pipeline", val: "Permanent" },
            { label: "Impact Factor", val: "Multigenerational" },
        ],
        sections: [
            {
                title: "The Estate Management Model",
                text: "Unlike traditional real estate, The Blue City is built on 'Strategy with Spirituality.' We develop modern, secure, and inclusive living spaces for young families and professionals. The management fees and property appreciation directly fuel our programs at Ibara, Lafenwa, and beyond, creating a closed-loop system of compassion and commerce.",
                image: new URL("../assets/images/modern_nigerian_housing_estate_1773416221422.png", import.meta.url).href,
            },
            {
                title: "Ending Grant Dependency",
                text: "Most NGOs struggle with the volatility of external donations. The Blue City changes that architecture. It provides the Foundation with a predictable, scalable income stream, allowing us to plan long-term expansions across Africa with the confidence of a structured financial engine behind us.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            },
        ],
        features: ["Structured Estate Management Model", "Inclusive Architectural Design", "Sustainable Reinvestment Pipeline", "Community-Centric Governance"],
    },
};

export default function ProgramDetail() {
    const { id } = useParams();
    const program = programData[id];

    if (!program) {
        return (
            <div className="py-40 text-center space-y-8">
                <h2 className="text-3xl font-display text-[#1A3A6B]">Program detailing coming soon.</h2>
                <Link to="/programs" className="text-[#D4A017] font-bold flex items-center justify-center gap-2">
                    <ArrowRight size={18} className="rotate-180" />
                    Back to Programs
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <PageHero
                title={program.title}
                subtitle={program.tagline}
                breadcrumb={["Programs", program.title]}
            />

            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <SectionLabel label="Program Overview" />
                            <h2 className="text-4xl font-display text-[#1A3A6B]">Why {program.title} <span className="italic">Matters.</span></h2>
                            <p className="text-gray-500 font-serif text-lg leading-relaxed">
                                {program.overview}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {program.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-[#1A3A6B]/60 font-serif">
                                        <CheckCircle2 size={18} className="text-[#D4A017]" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {program.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-8 rounded-3xl ${i === 0 ? "col-span-2 bg-[#1A3A6B] text-white" : "bg-[#FDF6EC] text-[#1A3A6B] border border-gray-100"}`}
                                >
                                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${i === 0 ? "text-white/70" : "text-[#1A3A6B]/50"}`}>{stat.label}</p>
                                    <h4 className="text-3xl md:text-4xl font-display">{stat.val}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Alternating Sections */}
                    <div className="space-y-32">
                        {program.sections.map((section, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="lg:w-1/2 space-y-6"
                                >
                                    <h3 className="text-3xl font-display text-[#1A3A6B]">{section.title}</h3>
                                    <p className="text-gray-500 font-serif text-lg leading-relaxed">{section.text}</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="lg:w-1/2 aspect-video rounded-[2rem] overflow-hidden shadow-2xl"
                                >
                                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program CTA */}
            <section className="py-24 bg-[#FDF6EC]">
                <div className="container-custom text-center max-w-3xl mx-auto space-y-10">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#D4A017] shadow-xl mx-auto rotate-6">
                        <Globe size={40} />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-display text-[#1A3A6B]">Partner with <span className="italic">{program.title}</span></h2>
                        <p className="text-gray-500 font-serif text-lg leading-relaxed">
                            Join us in raising the next generation of leaders. Whether you're an individual mentor or a corporate sponsor, your partnership makes {program.title} possible.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-[#1A3A6B] text-white px-10 py-4 rounded-full font-bold hover:bg-[#122a4f] transition-all transform hover:scale-105">
                            Inquire about Sponsorship
                        </Link>
                        <Link to="/get-involved" className="border-2 border-[#1A3A6B]/10 text-[#1A3A6B] px-10 py-4 rounded-full font-bold hover:bg-[#1A3A6B] hover:text-white transition-all transform hover:scale-105">
                            Volunteer as a Mentor
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
