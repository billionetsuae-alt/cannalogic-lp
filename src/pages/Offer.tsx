import { motion } from "framer-motion";
import { Check, Shield, Truck, Clock } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SacredGeometryBg } from "@/components/SacredGeometryBg";

const features = [
  "Vijaya Leaf Extract",
  "Full Spectrum Formula",
  "Precision Dosing Technology",
  "Lab Tested & Certified",
  "30-Day Supply",
];

const guarantees = [
  { icon: Shield, text: "100% Money Back Guarantee" },
  { icon: Truck, text: "Free Discreet Shipping" },
  { icon: Clock, text: "Ships Within 24 Hours" },
];

const Offer = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <SacredGeometryBg />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-center py-5 px-4 border-b border-border"
      >
        <Logo />
      </motion.header>

      {/* Approved Section */}
      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          {/* Approved Stamp */}
          <motion.div
            initial={{ scale: 1.5, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: -3 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 15 }}
            className="approved-stamp inline-block mb-8"
          >
            APPROVED
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4"
          >
            Your physiology is a match for the{" "}
            <span className="text-primary">Elevate Protocol</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground text-base md:text-lg"
          >
            Based on your assessment, you qualify for our premium formulation.
          </motion.p>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative z-10 py-10 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square bg-secondary rounded-3xl border border-border flex items-center justify-center p-8 md:p-12">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-48 md:w-64"
                >
                  <img
                    src="/elevate product image.png"
                    alt="Elevate Premium Bottle"
                    className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-2">
                  Elevate Premium
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  The complete protocol for mental clarity and inner peace.
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 text-foreground text-sm md:text-base"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-jungle-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
                    ₹2,999
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹4,999
                  </span>
                  <span className="text-sm text-primary font-medium bg-jungle-light px-2 py-1 rounded">
                    Save 40%
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full btn-primary py-4 px-8 rounded-xl text-base md:text-lg font-semibold green-glow"
              >
                SECURE MY SUPPLY
              </motion.button>

              {/* Guarantees */}
              <div className="flex flex-wrap gap-4 pt-2">
                {guarantees.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
                  >
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bundle Option */}
      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-6 md:p-8 bg-card border-2 border-primary/30 rounded-2xl overflow-hidden"
          >
            {/* Best Value Tag */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 text-xs md:text-sm font-semibold rounded-bl-xl">
              BEST VALUE
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Bundle Visual */}
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: i === 2 ? [-3, 3, -3] : [3, -3, 3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="w-20 md:w-24 relative"
                    style={{ transform: `rotate(${(i - 2) * 6}deg)`, zIndex: i }}
                  >
                    <img
                      src="/elevate product image.png"
                      alt="Elevate Premium Bottle"
                      className="w-full h-auto object-contain drop-shadow-xl"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Bundle Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  3-Month Protocol Bundle
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete transformation package with maximum results.
                </p>
                <div className="flex items-baseline gap-3 justify-center md:justify-start flex-wrap">
                  <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    ₹6,999
                  </span>
                  <span className="text-base text-muted-foreground line-through">
                    ₹14,997
                  </span>
                  <span className="text-xs text-primary font-medium bg-jungle-light px-2 py-1 rounded">
                    Save 53%
                  </span>
                </div>
              </div>

              {/* Bundle CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline py-3 px-6 rounded-xl font-semibold text-sm md:text-base whitespace-nowrap"
              >
                GET THE BUNDLE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 CannaLogic. All rights reserved.</p>
          <p className="mt-2 text-xs">
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Offer;
