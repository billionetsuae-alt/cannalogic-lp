import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

// Staggered text animation for dramatic entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8 }
  }
} as const;

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Dramatic Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50" />

      {/* Hero Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-100/30 via-transparent to-transparent" />

      {/* Bottom Fade - Smooth blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-[5]" />

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-green-400/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-5xl mx-auto text-center relative z-10 py-6 md:py-12">


        {/* BIG Dramatic Headline - Unlock Higher Consciousness */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1
            variants={wordVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.1] tracking-tight"
          >
            Unlock{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-600">Higher Consciousness</span>
              {/* Glow effect behind text */}
              <motion.span
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-emerald-400/30 blur-xl -z-10"
              />
            </span>
          </motion.h1>
          <motion.h1
            variants={wordVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.1] tracking-tight mt-2"
          >
            Emotional Balance & Inner Clarity
          </motion.h1>
          <motion.h1
            variants={wordVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mt-2"
          >
            — <span className="text-gray-900">Naturally.</span>
          </motion.h1>
        </motion.div>

        {/* Smaller Sub-Headline - Ancient Medicine */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
        >
          The Ancient Medicine They Tried to <span className="text-emerald-600 font-medium">Hide from You</span>
        </motion.p>

        {/* Cannabis Leaf Image - S-Curve Serpentine Glide from Top */}
        <motion.div
          initial={{ opacity: 0.8, y: -600, x: -80, scale: 0.3, rotate: -15 }}
          animate={{
            opacity: 1,
            y: 0,
            x: [null, 80, -60, 40, -20, 0],  // S-curve zig-zag
            scale: 1,
            rotate: [null, 10, -8, 5, -3, 0]  // Subtle tilt while moving
          }}
          transition={{
            duration: 3,
            delay: 0.3,
            ease: "easeInOut",
            x: { duration: 3, ease: "easeInOut" },
            rotate: { duration: 3, ease: "easeInOut" }
          }}
          className="mb-6 relative z-0"
          style={{ zIndex: -1 }}
        >
          {/* Glow effect behind leaf */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute inset-0 bg-emerald-400/30 rounded-full blur-3xl"
          />

          {/* Floating animation wrapper */}
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.8
            }}
          >
            <img
              src="/cannabis-leaf.png"
              alt="Sacred Cannabis Leaf"
              className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* VSL Video with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Video Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-emerald-400/20 rounded-3xl blur-2xl opacity-60" />

          <div className="relative aspect-video bg-gray-900 rounded-2xl border border-emerald-200/50 shadow-2xl shadow-emerald-500/10 overflow-hidden">
            <video
              src="https://res.cloudinary.com/djwx0b9nj/video/upload/v1765290145/VSL_Thampi_Nagarjuna_1_t4cg84.mp4"
              controls
              playsInline
              controlsList="nodownload"
              className="w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-gray-500 max-w-2xl mx-auto mb-10 space-y-3 text-lg"
        >
          <p>For centuries this sacred plant awakened seekers… and threatened the systems that control you.</p>
          <p className="text-gray-800 font-medium">Today, it returns — legally approved, scientifically validated, and available only to those who qualify.</p>
        </motion.div>

        {/* Pulsing CTA with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="relative inline-block"
        >


          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onCTAClick}
            className="relative bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-10 rounded-full text-lg font-bold inline-flex items-center gap-2 shadow-xl shadow-emerald-500/30 transition-all duration-300"
          >
            Take the Test
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.span>
          </motion.button>

          <p className="mt-5 text-sm text-gray-500">Find out if you're eligible for this exclusive medicine.</p>
        </motion.div>
      </div>
    </section>
  );
};
