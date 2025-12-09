import { motion } from "framer-motion";
import { Shield, Leaf, Scale } from "lucide-react";

const badges = [
  { icon: Shield, label: "Ayush Approved" },
  { icon: Leaf, label: "Non-Psychoactive" },
  { icon: Scale, label: "100% Legal" },
];

export const TrustBadges = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 md:gap-4"
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="trust-badge"
        >
          <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="text-sm font-medium text-foreground">{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
