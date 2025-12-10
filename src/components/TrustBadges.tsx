import { motion } from "framer-motion";
import { Shield, Leaf, Scale } from "lucide-react";

// Image strip contains all badges


export const TrustBadges = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center w-full max-w-5xl mx-auto px-4"
      >
        <img
          src="/organic.png"
          alt="Trust Badges - 100% Organic, Ayurvedic, Results, Doctor Prescribed, Ministry of Ayush"
          className="w-full h-auto object-contain md:max-w-4xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl text-center px-4"
      >
        <p className="font-sans font-medium text-lg md:text-xl lg:text-2xl text-foreground italic leading-relaxed">
          "What if the key to holistic healing was hidden in a plant revered for centuries?<br />
          At Cannalogic, we decode the sacred science of natural herb to transform your wellness journey. Begin the connection today."
        </p>
      </motion.div>
    </div>
  );
};
