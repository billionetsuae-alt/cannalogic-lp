import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const LegalitySection = ({ onCTAClick }: { onCTAClick: () => void }) => {
    return (
        <section className="py-20 px-4 bg-secondary/30">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6"
                >
                    <ShieldCheck className="w-12 h-12 text-neon" />
                </motion.div>

                <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
                    100% Legal. 100% Safe. <br /> Ministry of AYUSH Approved.
                </h2>

                <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                    This is a natural Ayurvedic formulation, stabilized and approved under Indian law.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
                    {[
                        "Ministry of AYUSH compliant",
                        "Legally dispensed through certified practitioners",
                        "Pure, full-spectrum extract",
                        "No chemical additives",
                        "Non-dependency forming",
                        "Traditionally used for centuries"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
                        >
                            <CheckCircle2 className="w-5 h-5 text-neon flex-shrink-0" />
                            <span className="text-foreground text-sm md:text-base font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>

                <p className="text-neon font-semibold text-lg mb-8">
                    Your safety and legality are fully ensured.
                </p>

                <button onClick={onCTAClick} className="text-foreground underline underline-offset-4 hover:text-neon transition-colors">
                    👉 Begin the Qualification Process
                </button>
            </div>
        </section>
    );
};
