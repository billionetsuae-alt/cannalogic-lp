import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is this legal?",
        answer: "Yes. This is a 100% legal Ayurvedic proprietary medicine, approved by the Ministry of AYUSH. It is dispensed via a valid prescription from a certified Ayurvedic doctor, which we facilitate through our assessment process."
    },
    {
        question: "Will I get 'high'?",
        answer: "Our full-spectrum extract is balanced for therapeutic use. While it connects you to a deeper state of relaxation and clarity, it is designed to align your consciousness, not impair your function. It is non-dependency forming and safe when used as directed."
    },
    {
        question: "Who is this for?",
        answer: "This is for modern seekers—professionals, creatives, and individuals feeling 'disconnected', stressed, or emotionally heavy. If you are looking for natural alignment, better sleep, and emotional stability without chemical dependance, this is for you."
    },
    {
        question: "How do I take it?",
        answer: "The medicine comes in liquid drop form. You place the prescribed amount under your tongue (sublingual) for maximum absorption. Your personalized dosage guide will be provided after your consultation."
    },
    {
        question: "Is it addictive?",
        answer: "No. Unlike pharmaceutical anxiolytics or sleep aids, full-spectrum cannabis extract works with your body's natural Endocannabinoid System to restore balance. It does not create chemical dependency."
    }
];

export const FAQSection = () => {
    return (
        <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl md:text-5xl text-foreground text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ faq, index }: { faq: any; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-border rounded-xl bg-card overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/20 transition-colors"
            >
                <span className="font-serif text-lg md:text-xl font-medium text-foreground pr-8">
                    {faq.question}
                </span>
                <span className={`p-2 rounded-full border border-primary/20 bg-primary/5 text-neon transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <Plus size={20} />
                </span>
            </button>

            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50">
                    {faq.answer}
                </div>
            </motion.div>
        </motion.div>
    );
};
