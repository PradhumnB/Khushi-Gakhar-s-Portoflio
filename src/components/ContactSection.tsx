import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        style={{ left: "5%", top: "10%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gold-light/5 blur-[80px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        style={{ right: "5%", bottom: "10%" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Let's <span className="italic text-gradient">Connect</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-accent rounded-full mb-6 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-primary-foreground/60 font-body text-lg mb-12">
            Open to consulting, strategy, and finance opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="mailto:mailittokhushigakhar@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm shadow-lg shadow-accent/25"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(199 98% 37% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} /> Email Me <ArrowUpRight size={14} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/khushigakhar15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/20 text-primary-foreground font-body text-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/10 text-primary-foreground/50 font-body text-sm">
            <Phone size={14} /> +91 9810963879
          </span>
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/10 text-primary-foreground/50 font-body text-sm">
            <MapPin size={14} /> New Delhi, India
          </span>
        </motion.div>

        <motion.p
          className="text-primary-foreground/30 font-body text-xs mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          © 2026 Khushi Gakhar. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
