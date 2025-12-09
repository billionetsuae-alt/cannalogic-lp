import { motion } from "framer-motion";
import { Shield, Leaf, Scale } from "lucide-react";

const badges = [
  { icon: Shield, label: "Ayush Approved", delay: 0 },
  { icon: Leaf, label: "Non-Psychoactive", delay: 0.1 },
  { icon: Scale, label: "100% Legal", delay: 0.2 },
];

export const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: badge.delay }}
          className="trust-badge"
        >
          <badge.icon className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-foreground/80">{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );
};
