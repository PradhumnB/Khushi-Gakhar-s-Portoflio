import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Target, BarChart3 } from "lucide-react";

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <>{count}{suffix}</>;
};

const highlights = [
  { icon: TrendingUp, value: 15, suffix: "%", label: "Cost Optimisation Delivered" },
  { icon: Target, value: 20, suffix: "%", label: "Digital Engagement Growth" },
  { icon: BarChart3, value: 35, suffix: "%", label: "YoY Alumni Engagement Increase" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative" ref={ref}>
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Turning Complexity Into <span className="italic text-accent">Clarity</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-accent rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-muted-foreground font-body text-lg max-w-3xl leading-relaxed mb-14">
            Analytical MBA student with experience applying structured problem-solving, quantitative analysis,
            and stakeholder coordination across banking, manufacturing, and B2B contexts. Strong exposure to
            competitive benchmarking, go-to-market assessment, and CRM-enabled execution in commercial contexts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass-card rounded-2xl p-8 text-center group cursor-default relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-5"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon size={24} />
                </motion.div>
                <p className="text-5xl font-display font-bold text-foreground mb-2">
                  <AnimatedCounter value={item.value} suffix={item.suffix} isInView={isInView} />
                </p>
                <p className="text-muted-foreground font-body text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
