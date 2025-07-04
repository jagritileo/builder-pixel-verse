import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Zap,
  Shield,
  Users,
  BarChart3,
  Settings,
  Book,
  HelpCircle,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const menuItems = [
    {
      title: "Products",
      icon: <Zap className="h-4 w-4" />,
      items: [
        {
          label: "Platform Overview",
          href: "#",
          description: "Complete solution overview",
        },
        {
          label: "Analytics",
          href: "#",
          description: "Advanced analytics dashboard",
        },
        {
          label: "Integrations",
          href: "#",
          description: "Connect with your tools",
        },
        {
          label: "API",
          href: "#",
          description: "Developer resources",
        },
      ],
    },
    {
      title: "Solutions",
      icon: <Shield className="h-4 w-4" />,
      items: [
        {
          label: "For Teams",
          href: "#",
          submenu: [
            { label: "Small Teams", href: "#" },
            { label: "Enterprise", href: "#" },
            { label: "Remote Teams", href: "#" },
          ],
        },
        {
          label: "By Industry",
          href: "#",
          submenu: [
            { label: "Technology", href: "#" },
            { label: "Healthcare", href: "#" },
            { label: "Finance", href: "#" },
            { label: "Education", href: "#" },
          ],
        },
        {
          label: "Use Cases",
          href: "#",
          submenu: [
            { label: "Project Management", href: "#" },
            { label: "Team Collaboration", href: "#" },
            { label: "Workflow Automation", href: "#" },
          ],
        },
      ],
    },
    {
      title: "Resources",
      icon: <Book className="h-4 w-4" />,
      items: [
        {
          label: "Documentation",
          href: "#",
          description: "Complete guides and tutorials",
        },
        {
          label: "Blog",
          href: "#",
          description: "Latest insights and updates",
        },
        {
          label: "Case Studies",
          href: "#",
          description: "Customer success stories",
        },
        {
          label: "Webinars",
          href: "#",
          description: "Live and on-demand sessions",
        },
      ],
    },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              FusionApp
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <DropdownMenu key={menu.title}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-1 text-foreground/80 hover:text-foreground"
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {menu.items.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <span>{item.label}</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            {item.submenu.map((subItem) => (
                              <DropdownMenuItem key={subItem.label} asChild>
                                <Link to={subItem.href}>{subItem.label}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      ) : (
                        <DropdownMenuItem asChild>
                          <Link
                            to={item.href}
                            className="flex flex-col items-start"
                          >
                            <span className="font-medium">{item.label}</span>
                            {item.description && (
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            {/* Additional Menu Items */}
            <Link
              to="#"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-foreground/80 hover:text-foreground"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>Support</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Get Help</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="#" className="flex items-center">
                    <Book className="h-4 w-4 mr-2" />
                    Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="#" className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="#" className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Status Page
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {location.pathname !== "/register" && (
              <Link to="/register">
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-medium px-6">
                  Get Started
                </Button>
              </Link>
            )}
            {location.pathname !== "/" && (
              <Link to="/">
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
    </motion.nav>
  );
}
