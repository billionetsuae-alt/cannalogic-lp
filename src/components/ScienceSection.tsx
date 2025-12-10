import { motion } from "framer-motion";

export const ScienceSection = () => {
    return (
        <section className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1 relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl bg-black border border-primary/20 relative overflow-hidden flex items-center justify-center p-8">
                            {/* ECS Network Visualization Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <div className="w-40 h-40 rounded-full border-2 border-primary/30 flex items-center justify-center animate-pulse">
                                    <div className="w-24 h-24 rounded-full bg-primary/20 blur-xl" />
                                    <span className="font-mono text-neon text-sm">ECS NETWORK</span>
                                </div>
                                {/* Connecting dots */}
                                <div className="absolute top-10 right-10 w-3 h-3 bg-neon rounded-full" />
                                <div className="absolute bottom-20 left-10 w-2 h-2 bg-neon rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                            Your Body Was Designed to Work with This Plant
                        </h2>
                        <div className="text-muted-foreground text-lg space-y-4">
                            <p>
                                Inside your body is a natural regulatory network called the <span className="text-neon font-semibold">Endocannabinoid System (ECS)</span>.
                            </p>
                            <div className="bg-background/50 p-6 rounded-xl border border-primary/10">
                                <p className="mb-4 font-medium text-foreground">Its purpose:</p>
                                <ul className="space-y-2 text-sm md:text-base">
                                    {["Balance mood", "Regulate stress", "Support sleep", "Stabilize emotions", "Maintain inner harmony"].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p>
                                Full-spectrum plant extract interacts directly with this system — <strong className="text-foreground">not to sedate you, but to align you.</strong>
                            </p>
                            <p>
                                When your ECS activates, your inner noise drops, your clarity rises, your consciousness expands.
                            </p>
                            <p className="text-neon font-bold text-xl uppercase tracking-wider">
                                This is biology, not mythology.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
