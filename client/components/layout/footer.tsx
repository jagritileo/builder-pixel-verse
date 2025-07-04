import { Link } from "react-router-dom";
import {
  Twitter,
  LinkedIn,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                FusionApp
              </span>
            </h3>
            <p className="text-foreground/80 mb-8">
              Get the latest updates, tips, and exclusive content delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                FusionApp
              </span>
            </Link>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              FusionApp is the next generation platform designed to transform
              how teams collaborate, innovate, and achieve their goals. Built
              with modern technology and user-first design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <LinkedIn className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                "Features",
                "Integrations",
                "Pricing",
                "API Documentation",
                "Changelog",
                "Roadmap",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Press Kit",
                "Partners",
                "Investors",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Contact Support",
                "Status Page",
                "Community",
                "Training",
                "Security",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email Us</p>
                <a
                  href="mailto:hello@fusionapp.com"
                  className="text-foreground/70 hover:text-primary"
                >
                  hello@fusionapp.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Call Us</p>
                <a
                  href="tel:+1-555-123-4567"
                  className="text-foreground/70 hover:text-primary"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Visit Us</p>
                <p className="text-foreground/70">
                  123 Innovation Drive, Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-foreground/70">
              <span>© {currentYear} FusionApp. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by the FusionApp Team.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
