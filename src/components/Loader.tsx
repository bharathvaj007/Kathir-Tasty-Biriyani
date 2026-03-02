import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

const Loader = () => {
  // Smoke particles animation
  const smokeParticles = [1, 2, 3, 4, 5];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a130f]" // Rich dark brown
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <div className="relative">
        {/* Rising Smoke Particles */}
        {smokeParticles.map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white/20 rounded-full blur-xl"
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{ 
              y: -120, 
              opacity: [0, 0.6, 0], 
              scale: [0.5, 1.5, 2],
              x: (i % 2 === 0 ? 20 : -20) 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeOut" 
            }}
          />
        ))}

        {/* Biryani Pot Body */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="relative w-32 h-24 bg-spice-gradient rounded-b-3xl border-x-4 border-b-4 border-gold/30 shadow-2xl"
        >
          {/* Pot Handles */}
          <div className="absolute -left-4 top-4 w-4 h-8 border-2 border-gold/30 rounded-l-full" />
          <div className="absolute -right-4 top-4 w-4 h-8 border-2 border-gold/30 rounded-r-full" />
        </motion.div>

        {/* Lifting Pot Lid */}
        <motion.div 
          className="absolute -top-4 left-0 w-32 h-8 bg-gold rounded-t-full flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: -25, rotate: [-1, 1, -1] }}
          transition={{ 
            y: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
            rotate: { duration: 0.2, repeat: Infinity }
          }}
        >
          <div className="w-6 h-3 bg-warm-dark rounded-t-full" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h2 className="text-3xl font-display font-bold text-gradient-gold tracking-tighter">
          KATHIR TASTY BIRYANI
        </h2>
        <p className="text-saffron/60 font-sans text-xs uppercase tracking-[0.4em] mt-2">
          Brewing Authenticity...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;