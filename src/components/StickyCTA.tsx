import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StickyCTAProps {
  onClick: () => void;
}

export const StickyCTA = ({ onClick }: StickyCTAProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
      style={{
        background: 'linear-gradient(to top, hsl(0 0% 4%) 0%, hsl(0 0% 4% / 0.95) 50%, transparent 100%)',
        paddingTop: '3rem',
      }}
    >
      <button
        onClick={onClick}
        className="w-full btn-gold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-3 animate-pulse-glow"
      >
        <span>START MY ASSESSMENT</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
};
