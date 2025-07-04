import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Zap,
  Shield,
  Book,
  ArrowRight,
  BarChart3,
  Settings,
  Users,
  Globe,
  Smartphone,
  Code,
  Database,
  ChevronDown,
} from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string | null;
}

export default function MegaMenu({
  isOpen,
  onClose,
  activeMenu,
}: MegaMenuProps) {
  const menuContent = {
    products: {
      title: "Products",
      sections: [
        {
          title: "Core Platform",
          items: [
            {
              name: "Analytics Dashboard",
              description: "Comprehensive analytics and insights",
              icon: <BarChart3 className="h-5 w-5" />,
              href: "#",
              badge: "Popular",
            },
            {
              name: "Team Collaboration",
              description: "Real-time collaboration tools",
              icon: <Users className="h-5 w-5" />,
              href: "#",
            },
            {
              name: "Project Management",
              description: "Streamlined project workflows",
              icon: <Settings className="h-5 w-5" />,
              href: "#",
            },
          ],
        },
        {
          title: "Integrations",
          items: [
            {
              name: "API Platform",
              description: "Powerful REST and GraphQL APIs",
              icon: <Code className="h-5 w-5" />,
              href: "#",
              badge: "New",
            },
            {
              name: "Database Connectors",
              description: "Connect to any database",
              icon: <Database className="h-5 w-5" />,
              href: "#",
            },
            {
              name: "Mobile SDK",
              description: "Native mobile integrations",
              icon: <Smartphone className="h-5 w-5" />,
              href: "#",
            },
          ],
        },
        {
          title: "Enterprise",
          items: [
            {
              name: "Advanced Security",
              description: "Enterprise-grade security features",
              icon: <Shield className="h-5 w-5" />,
              href: "#",
            },
            {
              name: "Custom Deployment",
              description: "On-premise and cloud options",
              icon: <Globe className="h-5 w-5" />,
              href: "#",
            },
          ],
        },
      ],
      featured: {
        title: "Featured Update",
        description: "Introducing AI-powered insights",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F2867204872b442768b8aef9d286536e0%2F288d5b322d2c4b7ba28b3eacc2ff9d82?format=webp&width=400",
        href: "#",
      },
    },
    solutions: {
      title: "Solutions",
      sections: [
        {
          title: "By Team Size",
          items: [
            {
              name: "Startups",
              description: "Perfect for growing teams",
              href: "#",
            },
            {
              name: "Small Business",
              description: "Scale with confidence",
              href: "#",
            },
            {
              name: "Enterprise",
              description: "Enterprise-grade solutions",
              href: "#",
              badge: "Popular",
            },
          ],
        },
        {
          title: "By Industry",
          items: [
            {
              name: "Technology",
              description: "Built for tech companies",
              href: "#",
            },
            {
              name: "Healthcare",
              description: "HIPAA-compliant solutions",
              href: "#",
            },
            {
              name: "Finance",
              description: "Secure financial workflows",
              href: "#",
            },
            {
              name: "Education",
              description: "Academic institutions",
              href: "#",
            },
          ],
        },
        {
          title: "Use Cases",
          items: [
            {
              name: "Remote Work",
              description: "Distributed team management",
              href: "#",
            },
            {
              name: "Digital Transformation",
              description: "Modernize your processes",
              href: "#",
            },
            {
              name: "Compliance",
              description: "Meet regulatory requirements",
              href: "#",
            },
          ],
        },
      ],
      featured: {
        title: "Customer Success",
        description: "See how teams achieve 300% productivity gains",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F2867204872b442768b8aef9d286536e0%2Ff96eec1493204f12832a2bd6b0c7e38b?format=webp&width=400",
        href: "#",
      },
    },
    resources: {
      title: "Resources",
      sections: [
        {
          title: "Learn",
          items: [
            {
              name: "Documentation",
              description: "Complete guides and API reference",
              icon: <Book className="h-5 w-5" />,
              href: "#",
            },
            {
              name: "Tutorials",
              description: "Step-by-step learning paths",
              href: "#",
            },
            {
              name: "Best Practices",
              description: "Expert tips and strategies",
              href: "#",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              name: "Developer Forum",
              description: "Connect with other developers",
              href: "#",
            },
            {
              name: "Slack Community",
              description: "Join our active community",
              href: "#",
              badge: "Active",
            },
            {
              name: "Events & Webinars",
              description: "Live and recorded sessions",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              name: "Help Center",
              description: "Find answers quickly",
              href: "#",
            },
            {
              name: "Contact Support",
              description: "Get help from our team",
              href: "#",
            },
            {
              name: "Status Page",
              description: "System status and updates",
              href: "#",
            },
          ],
        },
      ],
      featured: {
        title: "Latest Blog Posts",
        description: "Stay updated with the latest insights",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F2867204872b442768b8aef9d286536e0%2F288d5b322d2c4b7ba28b3eacc2ff9d82?format=webp&width=400",
        href: "#",
      },
    },
  };

  const currentMenu = activeMenu
    ? menuContent[activeMenu as keyof typeof menuContent]
    : null;

  return (
    <AnimatePresence>
      {isOpen && currentMenu && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Mega Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-xl"
          >
            <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-12 gap-8">
                {/* Main Content - 9 columns */}
                <div className="col-span-9">
                  <div className="grid grid-cols-3 gap-8">
                    {currentMenu.sections.map((section, index) => (
                      <div key={section.title}>
                        <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                onClick={onClose}
                              >
                                {item.icon && (
                                  <div className="text-primary mt-0.5">
                                    {item.icon}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                      {item.name}
                                    </p>
                                    {item.badge && (
                                      <span
                                        className={cn(
                                          "px-2 py-1 text-xs font-medium rounded-full",
                                          item.badge === "New" &&
                                            "bg-primary/10 text-primary",
                                          item.badge === "Popular" &&
                                            "bg-orange-100 text-orange-700",
                                          item.badge === "Active" &&
                                            "bg-green-100 text-green-700",
                                        )}
                                      >
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Content - 3 columns */}
                <div className="col-span-3">
                  <div className="bg-gradient-to-br from-primary/5 to-emerald-600/5 border border-primary/20 rounded-xl p-6">
                    <div className="mb-4">
                      <img
                        src={currentMenu.featured.image}
                        alt={currentMenu.featured.title}
                        className="w-full h-32 object-cover rounded-lg opacity-60"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {currentMenu.featured.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {currentMenu.featured.description}
                    </p>
                    <Link
                      to={currentMenu.featured.href}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                      onClick={onClose}
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 space-y-3">
                    <Link
                      to="#"
                      className="block p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                      onClick={onClose}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">View All Features</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </Link>
                    <Link
                      to="#"
                      className="block p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                      onClick={onClose}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Contact Sales</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
