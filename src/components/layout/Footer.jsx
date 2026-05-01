import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo/logo-white.png";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-midnight text-white pt-24 pb-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-3">
                            <img 
                                src={logoWhite} 
                                alt="Blue Ribbon Foundation Logo" 
                                className="h-10 md:h-12 w-auto"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs font-serif italic">
                            "Restoring Hope. Unlocking Potential. Building Futures." A youth-centered NGO dedicated to leadership, inclusion, and community empowerment across Africa.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram size={18} />} href="#" />
                            <SocialIcon icon={<Facebook size={18} />} href="#" />
                            <SocialIcon icon={<Linkedin size={18} />} href="#" />
                            <SocialIcon icon={<Twitter size={18} />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-display text-lg mb-8">Navigation</h4>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
                            <li><FooterLink href="/about">Our Story</FooterLink></li>
                            <li><FooterLink href="/programs">Our Programs</FooterLink></li>
                            <li><FooterLink href="/impact">Impact & SDGs</FooterLink></li>
                            <li><FooterLink href="/get-involved">Get Involved</FooterLink></li>
                            <li><FooterLink href="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-white font-display text-lg mb-8">Pillars</h4>
                        <ul className="space-y-4 text-sm text-white/50 font-serif">
                            <li><FooterLink href="/programs/tiv">Teens in Vogue (TIV)</FooterLink></li>
                            <li><FooterLink href="/programs/gatekeepers">The Gatekeepers</FooterLink></li>
                            <li><FooterLink href="/programs/liones">LIONESS Empowerment</FooterLink></li>
                            <li><FooterLink href="/programs/lots">LOTS Outreach</FooterLink></li>
                            <li><FooterLink href="/programs/blue-city">The Blue City</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-display text-lg mb-8">Connect</h4>
                        <ul className="space-y-6 text-sm text-white/50 font-serif">
                            <li className="flex gap-4">
                                <MapPin size={18} className="text-white/40 shrink-0" />
                                <span>Ogun State, Nigeria<br />Global Operations</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone size={18} className="text-white/40 shrink-0" />
                                <span>+234 (0) 812 345 6789</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail size={18} className="text-white/40 shrink-0" />
                                <span>info@blueribbonfoundation.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                        Spirituality with Strategy — Since 2020
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-white/20">
                        © {currentYear} Blue Ribbon Foundation. Developed with Excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all hover:bg-white/10 hover:text-white"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }) {
    return (
        <Link to={href} className="hover:text-white hover:translate-x-1 inline-block transition-all">
            {children}
        </Link>
    );
}

