import { motion } from "framer-motion";

export const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            You Are Not Broken.
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-accent mb-8">
            You Are Just Disconnected.
          </p>
          <div className="max-w-2xl mx-auto space-y-6 text-muted-foreground text-lg">
            <p>
              The constant noise. The racing thoughts. The weight that sits on your chest 
              when you try to rest. Modern life has severed you from your natural state of peace.
            </p>
            <p>
              You've tried meditation apps. Prescription solutions. Endless supplements 
              promising miracles. Yet the disconnect remains.
            </p>
            <p className="text-foreground font-medium">
              What if the answer isn't something new—but something ancient?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
