// components/Navbar.tsx
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UtensilsCrossed, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const theme = useContext(ThemeContext);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = ["Home", "Menu", "Moments", "About"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0f0a07]/95 backdrop-blur-md border-b border-gold/20 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-spice-gradient flex items-center justify-center"
            >
              <UtensilsCrossed size={20} className="text-white" />
            </motion.div>
            <span className="text-xl md:text-2xl font-display font-bold text-gradient-gold">
              Kathir Tasty Biryani
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={theme?.toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-saffron hover:scale-110 transition-transform"
              aria-label="Toggle Theme"
            >
              {theme?.isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {navItems.map((label) => {
              const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative font-sans text-sm tracking-wider uppercase transition-colors ${
                    location.pathname === path 
                    ? "text-saffron" 
                    : "text-gray-600 dark:text-warm-cream/80 hover:text-saffron"
                  }`}
                >
                  {label}
                  {location.pathname === path && (
                    <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-saffron" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Right Icons (Theme + Burger) */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={theme?.toggleTheme}
              className="p-2 text-saffron"
            >
              {theme?.isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-saffron p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU CONTENT - THIS WAS MISSING */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0f0a07] border-b border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navItems.map((label) => {
                const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`text-lg font-display tracking-widest uppercase ${
                      location.pathname === path ? "text-saffron" : "text-gray-600 dark:text-warm-cream/80"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;