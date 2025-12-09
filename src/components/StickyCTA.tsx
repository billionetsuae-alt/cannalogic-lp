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
      transition={{ duration: 0.4, delay: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
      style={{
        background: 'linear-gradient(to top, hsl(0 0% 100%) 60%, transparent 100%)',
        paddingTop: '2rem',
      }}
    >
      <button
        onClick={onClick}
        className="w-full btn-primary py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2 green-glow"
      >
        <span>START MY ASSESSMENT</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
};
