import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-primary" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Let's <span className="italic text-gradient">Connect</span>
          </h2>
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
          <a
            href="mailto:mailittokhushigakhar@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm hover:scale-105 transition-transform"
          >
            <Mail size={16} /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/khushigakhar15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/20 text-primary-foreground font-body text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/10 text-primary-foreground/50 font-body text-sm">
            <Phone size={16} /> +91 9810963879
          </span>
          <span className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/10 text-primary-foreground/50 font-body text-sm">
            <MapPin size={16} /> New Delhi, India
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
