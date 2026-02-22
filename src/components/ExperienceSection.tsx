import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Axis Bank Ltd.",
    role: "Summer Intern",
    period: "Apr 2025 – May 2025",
    description:
      "Performed financial and risk diagnostics for SME credit appraisal, benchmarked peer banks, and supported a ₹45 crore working capital proposal by identifying a 15% cost optimisation opportunity through comparative analysis.",
  },
  {
    company: "Spun Weaves",
    role: "Portfolio Management Trainee",
    period: "Jan 2024 – Jun 2024",
    description:
      "Analysed procurement and pricing dynamics to design hedging strategies, reducing procurement costs by 15% while managing 3 key accounts contributing 21% of revenue and improving portfolio margins.",
  },
  {
    company: "HP Enterprise (HAPFAB)",
    role: "Marketing Intern",
    period: "Jun 2023 – Jul 2023",
    description:
      "Diagnosed drivers of low digital engagement, refined campaign approach, and coordinated execution to improve brand visibility by 20% while managing 100+ CRM-tracked customer interactions.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      {/* Floating orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ right: "-5%", top: "30%" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Where I've Made an <span className="italic text-gradient">Impact</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-accent rounded-full mb-14"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-6 md:left-8 top-0 w-px bg-gradient-to-b from-accent via-gold-light/30 to-transparent"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-16 md:pl-20"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.25 }}
              >
                {/* Pulsing timeline dot */}
                <div className="absolute left-4 md:left-6 top-1">
                  <div className="w-4 h-4 rounded-full bg-accent border-2 border-primary relative">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent"
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                    />
                  </div>
                </div>

                <motion.div
                  className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-300"
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                >
                  <p className="text-gold-light font-body text-sm mb-1">{exp.period}</p>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-foreground mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-gold font-body text-sm font-medium mb-3 flex items-center gap-2">
                    <Briefcase size={14} /> {exp.role}
                  </p>
                  <p className="text-primary-foreground/60 font-body leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
