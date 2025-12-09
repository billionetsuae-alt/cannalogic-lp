import { motion } from "framer-motion";
import { Brain, Leaf, Moon, Scroll } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Endocannabinoid System",
    description: "Your body's master regulator for balance and homeostasis.",
  },
  {
    icon: Leaf,
    title: "Natural Harmony",
    description: "Reconnect your mind and body through nature's own pathways.",
  },
  {
    icon: Moon,
    title: "Deep Restoration",
    description: "Support your body's natural rest and recovery cycles.",
  },
  {
    icon: Scroll,
    title: "Ancient Wisdom",
    description: "Backed by centuries of traditional use and modern science.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-divider mb-8"
          />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Science of <span className="text-primary">Homeostasis</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Your body possesses an innate intelligence designed to maintain balance.
            We're here to help you unlock it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-4 md:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="feature-card"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-jungle-light flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
