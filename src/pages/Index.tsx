import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { HeroSection } from "@/components/HeroSection";
// import { VideoSection } from "@/components/VideoSection"; // Merged into Hero
import { TrustBadges } from "@/components/TrustBadges";
// import { ProblemSection } from "@/components/ProblemSection"; // Removed
import { TheLieSection } from "@/components/TheLieSection";
import { ScienceSection } from "@/components/ScienceSection";
import { BenefitsSection } from "@/components/SolutionSection"; // Renamed inside file
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LegalitySection } from "@/components/LegalitySection";
import { StickyCTA } from "@/components/StickyCTA";
import { AssessmentModal } from "@/components/AssessmentModal";
import { FAQSection } from "@/components/FAQSection";
import { LeafBackground } from "@/components/LeafBackground";

// const VSL_VIDEO_URL = "https://res.cloudinary.com/djwx0b9nj/video/upload/v1765290145/VSL_Thampi_Nagarjuna_1_t4cg84.mp4"; // Handled in Hero

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const openAssessment = () => setIsModalOpen(true);
  const closeAssessment = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated Leaf Background - Fixed Layer */}
      <LeafBackground />

      {/* Hero */}
      <div className="relative z-10">
        <HeroSection onCTAClick={openAssessment} />
      </div>

      {/* Trust Badges */}
      <section className="relative z-10 py-8 px-4 border-b border-emerald-100 bg-white/30 backdrop-blur-sm">
        <TrustBadges />
      </section>



      {/* The Lie Section */}
      <div className="relative z-10">
        <TheLieSection onCTAClick={openAssessment} />
      </div>

      {/* Science/ECS Section */}
      <div className="relative z-10">
        <ScienceSection />
      </div>

      {/* Benefits Section */}
      <div className="relative z-10">
        <BenefitsSection />
      </div>

      {/* Testimonials */}
      <div className="relative z-10">
        <TestimonialsSection />
      </div>

      {/* Legality */}
      <div className="relative z-10">
        <LegalitySection onCTAClick={openAssessment} />
      </div>

      {/* Final CTA / Offer Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-emerald-100/40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center border-2 border-primary/20 rounded-3xl p-8 md:p-12 bg-background/50 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent" />

          <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-6">
            This Medicine Is Not for Everyone. <br />
            <span className="text-neon">Only the Ready Will Be Invited.</span>
          </h2>
          <div className="text-muted-foreground text-lg space-y-4 mb-10 max-w-xl mx-auto">
            <p>We do not sell this openly. We do not offer it to the masses.</p>
            <p className="font-semibold text-foreground">Why? Because true awakening requires readiness — mentally, emotionally, and spiritually.</p>
            <p>That’s why access begins with a simple assessment.</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openAssessment}
            className="btn-primary py-4 px-12 rounded-full text-xl font-bold inline-flex items-center gap-2 green-glow"
          >
            Take the Assessment <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="mt-4 text-sm text-muted-foreground">
            Once you're qualified, a practitioner will craft your personalized guidance plan.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <div className="relative z-10">
        <FAQSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-border bg-black text-center">
        <div className="max-w-4xl mx-auto text-sm text-zinc-500">
          <p>© 2024 CannaLogic. All rights reserved.</p>
          <p className="mt-2 text-xs">
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>

      {/* Sticky CTA (Mobile) */}
      <StickyCTA onClick={openAssessment} />

      {/* Assessment Modal */}
      <AssessmentModal isOpen={isModalOpen} onClose={closeAssessment} />
    </main>
  );
};

export default Index;
