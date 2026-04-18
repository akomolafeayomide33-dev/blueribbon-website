import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Impact", href: "/impact" },
        { name: "Get Involved", href: "/get-involved" },
    ];

    const isHome = location.pathname === "/";

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8",
                isScrolled || !isHome ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group" aria-label="Blue Ribbon Foundation Home">
                    <div className="w-10 h-10 bg-[#1A3A6B] rounded-xl flex items-center justify-center text-white font-display text-2xl transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-[#1A3A6B]/10" aria-hidden="true">
                        B
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "font-display text-xl leading-none tracking-tight transition-colors",
                            isScrolled || !isHome ? "text-[#1A3A6B]" : "text-[#1A3A6B]"
                        )}>
                            Blue Ribbon
                        </span>
                        <span className="text-[#B5840D] text-[10px] font-bold uppercase tracking-[0.2em] leading-none mt-1">
                            Foundation
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={cn(
                                "text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#B5840D] relative group",
                                location.pathname === link.href ? "text-[#B5840D]" : "text-[#1A3A6B]/70"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B5840D] transition-all group-hover:w-full",
                                location.pathname === link.href ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                    <Link to="/contact">
                        <button 
                            className="bg-[#D4A017] text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#C49007] transition-all transform hover:scale-105 shadow-lg shadow-[#D4A017]/20"
                            aria-label="Partner With Us - Inquire Now"
                        >
                            Partner With Us
                            <Heart size={14} fill="currentColor" aria-hidden="true" />
                        </button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[#1A3A6B] w-10 h-10 flex items-center justify-center bg-white/50 rounded-xl backdrop-blur-sm shadow-sm"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="md:hidden fixed inset-0 top-0 h-screen bg-white z-[60] p-10 flex flex-col pt-32"
                >
                    <button
                        className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={24} className="text-[#1A3A6B]" />
                    </button>

                    <div className="space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    "block text-4xl font-display transition-colors",
                                    location.pathname === link.href ? "text-[#D4A017]" : "text-[#1A3A6B]"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8 border-t border-gray-100">
                            <Link to="/contact" className="bg-[#D4A017] text-white w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3">
                                <Heart size={20} fill="currentColor" />
                                Partner With Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    );
}

