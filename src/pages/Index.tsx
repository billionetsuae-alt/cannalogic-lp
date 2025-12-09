import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SacredGeometryBg } from "@/components/SacredGeometryBg";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { StickyCTA } from "@/components/StickyCTA";
import { AssessmentModal } from "@/components/AssessmentModal";

const VSL_VIDEO_URL = "https://res.cloudinary.com/djwx0b9nj/video/upload/v1765290145/VSL_Thampi_Nagarjuna_1_t4cg84.mp4";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAssessment = () => setIsModalOpen(true);
  const closeAssessment = () => setIsModalOpen(false);

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

      {/* Hero */}
      <div className="relative z-10">
        <HeroSection onCTAClick={openAssessment} />
      </div>

      {/* Video Section */}
      <section className="relative z-10 px-4 pb-12 md:pb-16">
        <VideoSection videoUrl={VSL_VIDEO_URL} />
      </section>

      {/* Trust Badges */}
      <section className="relative z-10 py-10 md:py-12 px-4">
        <TrustBadges />
      </section>

      {/* Problem Section */}
      <div className="relative z-10">
        <ProblemSection />
      </div>

      {/* Solution Section */}
      <div className="relative z-10">
        <SolutionSection />
      </div>

      {/* Final CTA Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-secondary">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-divider mb-8"
          />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-5">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Take our 60-second assessment to discover if you're eligible for the Elevate Protocol.
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={openAssessment}
            className="btn-primary py-4 px-10 rounded-xl text-base md:text-lg inline-flex items-center gap-3 green-glow"
          >
            <span>START MY ASSESSMENT</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
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

      {/* Sticky CTA (Mobile) */}
      <StickyCTA onClick={openAssessment} />

      {/* Assessment Modal */}
      <AssessmentModal isOpen={isModalOpen} onClose={closeAssessment} />
    </main>
  );
};

export default Index;
