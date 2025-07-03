import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface MultiStepFormProps {
  steps: Step[];
  currentStep: number;
  children: ReactNode;
}

export default function MultiStepForm({
  steps,
  currentStep,
  children,
}: MultiStepFormProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: index === currentStep ? 1.1 : 1,
                  opacity: index <= currentStep ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              >
                {index + 1}
              </motion.div>
              {index < steps.length - 1 && (
                <div
                  className={`w-20 h-0.5 mx-2 ${
                    index < currentStep
                      ? "bg-gradient-to-r from-primary to-purple-600"
                      : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-xl font-semibold text-foreground mb-1">
            {steps[currentStep]?.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {steps[currentStep]?.description}
          </p>
        </motion.div>
      </div>

      {/* Form Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
