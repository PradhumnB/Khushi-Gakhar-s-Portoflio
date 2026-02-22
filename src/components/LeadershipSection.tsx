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
    <section id="leadership" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-14">
            Beyond the <span className="italic text-accent">Classroom</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="glass-card rounded-xl p-6 md:p-8 group hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <role.icon size={20} />
                </div>
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
