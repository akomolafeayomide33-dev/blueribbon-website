import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import presidentImg from "../../assets/images/president_sandra_new.jpg";
import heroImg from "../../assets/images/Hero Image.png";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FDF6EC]">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-[#1A3A6B]/3 -skew-x-3 transform origin-top-right transition-transform duration-1000 hidden lg:block" />

            <div className="container-custom relative z-10 w-full py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
                    {/* Left Side Content (55%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4A017]/10 text-[#B5840D] border border-[#D4A017]/10 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B5840D] animate-pulse" />
                            Founded December 2020
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#1A3A6B] leading-[1.05]">
                            Restoring Hope.<br />
                            Unlocking <span className="text-[#D4A017] italic font-normal">Potential.</span><br />
                            Building Futures.
                        </h1>

                        <p className="text-base md:text-lg text-gray-500 max-w-xl font-serif leading-relaxed">
                            A faith-inspired NGO empowering vulnerable children and teens across Nigeria through leadership, inclusion, and community-driven impact.
                        </p>

                        {/* Subtle Stat Row */}
                        <div className="flex flex-wrap gap-8 md:gap-10 opacity-70">
                            <div className="flex flex-col">
                                <span className="text-xl font-display font-bold text-[#1A3A6B]">2020</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Founded</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-display font-bold text-[#1A3A6B]">6</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Pillars</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-display font-bold text-[#1A3A6B]">$1,600+</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Invested</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/get-involved" className="bg-[#D4A017] text-white px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#C49007] transition-all transform hover:scale-105 shadow-lg shadow-[#D4A017]/20 group">
                                Donate Now
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link to="/programs" className="border-2 border-[#1A3A6B] text-[#1A3A6B] px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#1A3A6B] hover:text-white transition-all transform hover:scale-105 group">
                                Our Programs
                                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side Visual Area (45%) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative lg:pr-16"
                    >
                        {/* Main Image Card with Quote Badge */}
                        <div className="relative group">
                            <div className="relative aspect-square md:aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(26,58,107,0.2)] border-[8px] border-white">
                                <div className="absolute inset-0 bg-[#D4A017]/5 mix-blend-multiply z-10" />
                                <img
                                    src={heroImg}
                                    alt="Blue Ribbon Foundation Outreach"
                                    className="w-full h-full object-cover contrast-[1.05]"
                                />
                            </div>

                            {/* Quote Card Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute -bottom-6 left-2 sm:-left-6 md:-left-12 bg-white p-4 md:p-5 rounded-2xl shadow-2xl z-20 border border-gray-50 max-w-[85%] md:max-w-[240px]"
                            >
                                <div className="w-8 h-8 bg-[#D4A017]/10 flex items-center justify-center rounded-lg text-[#D4A017] mb-3">
                                    <Heart size={16} fill="currentColor" />
                                </div>
                                <p className="font-serif italic text-xs text-gray-700 leading-relaxed mb-4">
                                    "Every child deserves a future worth fighting for. We are raising a generation that leads with purpose."
                                </p>
                            </motion.div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-[100px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
