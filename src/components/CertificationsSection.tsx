import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Trophy } from "lucide-react";

const certs = [
  "Excel Skills for Business (Advanced) – Macquarie University",
  "Consultant Job Simulation – Accenture (Forage)",
  "NISM Series VA: Mutual Fund Distributors",
  "Google AI Essentials – Coursera",
  "Data Science with Python – Great Learning",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Certifications & Achievements</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-14">
            Continuous <span className="italic text-accent">Learning</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 mb-12">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              className="flex items-center gap-4 glass-card rounded-lg px-6 py-4 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <BadgeCheck size={18} className="text-accent flex-shrink-0" />
              <span className="font-body text-foreground text-sm">{cert}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card rounded-xl p-6 md:p-8 border-accent/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <Trophy size={22} className="text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Semi-Finalist – CASEino 2025</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Nationwide case study competition by Grant Thornton Bharat LLP; developed structured recommendations 
                under time constraints through market and financial analysis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
