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
          <motion.h2
            style={{ y }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4"
          >
            You’re Not Broken.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-neon mb-10"
          >
            You’ve Been Disconnected.
          </motion.p>

          <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            <p>
              Modern life has pushed you away from your true self. <br />
              Stress. Overthinking. Emotional heaviness.
            </p>
            <p>
              Not because you’re weak — but because your inner balancing system has been suppressed.
            </p>
            <div className="flex flex-col gap-2 font-medium text-foreground py-4">
              <span>Your mind fights itself.</span>
              <span>Your emotions drain you.</span>
              <span>Your intuition fades.</span>
            </div>
            <p className="text-neon font-semibold">
              You’re not meant to live like this.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            {/* Note: User requested CTA here "Take the Consciousness Assessment" - likely leading to same modal */}
            {/* We can just add a small button or text link since main CTAs are top/bottom, or standard button */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
