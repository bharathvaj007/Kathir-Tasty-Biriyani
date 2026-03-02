// App.tsx
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import MomentsPage from "./pages/MomentsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Initialize AOS with Repeat and Mirror
    AOS.init({
      duration: 1000,
      once: false,     // Animations will repeat when scrolling
      mirror: true,    // Elements animate out while scrolling past
      easing: "ease-in-out",
      offset: 100,
    });

    // 2. FIX: Stop the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Refresh AOS after loader hides
      setTimeout(() => AOS.refresh(), 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Only render routes if NOT loading */}
      {!loading && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/moments" element={<MomentsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="min-h-screen bg-white dark:bg-[#1b120e] transition-colors duration-500">
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;