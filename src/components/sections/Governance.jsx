import { motion } from "framer-motion";
import { ShieldCheck, Award, Globe } from "lucide-react";
import patronImg from "../../assets/images/patron_gorgetter.png";

export function Governance() {
    return (
        <section className="py-24 bg-white" id="governance">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A017] mb-4 block">
                                Governance & Transparency
                            </span>
                            <h2 className="text-4xl md:text-5xl text-[#1A3A6B] font-display">
                                Guided by Integrity. <br />
                                <span className="italic">Governed by Excellence.</span>
                            </h2>
                        </div>
                        
                        <p className="text-gray-500 font-serif text-lg leading-relaxed">
                            Blue Ribbon Foundation operates under the stewardship of a global advisory board and distinguished patronage, ensuring every resource is managed with transparency and every program is executed with strategic precision.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-[#FDF6EC] rounded-xl flex items-center justify-center text-[#D4A017] shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[#1A3A6B] font-bold text-sm uppercase tracking-wider">Board formalization</h4>
                                    <p className="text-gray-500 text-sm font-serif">Currently formalizing a Board of Trustees comprising leaders in law, finance, and social impact.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-[#FDF6EC] rounded-xl flex items-center justify-center text-[#D4A017] shrink-0">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="text-[#1A3A6B] font-bold text-sm uppercase tracking-wider">Global SDG Alignment</h4>
                                    <p className="text-gray-500 text-sm font-serif">Directly contributing to 6 United Nations Sustainable Development Goals for 2030.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-[#1A3A6B] p-10 md:p-12 md:pb-20 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                            
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl shrink-0">
                                    <img
                                        src={patronImg}
                                        alt="Dr. Gorgetter Godwin, PhD"
                                        className="w-full h-full object-cover object-[center_15%] scale-125"
                                    />
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-[#D4A017] mb-2">
                                        <Award size={16} />
                                        <span className="font-bold text-[10px] uppercase tracking-widest">Our Distinguished Patron</span>
                                    </div>
                                    <h3 className="text-3xl font-display mb-2 text-white">Dr. Gorgetter Godwin, PhD</h3>
                                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6 underline decoration-[#D4A017] underline-offset-4">Bermuda</p>
                                    <p className="text-white/80 font-serif leading-relaxed italic">
                                        "Strategy without spirituality is hollow; spirituality without strategy is ineffective. We are building a model that honors both, ensuring excellence in every outreach across the African continent."
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Credibility Tag */}
                        <div className="absolute -bottom-6 -right-2 md:right-4 bg-white px-6 py-3 rounded-2xl shadow-xl border border-gray-100 hidden md:block z-20">
                            <p className="text-[#1A3A6B] font-bold text-[10px] uppercase tracking-tighter mb-0.5">Impact Credibility</p>
                            <p className="text-[#D4A017] text-lg font-display">100% Stewardship</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
