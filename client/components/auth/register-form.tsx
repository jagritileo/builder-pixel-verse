import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingPasswordInput } from "@/components/ui/floating-password-input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import MultiStepForm from "@/components/ui/multi-step-form";
import { Mail, User, Lock, Sparkles, Check } from "lucide-react";

const steps = [
  {
    id: "personal",
    title: "Personal Information",
    description: "Tell us about yourself",
  },
  {
    id: "account",
    title: "Account Details",
    description: "Create your secure account",
  },
  {
    id: "verification",
    title: "Welcome Aboard!",
    description: "You're all set to get started",
  },
];

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      console.log("Registration completed:", formData);
    } else {
      handleNext();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FloatingInput
                id="firstName"
                type="text"
                label="First Name"
                icon={<User className="h-4 w-4" />}
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <FloatingInput
                id="lastName"
                type="text"
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <FloatingInput
              id="email"
              type="email"
              label="Email Address"
              icon={<Mail className="h-4 w-4" />}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />

            <FloatingPasswordInput
              id="password"
              label="Password"
              icon={<Lock className="h-4 w-4" />}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />

            <FloatingPasswordInput
              id="confirmPassword"
              label="Confirm Password"
              icon={<Lock className="h-4 w-4" />}
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
            />

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  handleInputChange("agreeToTerms", checked as boolean)
                }
              />
              <Label
                htmlFor="terms"
                className="text-sm text-foreground/80 leading-relaxed"
              >
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto"
            >
              <Check className="h-10 w-10 text-white" />
            </motion.div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Welcome to FusionApp!
              </h3>
              <p className="text-muted-foreground">
                Your account has been created successfully. You can now start
                exploring our platform.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 text-primary mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Pro Tip</span>
              </div>
              <p className="text-sm text-foreground/80">
                Complete your profile to unlock all features and get the best
                experience.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MultiStepForm steps={steps} currentStep={currentStep}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderStepContent()}

        <div className="flex space-x-3 pt-4">
          {currentStep > 0 && currentStep < steps.length - 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="flex-1 border-border/50"
            >
              Back
            </Button>
          )}

          {currentStep < steps.length - 1 ? (
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-medium"
            >
              {currentStep === 1 ? "Create Account" : "Continue"}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-medium"
            >
              Get Started
            </Button>
          )}
        </div>
      </form>
    </MultiStepForm>
  );
}
