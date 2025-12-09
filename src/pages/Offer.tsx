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
    <main className="min-h-screen bg-background relative">
      <SacredGeometryBg />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-center py-6 px-4 border-b border-border/30">
        <Logo />
      </header>

      {/* Approved Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Approved Stamp */}
          <motion.div
            initial={{ scale: 2, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: -3 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="approved-stamp inline-block mb-8"
          >
            APPROVED
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-foreground mb-4"
          >
            Your physiology is a match for the{" "}
            <span className="text-accent">Elevate Protocol</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground text-lg"
          >
            Based on your assessment, you qualify for our premium formulation.
          </motion.p>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-card to-secondary/30 rounded-3xl border border-border flex items-center justify-center p-12">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full" />
                  {/* Bottle Placeholder */}
                  <div className="relative w-48 h-72 bg-gradient-to-b from-primary via-primary to-jungle rounded-3xl flex items-center justify-center shadow-2xl">
                    <div className="text-center px-4">
                      <span className="font-serif text-2xl text-primary-foreground font-semibold">
                        ELEVATE
                      </span>
                      <div className="mt-2 text-xs text-primary-foreground/70">
                        Full Spectrum Extract
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  Elevate Premium
                </h2>
                <p className="text-muted-foreground">
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
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-serif font-bold text-accent">
                    ₹2,999
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹4,999
                  </span>
                  <span className="text-sm text-primary font-medium">
                    Save 40%
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-gold py-5 px-8 rounded-xl text-lg font-semibold animate-pulse-glow"
              >
                SECURE MY SUPPLY
              </motion.button>

              {/* Guarantees */}
              <div className="flex flex-wrap gap-4 pt-4">
                {guarantees.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <item.icon className="w-4 h-4 text-accent" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bundle Option */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 bg-card border-2 border-accent/50 rounded-3xl overflow-hidden"
          >
            {/* Best Value Tag */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold rounded-bl-xl">
              BEST VALUE
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Bundle Visual */}
              <div className="flex -space-x-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-28 bg-gradient-to-b from-primary to-jungle rounded-2xl border-2 border-card flex items-center justify-center shadow-lg"
                    style={{ transform: `rotate(${(i - 2) * 8}deg)` }}
                  >
                    <span className="font-serif text-xs text-primary-foreground">
                      ELEVATE
                    </span>
                  </div>
                ))}
              </div>

              {/* Bundle Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  3-Month Protocol Bundle
                </h3>
                <p className="text-muted-foreground mb-4">
                  Complete transformation package with maximum results.
                </p>
                <div className="flex items-baseline gap-3 justify-center md:justify-start">
                  <span className="text-3xl font-serif font-bold text-accent">
                    ₹6,999
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹14,997
                  </span>
                  <span className="text-sm text-primary font-medium">
                    Save 53%
                  </span>
                </div>
              </div>

              {/* Bundle CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold py-4 px-8 rounded-xl font-semibold whitespace-nowrap"
              >
                GET THE BUNDLE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border/30">
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
