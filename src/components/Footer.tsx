import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gray-100 dark:bg-[#120c09] text-gray-600 dark:text-warm-cream/80 border-t border-gold/20 transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Section 1: Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  /* Matches Navbar sizes perfectly and adds shrink-0 so it stays a perfect circle */
                  className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src="/logo.png" 
                    alt="Kathir Tasty Biryani" 
                    /* Exactly identical to your Navbar: scale-[1.5] and translate-y-2 */
                    className="w-full h-full object-contain scale-[1.5] translate-y-2"
                  />
                </motion.div>
                <span className="text-2xl font-display font-bold text-gradient-gold">
                  Kathir Tasty Biryani
                </span>
              </Link>
            </div>
            <p className="font-body text-sm leading-relaxed opacity-80 max-w-xs">
              Serving the finest biryani in Trichy since generations. Every grain tells a story of tradition, love, and authentic flavors.
            </p>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-lg font-semibold text-saffron mb-5 tracking-wider uppercase text-xs">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Menu", path: "/menu" },
                { label: "About Us", path: "/about" },
                { label: "Moments", path: "/moments" }
              ].map((link) => (
                <motion.div key={link.path} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link 
                    to={link.path} 
                    className="font-sans text-sm hover:text-saffron transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold/40 rounded-full" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-lg font-semibold text-saffron mb-5 tracking-wider uppercase text-xs">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                <MapPin size={18} className="text-saffron mt-1 shrink-0" />
                <a href="https://www.google.com/maps/place/Kathir+Tasty+Biriyani/@10.7673836,78.6804916,17z/data=!3m1!4b1!4m6!3m5!1s0x3baa8b44775566bb:0xa94dc3cbea01d3b1!8m2!3d10.7673836!4d78.6830665!16s%2Fg%2F11sqfdpz_2?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D">3rd Main Rd, Renga Nagar, Krishna Moorthy Nagar, K K Nagar, Tiruchirappalli, Tamil Nadu 620021</a>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Phone size={18} className="text-saffron shrink-0" />
                <a href="tel:+919003554341" className="hover:text-saffron transition-colors">
                  +91 90035 54341
                </a>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Clock size={18} className="text-saffron shrink-0" />
                <span>11:00 AM – 11:00 PM</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Ordering & Copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50">Order Online Now</span>
            <div className="flex gap-4 md:gap-6">
              {/* Zomato Button */}
              <motion.a 
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.zomato.com/trichy/kathir-tastee-biriyani-centre-kk-nagar/order" 
                target="_blank"
                className="bg-[#cb202d] text-white px-7 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-xl"
              >
                Zomato <ExternalLink size={12}/>
              </motion.a>
              
              {/* Swiggy Button */}
              <motion.a 
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.swiggy.com/city/trichy/kathir-tastee-biryani-centre-renga-nagar-kk-nagar-rest654805" 
                target="_blank"
                className="bg-[#fc8019] text-white px-7 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-xl"
              >
                Swiggy <ExternalLink size={12}/>
              </motion.a>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="font-sans text-[10px] opacity-40 uppercase tracking-[0.2em]">
              © 2026 Kathir tasty biriyani. Crafted with ❤️ in Trichy.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;