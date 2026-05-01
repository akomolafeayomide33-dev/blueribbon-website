import { motion } from "framer-motion";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    ChevronDown,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            q: "How can I volunteer for LOTS outreaches?",
            a: "You can sign up via our Get Involved page or send an email to volunteering@blueribbonfoundation.org. We hold regular orientation sessions for new volunteers.",
        },
        {
            q: "Where is Blue Ribbon Foundation located?",
            a: "Our primary operations are focused in Ogun State and Lagos, Nigeria. We are currently formalizing our physical administrative headquarters as part of our 2026 roadmap.",
        },
        {
            q: "How does The Blue City fund the foundation?",
            a: "The Blue City is a social enterprise arm. 100% of the proceeds from estate management and development are reinvested into our humanitarian programs, ensuring long-term sustainability.",
        },
        {
            q: "Is the foundation faith-based?",
            a: "Yes, we are faith-inspired and driven by Christian values of compassion, restoration, and excellence. However, our programs serve everyone regardless of their religious background.",
        },
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                title="We'd Love to Hear from You"
                subtitle="Have questions about our programs, partnerships, or how to support our mission? Reach out to us today."
                breadcrumb={["Contact"]}
            />

            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <SectionLabel label="Contact Info" />
                                <h2 className="text-4xl font-display text-primary">Get in <span className="italic font-normal">Touch.</span></h2>
                                <p className="text-gray-500 font-serif leading-relaxed">
                                    Our team is ready to respond to your inquiries and explore how we can work together.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary/40 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[#1A3A6B] font-bold text-xs uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-gray-500 font-serif">info@blueribbonfoundation.org</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary/40 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[#1A3A6B] font-bold text-xs uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-gray-500 font-serif">+234 (0) 803 723 3583</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary/40 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Visit Us</p>
                                        <p className="text-gray-500 font-serif">Ogun State, Nigeria<br />(Global Operations Hub)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Follow Our Journey</p>
                                <div className="flex gap-4">
                                    {[
                                        { Icon: Facebook, label: "Facebook" },
                                        { Icon: Twitter, label: "Twitter" },
                                        { Icon: Instagram, label: "Instagram" },
                                        { Icon: Linkedin, label: "LinkedIn" }
                                    ].map(({ Icon, label }, i) => (
                                         <a 
                                            key={i} 
                                            href="#" 
                                            aria-label={label}
                                            className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary/5 p-8 md:p-12 rounded-[3rem] border border-primary/5 shadow-sm"
                        >
                            <form 
                                action="https://formspree.io/f/loftybrands@gmail.com"
                                method="POST"
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                                         <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-8 py-4 bg-white rounded-2xl border border-primary/5 focus:border-primary/20 focus:ring-4 focus:ring-primary/5 outline-none transition-all font-serif"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                                         <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full px-8 py-4 bg-white rounded-2xl border border-primary/5 focus:border-primary/20 focus:ring-4 focus:ring-primary/5 outline-none transition-all font-serif"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                                     <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="How can we help?"
                                        className="w-full px-8 py-4 bg-white rounded-2xl border border-primary/5 focus:border-primary/20 focus:ring-4 focus:ring-primary/5 outline-none transition-all font-serif"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Message</label>
                                     <textarea
                                        rows={6}
                                        name="message"
                                        required
                                        placeholder="Tell us more about your inquiry..."
                                        className="w-full px-8 py-6 bg-white rounded-3xl border border-primary/5 focus:border-primary/20 focus:ring-4 focus:ring-primary/5 outline-none transition-all font-serif resize-none"
                                    />
                                </div>

                                 <button 
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-5 bg-cta text-white rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:opacity-90 transition-all transform hover:scale-[1.02] shadow-xl shadow-cta/20 group"
                                >
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#F8F8F6]">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto space-y-12">
                         <div className="text-center space-y-6">
                            <SectionLabel label="Common Questions" />
                            <h2 className="text-4xl font-display text-primary">Frequently Asked <span className="italic font-normal">Questions</span></h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                                     <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                    >
                                        <span className="font-bold text-primary group-hover:text-primary/60 transition-colors">{faq.q}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`text-gray-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-6 text-gray-500 font-serif leading-relaxed pt-2 border-t border-gray-50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
