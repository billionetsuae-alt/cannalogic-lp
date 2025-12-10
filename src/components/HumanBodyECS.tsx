import { motion } from "framer-motion";

export const HumanBodyECS = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <svg
                viewBox="0 0 200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto opacity-80"
            >
                {/* Human Silhouette Outline - Simplified */}
                <path
                    d="M100 20 C 115 20, 125 30, 125 45 C 125 55, 120 60, 115 65 C 135 70, 150 80, 150 100 L 150 160 C 150 170, 145 180, 140 200 L 140 280 L 130 380 L 100 350 L 70 380 L 60 280 L 60 200 C 55 180, 50 170, 50 160 L 50 100 C 50 80, 65 70, 85 65 C 80 60, 75 55, 75 45 C 75 30, 85 20, 100 20 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary/30"
                    fill="none"
                />

                {/* Chakra / ECS Nodes - Glowing dots */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
                >
                    {/* Brain */}
                    <Node cx="100" cy="45" label="Brain" delay={0} />
                    {/* Throat */}
                    <Node cx="100" cy="75" label="" delay={0.2} />
                    {/* Heart */}
                    <Node cx="100" cy="110" label="Heart" delay={0.4} />
                    {/* Solar Plexus */}
                    <Node cx="100" cy="150" label="Gut" delay={0.6} />
                    {/* Root */}
                    <Node cx="100" cy="200" label="" delay={0.8} />
                </motion.g>

                {/* Connecting Lines (Nervous System) */}
                <motion.path
                    d="M100 45 L 100 200"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-neon"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5, delay: 1 }}
                />
            </svg>

            {/* Overlay Label */}
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 shadow-sm">
                <span className="text-xs font-semibold text-primary">ECS RECEPTORS</span>
            </div>
        </div>
    );
};

const Node = ({ cx, cy, label, delay }: { cx: string, cy: string, label: string, delay: number }) => (
    <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
    >
        <circle cx={cx} cy={cy} r="6" className="fill-neon/80" />
        <circle cx={cx} cy={cy} r="12" className="stroke-neon/40 animate-pulse" strokeWidth="2" />
        {label && (
            <text x={parseFloat(cx) + 15} y={parseFloat(cy) + 4} fontSize="10" fill="currentColor" className="text-xs font-mono font-bold text-foreground opacity-70">
                {label}
            </text>
        )}
    </motion.g>
);
