import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target, BarChart3 } from "lucide-react";

const highlights = [
  { icon: TrendingUp, value: "15%", label: "Cost Optimisation Delivered" },
  { icon: Target, value: "20%", label: "Digital Engagement Growth" },
  { icon: BarChart3, value: "35%", label: "YoY Alumni Engagement Increase" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8">
            Turning Complexity Into <span className="italic text-accent">Clarity</span>
          </h2>
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
              className="glass-card rounded-xl p-8 text-center group hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={22} />
              </div>
              <p className="text-4xl font-display font-bold text-foreground mb-2">{item.value}</p>
              <p className="text-muted-foreground font-body text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
