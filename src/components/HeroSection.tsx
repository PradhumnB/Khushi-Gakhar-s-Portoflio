import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            MBA Candidate · Finance & Marketing
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Khushi{" "}
            <span className="text-gradient italic">Gakhar</span>
          </h1>

          <motion.p
            className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Analytical thinker turning data into decisions. Passionate about consulting, 
            strategy, and creating measurable business impact.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="mailto:mailittokhushigakhar@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm hover:scale-105 transition-transform"
            >
              <Mail size={16} /> Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/khushigakhar15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/30 text-primary-foreground font-body text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-foreground/50 font-body text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="flex items-center gap-1.5"><MapPin size={14} /> New Delhi, India</span>
            <span className="flex items-center gap-1.5"><Phone size={14} /> +91 9810963879</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
