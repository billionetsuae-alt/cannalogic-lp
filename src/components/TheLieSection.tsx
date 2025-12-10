import { motion } from "framer-motion";

export const TheLieSection = ({ onCTAClick }: { onCTAClick: () => void }) => {
    return (
        <section className="py-20 px-4 bg-white/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-sans text-3xl md:text-4xl font-bold leading-tight mb-6">
                            <span className="text-destructive">“C**nabis is Dangerous”</span>
                            <br />
                            <span className="text-foreground">— The Biggest Lie of Our Time</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                If c**nabis truly made people weak, why did ancient siddhars, rishis, and yogis use it for clarity, spiritual elevation, and emotional balance?
                            </p>
                            <p>
                                Why did governments fear it? Why did systems ban it?
                            </p>
                            <p className="border-l-4 border-neon pl-4 italic text-foreground my-6">
                                Because awakened humans cannot be controlled. An aligned mind is a threat.
                            </p>
                            <p>
                                A conscious human is impossible to manipulate.
                            </p>
                            <p className="text-xl font-bold text-neon">
                                This isn’t danger. This is power.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual/Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden relative group">
                            <img
                                src="/truth-awakening.png"
                                alt="Truth vs The Lie - Awakening Visual"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                        <div className="text-center mt-4">
                            <button onClick={onCTAClick} className="text-neon text-sm font-semibold hover:underline">
                                👉 Discover If You’re Ready for This Path (Scroll)
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
