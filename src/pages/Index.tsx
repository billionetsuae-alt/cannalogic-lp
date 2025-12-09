import { useState } from "react";
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
    <main className="min-h-screen bg-background relative">
      <SacredGeometryBg />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-center py-6 px-4 border-b border-border/30">
        <Logo />
      </header>

      {/* Hero */}
      <div className="relative z-10">
        <HeroSection onCTAClick={openAssessment} />
      </div>

      {/* Video Section */}
      <section className="relative z-10 px-4 pb-16">
        <VideoSection videoUrl={VSL_VIDEO_URL} />
      </section>

      {/* Trust Badges */}
      <section className="relative z-10 py-12 px-4">
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
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take our 60-second assessment to discover if you're eligible for the Elevate Protocol.
          </p>
          <button
            onClick={openAssessment}
            className="btn-gold py-4 px-10 rounded-lg text-lg inline-flex items-center gap-3"
          >
            <span>START MY ASSESSMENT</span>
          </button>
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

      {/* Sticky CTA (Mobile) */}
      <StickyCTA onClick={openAssessment} />

      {/* Assessment Modal */}
      <AssessmentModal isOpen={isModalOpen} onClose={closeAssessment} />
    </main>
  );
};

export default Index;
