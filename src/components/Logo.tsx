import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <span className="font-serif text-2xl md:text-3xl font-semibold text-primary tracking-wide">
        CannaLogic
      </span>
    </motion.div>
  );
};
