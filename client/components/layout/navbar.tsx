import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import MegaMenu from "@/components/ui/mega-menu";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Zap,
  Shield,
  Book,
  HelpCircle,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const handleMegaMenuToggle = (menuName: string) => {
    if (activeMegaMenu === menuName && isMegaMenuOpen) {
      setIsMegaMenuOpen(false);
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuName);
      setIsMegaMenuOpen(true);
    }
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
    setActiveMegaMenu(null);
  };

  const megaMenuItems = [
    {
      title: "Products",
      key: "products",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      title: "Solutions",
      key: "solutions",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: "Resources",
      key: "resources",
      icon: <Book className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={closeMegaMenu}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                FusionApp
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {megaMenuItems.map((menu) => (
                <Button
                  key={menu.key}
                  variant="ghost"
                  className="flex items-center space-x-1 text-foreground/80 hover:text-foreground"
                  onClick={() => handleMegaMenuToggle(menu.key)}
                >
                  {menu.icon}
                  <span>{menu.title}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${
                      activeMegaMenu === menu.key && isMegaMenuOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </Button>
              ))}

              {/* Additional Menu Items */}
              <Link
                to="#"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={closeMegaMenu}
              >
                Pricing
              </Link>

              <Link
                to="#"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={closeMegaMenu}
              >
                Support
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {location.pathname !== "/register" && (
                <Link to="/register" onClick={closeMegaMenu}>
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-medium px-6">
                    Get Started
                  </Button>
                </Link>
              )}
              {location.pathname !== "/" && (
                <Link to="/" onClick={closeMegaMenu}>
                  <Button
                    variant="ghost"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Home
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={closeMegaMenu}
          activeMenu={activeMegaMenu}
        />
      </motion.nav>

      {/* Click outside to close */}
      {isMegaMenuOpen && (
        <div className="fixed inset-0 z-30" onClick={closeMegaMenu} />
      )}
    </>
  );
}
