import { motion } from "framer-motion";

export const SacredGeometryBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(152 100% 17% / 0.2) 0%, transparent 60%)',
        }}
      />
      
      {/* Sacred geometry pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="sacred-geometry" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Flower of Life inspired pattern */}
            <circle cx="60" cy="60" r="30" fill="none" stroke="hsl(43, 72%, 52%)" strokeWidth="0.5"/>
            <circle cx="30" cy="60" r="30" fill="none" stroke="hsl(43, 72%, 52%)" strokeWidth="0.5"/>
            <circle cx="90" cy="60" r="30" fill="none" stroke="hsl(43, 72%, 52%)" strokeWidth="0.5"/>
            <circle cx="45" cy="34" r="30" fill="none" stroke="hsl(43, 72%, 52%)" strokeWidth="0.5"/>
            <circle cx="75" cy="34" r="30" fill="none" stroke="hsl(43, 72%, 52%)" strokeWidth="0.5"/>
            <circle cx="45" cy="86" r="30" fill="none" stroke="hsl(43, 72%, 52%)" strokeWidth="0.5"/>
            <circle cx="75" cy="86" r="30" fill="none" stroke="hsl(43, 72%, 52%)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sacred-geometry)" />
      </svg>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(43 72% 52%) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-48 h-48 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, hsl(152 100% 17%) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
