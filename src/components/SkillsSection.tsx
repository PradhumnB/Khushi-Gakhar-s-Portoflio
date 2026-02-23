import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Consulting & Strategy",
    skills: [
      "Structured Problem Solving",
      "Market Sizing",
      "Competitive Benchmarking",
      "Hypothesis-Driven Analysis",
      "Go-to-Market Assessment",
      "Business Case Development",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Analytics & Finance",
    skills: [
      "Financial Analysis",
      "Cost Optimisation",
      "Risk Assessment",
      "Pricing & Procurement Analysis",
    ],
  },
  {
    title: "Tools & Methods",
    skills: [
      "Excel (Advanced)",
      "Power BI",
      "Python (Data Analysis)",
      "CRM Tools",
      "Data Visualization",
      "Dashboarding",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            My <span className="italic text-accent">Toolkit</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-accent rounded-full mb-14"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <h3 className="text-lg font-display font-semibold text-foreground mb-5 pb-3 border-b border-accent/20">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-accent/10 text-accent font-body text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.15 + si * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
