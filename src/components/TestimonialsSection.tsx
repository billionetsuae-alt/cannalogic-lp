import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Ravi",
        age: 41,
        quote: "For the first time in years, I feel aligned. Not high — aligned. My meditation practice deepened immediately.",
    },
    {
        name: "Meera",
        age: 38,
        quote: "My emotional heaviness dissolved within days. I feel lighter, clearer, and more connected.",
    },
    {
        name: "Sanjay",
        age: 47,
        quote: "For years I felt like my mind was running on autopilot. Within a week, the inner chatter reduced. I feel present… actually present. This medicine brought me back to myself.",
    },
    {
        name: "Lakshmi",
        age: 35,
        quote: "I didn’t expect emotional healing. But it happened naturally. My reactions softened, my stress dropped, and my relationships improved because I stopped carrying old weight.",
    },
    {
        name: "Arun",
        age: 54,
        quote: "I’ve tried meditation, retreats, everything. Nothing helped me cross that inner barrier until I started this. It doesn’t push you — it aligns you. My clarity and intuition are on a different level now.",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="py-20 px-4 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-4">
                        What Seekers Are Saying
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors"
                        >
                            <div className="flex text-amber-500 mb-4 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-muted-foreground text-lg italic mb-6 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="font-sans text-foreground font-medium">
                                — {t.name}, <span className="text-muted-foreground text-sm">{t.age}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
