import { motion } from "framer-motion";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import {
    Users,
    UserCheck,
    Sparkles,
    HandHelping,
    Accessibility,
    Home,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
    const programs = [
        {
            id: "tiv",
            title: "Teens in Vogue (TIV)",
            tagline: "Defining Identity. Developing Leaders.",
            description: "A flagship annual conference and mentorship program designed to help teenagers navigate the complexities of identity, purpose, and leadership in the 21st century.",
            icon: <Users size={32} />,
            bgColor: "bg-prog-tiv/10",
            iconColor: "text-prog-tiv",
            focus: ["Identity discovery", "Leadership training", "Emotional intelligence", "Peer mentorship"],
            metric: "500+ Teens empowered annually",
        },
        {
            id: "gatekeepers",
            title: "The Gatekeepers",
            tagline: "Raising Men of Character.",
            description: "Dedicated to the character development of boys and young men, focusing on integrity, discipline, and the responsibility of leadership within families and society.",
            icon: <UserCheck size={32} />,
            bgColor: "bg-prog-gatekeepers/10",
            iconColor: "text-prog-gatekeepers",
            focus: ["Character architecture", "Masculinity & responsibility", "Skill acquisition", "Values-based living"],
            metric: "100+ Boys mentored monthly",
        },
        {
            id: "liones",
            title: "LIONESS",
            tagline: "Empowering Girls to Lead.",
            description: "A specialized initiative for girls and young women, providing them with the confidence, voice, and vision to break societal glass ceilings with excellence.",
            icon: <Sparkles size={32} />,
            bgColor: "bg-prog-lioness/10",
            iconColor: "text-prog-lioness",
            focus: ["Confidence building", "Academic excellence", "Vision mapping", "Social advocacy"],
            metric: "Building the next 1,000 female leaders",
        },
        {
            id: "lots",
            title: "Love on the Street (LOTS)",
            tagline: "Bringing Relief to the Community.",
            description: "Our direct-action outreach arm that provides welfare support, educational materials, and psychosocial encouragement to the most underserved communities.",
            icon: <HandHelping size={32} />,
            bgColor: "bg-prog-lots/10",
            iconColor: "text-prog-lots",
            focus: ["Educational support", "Food & welfare", "Health advocacy", "Emergency relief"],
            metric: "10+ Underserved communities reached",
        },
        {
            id: "accessible",
            title: "Touch the Accessible",
            tagline: "Inclusion is a Commitment.",
            description: "Focused on disability inclusion, this program provides direct support, advocacy, and empowerment for children and teens living with disabilities.",
            icon: <Accessibility size={32} />,
            bgColor: "bg-prog-accessible/10",
            iconColor: "text-prog-accessible",
            focus: ["Special needs advocacy", "Adaptive learning tools", "Economic empowerment", "Inclusive policy awareness"],
            metric: "Nigeria's leading voice for inclusion",
        },
        {
            id: "blue-city",
            title: "The Blue City",
            tagline: "Sustainable Housing for Impact.",
            description: "The social enterprise wing of Blue Ribbon, developing ethical, affordable housing estates to fund the foundation’s humanitarian mission long-term.",
            icon: <Home size={32} />,
            bgColor: "bg-prog-bluecity/10",
            iconColor: "text-prog-bluecity",
            focus: ["Affordable housing", "Reinvestment model", "Sustainable urbanism", "Job creation"],
            metric: "A 100% Reinvestment social model",
        },
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                title="Raising a Generation with Purpose"
                subtitle="Through our six impact pillars, we tackle the root causes of vulnerability and provide the tools for long-term transformation."
                breadcrumb={["Programs"]}
            />

            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                        <SectionLabel label="Our Strategy" />
                        <h2 className="text-4xl md:text-5xl text-primary font-display">
                            A Holistic Approach to <span className="italic font-normal">Transformation.</span>
                        </h2>
                        <p className="text-gray-500 font-serif text-lg leading-relaxed">
                            At Blue Ribbon Foundation, we don't believe in quick fixes. Our programs are designed to intersect —
                            addressing the physical, emotional, and social needs of the communities we serve while building
                            a sustainable financial engine to keep the work moving.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-500"
                            >
                                <div className="p-[80px] flex-grow">
                                    <div className={`w-16 h-16 ${program.bgColor} ${program.iconColor} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                        {program.icon}
                                    </div>

                                    <h3 className="text-3xl font-display text-primary mb-2">{program.title}</h3>
                                    <p className={cn("font-bold text-xs uppercase tracking-[0.2em] mb-6", program.iconColor)}>{program.tagline}</p>
                                    <p className="text-gray-500 font-serif leading-relaxed mb-8">
                                        {program.description}
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Key Focus Areas:</p>
                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {program.focus.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-primary/60 font-serif">
                                                    <CheckCircle2 size={14} className={program.iconColor} />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-6">
                                        <div className="flex items-center gap-3">
                                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center opacity-60", program.bgColor, program.iconColor)}>
                                                <Sparkles size={18} />
                                            </div>
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">{program.metric}</span>
                                        </div>

                                         <Link
                                            to={`/programs/${program.id}`}
                                            className="flex items-center gap-2 text-primary font-bold text-sm hover:opacity-60 transition-colors group/link"
                                        >
                                            View Details
                                            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
                <div className="container-custom relative z-10 text-center text-white space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display text-white">Ready to Make an <span className="italic font-normal">Impact?</span></h2>
                    <p className="text-white/70 font-serif text-lg max-w-2xl mx-auto">
                        Whether you want to volunteer for LOTS or partner with The Blue City, there’s a place for you in our mission.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link to="/contact" className="bg-cta text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105">
                            Become a Partner
                        </Link>
                        <Link to="/get-involved" className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all transform hover:scale-105">
                            Volunteer Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
