import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
  {
    id: 4,
    question: "What is your age range?",
    options: ["18-25", "26-35", "36-50", "50+"],
  },
  {
    id: 5,
    question: "What is your weight range?",
    options: ["<60kg", "60-80kg", "80-100kg", ">100kg"],
  },
  {
    id: 6,
    question: "Do you have any specific lifestyle issues?",
    options: ["High Stress", "Poor Sleep", "Sedentary Lifestyle", "Dietary Issues", "None"],
  },
];

export const AssessmentModal = ({ isOpen, onClose }: AssessmentModalProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const totalSteps = questions.length + 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: answer }));
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phoneNumber: formData.phone,
      goal: answers[0],
      duration: answers[1],
      previousAttempts: answers[2],
      age: answers[3],
      weight: answers[4],
      lifestyleIssues: answers[5],
    };

    try {
      const response = await fetch("https://n8n-642200223.kloudbeansite.com/webhook/assesment-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Wait a bit to show the "Analyzing" state for UX
        await new Promise((resolve) => setTimeout(resolve, 2000));
        onClose();
        navigate("/offer");
        toast.success("Assessment submitted successfully!");
      } else {
        throw new Error("Failed to submit assessment");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
      setIsAnalyzing(false);
    }
  };

  const resetAndClose = () => {
    setCurrentStep(0);
    setAnswers({});
    setFormData({ name: "", email: "", phone: "" });
    setIsAnalyzing(false);
    onClose();
  };

  const isLeadForm = currentStep >= questions.length;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={resetAndClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-lg bg-background border border-border rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <button
              onClick={resetAndClose}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar mx-5 mt-4">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 min-h-[380px] flex flex-col">
            <AnimatePresence mode="wait">
              {!isLeadForm ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1"
                >
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-6">
                    {questions[currentStep].question}
                  </h2>
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option) => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleAnswer(option)}
                        className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${answers[currentStep] === option
                          ? "border-primary bg-jungle-light text-foreground"
                          : "border-border hover:border-primary/30 hover:bg-secondary text-foreground"
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
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1"
                >
                  {!isAnalyzing ? (
                    <>
                      <div className="text-center mb-6">
                        <p className="text-primary text-sm font-medium mb-2">
                          Almost there...
                        </p>
                        <h2 className="font-sans text-xl md:text-2xl font-bold text-foreground">
                          Enter your details to check eligibility
                        </h2>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="w-full p-4 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full p-4 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="w-full p-4 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full btn-primary py-4 px-8 rounded-xl text-base flex items-center justify-center gap-2 mt-6"
                        >
                          <span>Check Eligibility</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </form>
                    </>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center py-10">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="w-10 h-10 text-primary" />
                      </motion.div>
                      <p className="mt-5 font-sans text-lg text-foreground">
                        Analyzing your profile...
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Please wait a moment
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
