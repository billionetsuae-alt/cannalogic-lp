import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <img src="/Cannalogic-Colored-Vertical.svg" alt="CannaLogic" className="h-12 w-auto" />
    </motion.div>
  );
};
