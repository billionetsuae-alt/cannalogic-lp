import { motion } from "framer-motion";

// Simple SVG Leaf outline
const LeafIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2L14.5 9L22 9.5L16 14L18 22L12 17.5L6 22L8 14L2 9.5L9.5 9L12 2Z" fillOpacity="0.1" />
        {/* Using a star/sparkle shape as abstract geometric leaf representation if complex leaf path is too large, 
        or we can use a proper leaf path. Let's use a nice Cannabis Leaf approximate path */}
        <path d="M12.0002 2C12.0002 2 13.5658 8.07722 15.0002 9C16.4346 9.92278 21.0002 10 21.0002 10C21.0002 10 17.0002 13 16.5002 14.5C16.0002 16 17.5002 21 17.5002 21C17.5002 21 13.5002 18 12.0002 18C10.5002 18 6.50017 21 6.50017 21C6.50017 21 8.00017 16 7.50017 14.5C7.00017 13 3.00017 10 3.00017 10C3.00017 10 7.56578 9.92278 9.00017 9C10.4346 8.07722 12.0002 2 12.0002 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const LeafBackground = () => {
    // Generate random positions for leaves
    const leaves = [...Array(12)].map((_, i) => ({
        id: i,
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        scale: 0.5 + Math.random() * 1, // 0.5 to 1.5
        rotate: Math.random() * 360,
        duration: 15 + Math.random() * 20, // 15-35s floating duration
        delay: Math.random() * 5
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    initial={{
                        x: `${leaf.x}vw`,
                        y: `${leaf.y}vh`,
                        opacity: 0,
                        rotate: leaf.rotate
                    }}
                    animate={{
                        y: [`${leaf.y}vh`, `${leaf.y - 20}vh`, `${leaf.y}vh`], // Float up and down
                        rotate: leaf.rotate + 360,
                        opacity: [0, 0.2, 0] // Fade in and out
                    }}
                    transition={{
                        duration: leaf.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: leaf.delay
                    }}
                    className="absolute text-primary/20"
                    style={{ scale: leaf.scale }}
                >
                    <LeafIcon className="w-12 h-12 md:w-24 md:h-24" />
                </motion.div>
            ))}

            {/* Add subtle fog/smoke effect overlays */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background opacity-60" />
        </div>
    );
};
