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

// Image Imports
import tivConference from "../assets/images/tiv_teens_conference_1776573098996.png";
import tivLeadership from "../assets/images/tiv_teen_leadership_1776573142562.png";
import gatekeepersMentoring from "../assets/images/gatekeepers_boys_mentoring_1776574014038.png";
import gatekeepersCharacter from "../assets/images/gatekeepers_character_building_1776574390636.png";
import teensEmpowermentImg from "../assets/images/nigerian_teens_empowerment_1773416132724.png";
import outreachIbara1 from "../assets/images/outreach_ibara_202_1.jpg";
import communityOutreachImg from "../assets/images/community_impact_outreach_1773416174071.png";

const programData = {
    tiv: {
        title: "Teens in Vogue (TIV)",
        tagline: "Defining Identity. Developing Leaders.",
        overview: "Teens in Vogue (TIV) is a specialized initiative focused on the total development of teenagers. In an era of rapid social change and digital influence, TIV provides a safe, structured environment for teens to explore their identities, discover their giftings, and build the character required for future leadership. Our flagship annual conference brings together hundreds of teenagers from diverse backgrounds for a day of transformation, mentorship, and empowerment.",
        icon: <Users size={32} />,
        color: "text-prog-tiv",
        bgColor: "bg-prog-tiv/10",
        stats: [
            { label: "Teens Impacted", val: "500+" },
            { label: "Mentors/Volunteers", val: "50+" },
            { label: "Conferences Held", val: "4" },
        ],
        sections: [
            {
                title: "The Identity Gap",
                text: "The teenage years are the most critical period for identity formation. TIV addresses the crisis of identity among Nigerian youth by providing them with biblical and strategic tools to navigate social pressures and discover their unique purpose.",
                image: tivConference,
            },
            {
                title: "Leadership Architecture",
                text: "We believe leadership isn't just about positions; it's about influence. We teach teens to lead themselves first through discipline, emotional intelligence, and values-based decision-making, preparing them for future societal leadership.",
                image: tivLeadership,
            },
        ],
        features: ["Annual Empowerment Conference", "Peer Mentorship Circles", "Identity Discovery Workshops", "Leadership Retreats"],
    },
    gatekeepers: {
        title: "The Gatekeepers",
        tagline: "Raising Men of Character.",
        overview: "The Gatekeepers is dedicated to the character architecture of boys and young men. We recognize the unique challenges facing young men in modern society and provide a framework for developing integrity, discipline, and a sense of responsibility. Through mentorship and structured character development, we are raising a generation of men who will lead their families and communities with honor.",
        icon: <UserCheck size={32} />,
        color: "text-prog-gatekeepers",
        bgColor: "bg-prog-gatekeepers/10",
        stats: [
            { label: "Boys Mentored", val: "200+" },
            { label: "Life Skills Taught", val: "12+" },
            { label: "Community Hubs", val: "3" },
        ],
        sections: [
            {
                title: "Character First",
                text: "We focus on building a strong internal compass. Through regular mentorship sessions, we address issues of masculinity, responsibility, and the importance of ethical living in a complex world.",
                image: gatekeepersMentoring,
            },
            {
                title: "Skill & Discipline",
                text: "Beyond character, we provide young men with practical life skills and the discipline required to excel in their chosen paths, ensuring they become contributors to national development.",
                image: gatekeepersCharacter,
            },
        ],
        features: ["Character Mentorship", "Vocational Guidance", "Sports & Teamwork Drills", "Father-Figure Support"],
    },
    liones: {
        title: "LIONESS",
        tagline: "Empowering Girls to Lead.",
        overview: "LIONESS is a specialized initiative for girls and young women, designed to break societal glass ceilings through confidence, voice, and vision. We provide a platform where young women can discover their strengths, heal from past traumas, and step into their roles as leaders in governance, industry, and social development.",
        icon: <Sparkles size={32} />,
        color: "text-prog-lioness",
        bgColor: "bg-prog-lioness/10",
        stats: [
            { label: "Girls Empowered", val: "350+" },
            { label: "Scholarships Given", val: "15" },
            { label: "Leadership Tracks", val: "5" },
        ],
        sections: [
            {
                title: "Confidence & Voice",
                text: "Many young women in our communities face barriers to self-expression. LIONESS provides the emotional and psychological support needed to build unshakeable confidence and an impactful voice.",
                image: teensEmpowermentImg,
            },
            {
                title: "Vision Mapping",
                text: "We help girls move from daydreams to detailed plans. Through our vision mapping workshops, we equip them with the tools to navigate academic and professional landscapes with excellence.",
                image: outreachIbara1,
            },
        ],
        features: ["Voice Mastery Workshops", "Academic Mentorship", "Health & Wellness Education", "Entrepreneurial Training"],
    },
    lots: {
        title: "Love on the Street (LOTS)",
        tagline: "Bringing Relief to the Community.",
        overview: "Love on the Street (LOTS) is our primary outreach arm, focused on providing immediate relief and long-term hope to underserved communities. From delivering educational materials to correctional centers to providing welfare support for families in need, LOTS is the heartbeat of our compassion in action.",
        icon: <HandHelping size={32} />,
        color: "text-prog-lots",
        bgColor: "bg-prog-lots/10",
        stats: [
            { label: "Outreaches Held", val: "12+" },
            { label: "Families Supported", val: "1k+" },
            { label: "States Covered", val: "3" },
        ],
        sections: [
            {
                title: "Direct Action",
                text: "We believe compassion must be tangible. LOTS mobilizes volunteers to deliver food, medical supplies, and educational resources directly to those who need them most in rural and urban slums.",
                image: outreachIbara1,
            },
            {
                title: "Psychosocial Support",
                text: "Welfare is more than just materials. In correctional centers and IDP camps, we provide the psychological and emotional encouragement needed to restore dignity and hope.",
                image: communityOutreachImg,
            },
        ],
        features: ["Correctional Center Visits", "Community Welfare Drives", "Emergency Relief Support", "Volunteer Mobilization"],
    },
    accessible: {
        title: "Touch the Accessible",
        tagline: "Inclusion is a Commitment.",
        overview: "Touch the Accessible focuses on advocacy and direct support for children and teens living with disabilities. We believe that inclusion is not an option but a commitment to human dignity. We work to break the stigma surrounding disability in African communities and ensure every child has access to the resources they need to thrive.",
        icon: <Accessibility size={32} />,
        color: "text-prog-accessible",
        bgColor: "bg-prog-accessible/10",
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
        color: "text-prog-bluecity",
        bgColor: "bg-prog-bluecity/10",
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
                <Link to="/programs" className="text-primary font-bold flex items-center justify-center gap-2">
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
                            <h2 className="text-4xl font-display text-primary">Why {program.title} <span className="italic">Matters.</span></h2>
                            <p className="text-gray-500 font-serif text-lg leading-relaxed">
                                {program.overview}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {program.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-primary/60 font-serif">
                                        <CheckCircle2 size={18} className={program.color} />
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
                                    className={`p-8 rounded-3xl ${i === 0 ? "col-span-2 bg-primary text-white" : "bg-primary/5 text-primary border border-primary/5"}`}
                                >
                                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${i === 0 ? "text-white/70" : "text-primary/40"}`}>{stat.label}</p>
                                    <h4 className="text-3xl md:text-4xl font-display">{stat.val}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Alternating Sections */}
                    <div className="space-y-20">
                        {program.sections.map((section, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="lg:w-1/2 space-y-6"
                                >
                                    <h3 className="text-3xl font-display text-primary">{section.title}</h3>
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
            <section className="py-20 bg-primary text-white">
                <div className="container-custom text-center max-w-3xl mx-auto space-y-10">
                    <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white shadow-xl mx-auto rotate-6">
                        <Globe size={40} />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-display">Partner with <span className="italic font-normal">{program.title}</span></h2>
                        <p className="text-white/70 font-serif text-lg leading-relaxed">
                            Join us in raising the next generation of leaders. Whether you're an individual mentor or a corporate sponsor, your partnership makes {program.title} possible.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-cta text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105">
                            Inquire about Sponsorship
                        </Link>
                        <Link to="/get-involved" className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all transform hover:scale-105">
                            Volunteer as a Mentor
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
