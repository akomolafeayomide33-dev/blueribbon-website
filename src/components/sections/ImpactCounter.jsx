import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ value, suffix = "", prefix = "", duration = 2000 }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        let animationFrame;
        const endValue = parseInt(value, 10);

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const easeOutExpo = 1 - Math.pow(2, -10 * percentage);
            const nextValue = Math.floor(endValue * easeOutExpo);
            setCount(nextValue);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted, value, duration]);

    return (
        <span ref={nodeRef}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

export function ImpactCounter() {
    const stats = [
        { number: "2", suffix: "+", label: "MAJOR OUTREACHES" },
        { number: "1600", prefix: "$", suffix: "+", label: "FUNDS INVESTED" },
        { number: "6", label: "CORE PILLARS" },
        { number: "100", suffix: "+", label: "LIVES DIRECTLY TOUCHED" },
    ];

    return (
        <section className="bg-[#1A3A6B] py-24 relative overflow-hidden">
            {/* Decorative Circle Watermarks */}
            <div className="absolute top-1/2 left-0 w-96 h-96 border-[40px] border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-64 h-64 border-[20px] border-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-0">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col items-center text-center px-8 ${index !== stats.length - 1 ? "md:border-r border-white/10" : ""
                                }`}
                        >
                            <h3 className="text-white font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                                <Counter value={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                            </h3>
                            <p className="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
