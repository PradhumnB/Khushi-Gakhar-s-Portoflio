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
    <section id="skills" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-14">
            My <span className="italic text-accent">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-5 pb-3 border-b border-accent/20">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground font-body text-xs font-medium hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
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
