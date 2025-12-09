import { motion } from "framer-motion";
import { Shield, Leaf, Scale } from "lucide-react";

const badges = [
  { img: "/organic.png", alt: "100% Organic" },
  { img: "/ayurveda.png", alt: "Ayurvedic Proprietary Medicine" },
  { img: "/result.png", alt: "100% Results" },
  { img: "/doctor.png", alt: "Doctor Prescribed" },
  { img: "/ministry of ayush.png", alt: "Ministry of Ayush" },
];

export const TrustBadges = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
      >
        {badges.map((badge, index) => (
          <motion.div
            key={badge.alt}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="w-20 md:w-28 lg:w-32"
          >
            <img
              src={badge.img}
              alt={badge.alt}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl text-center px-4"
      >
        <p className="font-serif font-medium text-lg md:text-xl lg:text-2xl text-foreground italic leading-relaxed">
          "What if the key to holistic healing was hidden in a plant revered for centuries?<br />
          At Cannalogic, we decode the sacred science of natural herb to transform your wellness journey. Begin the connection today."
        </p>
      </motion.div>
    </div>
  );
};
