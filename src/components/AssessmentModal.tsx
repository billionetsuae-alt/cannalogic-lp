import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    question: "What is your primary goal?",
    options: [
      "Silence Mental Noise",
      "Deepen Sleep",
      "Manage Discomfort",
      "Spiritual Focus",
    ],
  },
  {
    id: 2,
    question: "How long have you been dealing with this?",
    options: ["Less than 6 Months", "1-5 Years", "5+ Years", "As long as I can remember"],
  },
  {
    id: 3,
    question: "Have you tried other solutions that failed?",
    options: ["Yes, many times", "A few attempts", "Not really", "This is my first step"],
  },
];

export const AssessmentModal = ({ isOpen, onClose }: AssessmentModalProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const totalSteps = questions.length + 1; // questions + lead form
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: answer }));
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate analysis
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    onClose();
    navigate("/offer");
  };

  const isLeadForm = currentStep >= questions.length;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative z-10 w-full max-w-lg mx-4 bg-card border border-border rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar mx-6 mt-4">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Content */}
          <div className="p-6 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              {!isLeadForm ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                    {questions[currentStep].question}
                  </h2>
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option) => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option)}
                        className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                          answers[currentStep] === option
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border hover:border-accent/50 hover:bg-muted/50 text-foreground/80"
                        }`}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="lead-form"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  {!isAnalyzing ? (
                    <>
                      <div className="text-center mb-6">
                        <p className="text-accent text-sm font-medium mb-2">
                          Analyzing your profile...
                        </p>
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                          To finalize eligibility, enter your details
                        </h2>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full p-4 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full p-4 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                            className="w-full p-4 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full btn-gold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-3 mt-6"
                        >
                          <span>Check Eligibility</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="w-12 h-12 text-accent" />
                      </motion.div>
                      <p className="mt-6 font-serif text-xl text-foreground">
                        Analyzing your profile...
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Please wait while we evaluate your eligibility
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
