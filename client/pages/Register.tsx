import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import RegisterForm from "@/components/auth/register-form";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 transition-colors duration-300">
      <Navbar />

      <div className="pt-20 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Marketing content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  Join the{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Future
                  </span>{" "}
                  of Innovation
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  Create your account in minutes and unlock a world of
                  possibilities with FusionApp.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Lightning Fast Setup",
                    description:
                      "Get started in under 2 minutes with our streamlined onboarding process.",
                  },
                  {
                    title: "Enterprise Security",
                    description:
                      "Your data is protected with bank-level encryption and security measures.",
                  },
                  {
                    title: "24/7 Support",
                    description:
                      "Our expert team is always here to help you succeed.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-full border-2 border-background flex items-center justify-center text-white text-sm font-medium"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Join 10,000+ users
                    </p>
                    <p className="text-xs text-foreground/60">
                      who trust FusionApp
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Registration form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full"
            >
              <div className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8 lg:hidden">
                  <h1 className="text-3xl font-bold mb-2">
                    Create Your{" "}
                    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      Account
                    </span>
                  </h1>
                  <p className="text-foreground/70">
                    Join thousands of users already using FusionApp
                  </p>
                </div>

                <RegisterForm />

                <div className="mt-8 pt-6 border-t border-border/50 text-center">
                  <p className="text-sm text-foreground/60">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
