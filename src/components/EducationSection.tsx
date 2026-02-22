import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "PGDM (Finance & Marketing)",
    institution: "FORE School of Management, New Delhi",
    period: "2024 – 2026",
    score: "CGPA: 7.55",
  },
  {
    degree: "B.Com (Hons.)",
    institution: "Janki Devi Memorial College, University of Delhi",
    period: "2021 – 2024",
    score: "69.46%",
  },
  {
    degree: "CBSE (Class XII & X)",
    institution: "Maxfort School",
    period: "2019 – 2021",
    score: "XII: 94.80% · X: 86.16%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-14">
            Academic <span className="italic text-accent">Foundation</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="glass-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground font-body text-sm">{edu.institution}</p>
              </div>
              <div className="text-right">
                <p className="text-accent font-body font-semibold text-sm">{edu.score}</p>
                <p className="text-muted-foreground font-body text-xs">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
