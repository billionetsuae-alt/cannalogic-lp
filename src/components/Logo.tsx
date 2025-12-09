import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-2"
    >
      <span className="font-serif text-2xl md:text-3xl font-semibold text-accent tracking-wide">
        CannaLogic
      </span>
    </motion.div>
  );
};
