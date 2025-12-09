import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-divider mb-10"
          />

          <motion.h2
            style={{ y }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          >
            You Are Not Broken.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-primary mb-10"
          >
            You Are Just Disconnected.
          </motion.p>
          
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The constant noise. The racing thoughts. The weight that sits on your chest 
              when you try to rest. Modern life has severed you from your natural state of peace.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              You've tried meditation apps. Prescription solutions. Endless supplements 
              promising miracles. Yet the disconnect remains.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground font-medium text-lg md:text-xl"
            >
              What if the answer isn't something new—but something ancient?
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
