import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
        >
          THE ANCIENT SECRET TO{" "}
          <span className="text-accent">RECLAIMING YOUR MIND</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Discover the 100% Natural, Ayush-Approved path to silencing the noise.
        </motion.p>

        {/* Desktop CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCTAClick}
          className="hidden md:inline-flex btn-gold py-4 px-10 rounded-lg text-lg items-center gap-3 animate-pulse-glow"
        >
          <span>START MY ASSESSMENT</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};
