import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Heart, Lightbulb } from "lucide-react";

const roles = [
  {
    icon: Users,
    title: "Head – Community Engagement",
    org: "FORE Alumni Network",
    period: "Jul 2025 – Apr 2026",
    desc: "Led engagement strategy for an 8,000+ member alumni network, driving a 35% YoY increase in engagement.",
  },
  {
    icon: Award,
    title: "Member, Students' Union",
    org: "Janki Devi Memorial College",
    period: "Jul 2022 – Jun 2023",
    desc: "Represented 1,000+ students, facilitating structured resolution of 20+ grievances.",
  },
  {
    icon: Heart,
    title: "Member, Enactus",
    org: "Janki Devi Memorial College",
    period: "Jul 2022 – Jun 2023",
    desc: "Contributed to community-focused initiatives designing sustainable solutions for social challenges.",
  },
  {
    icon: Lightbulb,
    title: "Vocational Skill Development",
    org: "Rotaract Club of Resilience",
    period: "Oct 2021 – Sep 2022",
    desc: "Delivered skill-development workshops for 100+ individuals from underprivileged communities.",
  },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding bg-background relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Beyond the <span className="italic text-accent">Classroom</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-accent rounded-full mb-14"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="glass-card rounded-2xl p-6 md:p-8 group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <role.icon size={22} />
                </motion.div>
                <div>
                  <h3 className="text-base font-display font-semibold text-foreground">{role.title}</h3>
                  <p className="text-accent font-body text-sm font-medium">{role.org}</p>
                  <p className="text-muted-foreground font-body text-xs mb-3">{role.period}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{role.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
