import { motion } from "framer-motion";

export const SacredGeometryBg = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pattern-dots" />
      
      {/* Floating gradient orbs */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, hsl(152 100% 17%) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, hsl(152 100% 17%) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
