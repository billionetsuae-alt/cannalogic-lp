import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

// Hero Section Component
export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative py-6 md:py-12 lg:py-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
        >
          The Ancient Medicine They <br className="hidden md:block" /> Tried to <span className="text-neon">Hide from You</span>
        </motion.h1>

        {/* Sub-Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light"
        >
          Unlock Higher Consciousness, Emotional Balance & Inner Clarity — <span className="text-white font-medium">Naturally.</span>
        </motion.p>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative aspect-video max-w-3xl mx-auto bg-black rounded-2xl border-2 border-primary/20 shadow-[0_0_40px_rgba(74,222,128,0.1)] mb-10 overflow-hidden group hover:border-primary/40 transition-colors"
        >
          <video
            src="https://res.cloudinary.com/djwx0b9nj/video/upload/v1765290145/VSL_Thampi_Nagarjuna_1_t4cg84.mp4"
            controls
            playsInline
            controlsList="nodownload" // Optional: prevents download button in some browsers
            className="w-full h-full object-cover"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 space-y-4"
        >
          <p>For centuries this sacred plant awakened seekers… and threatened the systems that control you.</p>
          <p className="text-foreground">Today, it returns — legally approved, scientifically validated, and available only to those who qualify.</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCTAClick}
            className="btn-primary py-4 px-12 rounded-full text-xl font-bold inline-flex items-center gap-2 green-glow"
          >
            Take the Assessment <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="mt-4 text-xs text-muted-foreground">Find out if you’re eligible for this exclusive medicine.</p>
        </motion.div>
      </div>
    </section>
  );
};
