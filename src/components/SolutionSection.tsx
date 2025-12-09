import { motion } from "framer-motion";
import { Brain, Heart, Moon, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Endocannabinoid System",
    description: "Your body's master regulator for balance and homeostasis.",
  },
  {
    icon: Heart,
    title: "Natural Harmony",
    description: "Reconnect your mind and body through nature's own pathways.",
  },
  {
    icon: Moon,
    title: "Deep Restoration",
    description: "Support your body's natural rest and recovery cycles.",
  },
  {
    icon: Sparkles,
    title: "Ancient Wisdom",
    description: "Backed by centuries of traditional use and modern science.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            The Science of <span className="text-accent">Homeostasis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your body possesses an innate intelligence designed to maintain balance. 
            We're here to help you unlock it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
