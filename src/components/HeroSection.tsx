import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-accent/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{ repeat: Infinity, duration: 4 + delay, delay, ease: "easeInOut" }}
  />
);

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.04, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  const firstName = "Khushi";
  const lastName = "Gakhar";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={6} />
      <FloatingParticle delay={1} x="85%" y="15%" size={4} />
      <FloatingParticle delay={0.5} x="70%" y="70%" size={8} />
      <FloatingParticle delay={2} x="20%" y="75%" size={5} />
      <FloatingParticle delay={1.5} x="50%" y="10%" size={3} />
      <FloatingParticle delay={0.8} x="90%" y="50%" size={6} />
      <FloatingParticle delay={1.2} x="30%" y="85%" size={4} />
      <FloatingParticle delay={0.3} x="60%" y="30%" size={5} />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ left: "10%", top: "20%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gold-light/5 blur-[80px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{ right: "10%", bottom: "20%" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          MBA Candidate · Finance & Marketing
        </motion.p>

        {/* Animated heading with per-letter reveal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-2 leading-tight">
          <span className="inline-block overflow-hidden">
            {firstName.split("").map((char, i) => (
              <motion.span
                key={`f-${i}`}
                className="inline-block"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
          <span className="inline-block overflow-hidden">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={`l-${i}`}
                className="inline-block text-gradient italic"
                custom={i + firstName.length}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Animated accent line */}
        <motion.div
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mb-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        <motion.p
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Analytical thinker turning data into decisions. Passionate about consulting,
          strategy, and creating measurable business impact.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.a
            href="mailto:mailittokhushigakhar@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm shadow-lg shadow-accent/25"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(199 98% 37% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} /> Get in Touch
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/khushigakhar15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground font-body text-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Linkedin size={16} /> LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-foreground/50 font-body text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="flex items-center gap-1.5"><MapPin size={14} /> New Delhi, India</span>
          <span className="flex items-center gap-1.5"><Phone size={14} /> +91 9810963879</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gold rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
