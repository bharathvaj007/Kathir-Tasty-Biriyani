import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChefHat, Flame, Star, ArrowRight, Phone, UtensilsCrossed } from "lucide-react";

// Assets
import heroBiryani from "@/assets/hero-biryani.jpg";
import originStory from "@/assets/origin-story.jpg";
import storySpices from "@/assets/story-spices.jpg";
import storyDum from "@/assets/story-dum.jpg";

const storyContent = [
  {
    src: originStory,
    title: "Where It All Began",
    text: "Kathir Tasty Biryani began its journey decades ago as a modest kitchen in the heart of KK Nagar, Trichy. What started with a single copper pot and a passion for authentic flavors has today evolved into a culinary destination for biryani lovers across Tamil Nadu."
  },
  {
    src: storySpices,
    title: "The Secret Spices",
    text: "As the years passed, our 'secret masala' became a legend in Trichy. We never switched to machines; our spices are still crushed by hand to retain their essential oils and vibrant punch. This commitment to traditional methods allowed us to grow without losing our soul."
  },
  {
    src: storyDum,
    title: "The Art of Dum",
    text: "Today, we stand as a testament to the 'Dum' technique. By sealing the pots with dough and slow-cooking over firewood, we ensure every grain of rice is infused with the juice of the meat. It's a slow process in a fast world, but one bite tells you why it's worth it."
  },
];

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Scroll Progress Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  // Parallax values for Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-[#1b120e] transition-colors duration-500 overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <Navbar />

      {/* HERO SECTION - Enhanced Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ x: mousePos.x, y: mousePos.y, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 transition-transform duration-200 ease-out"
        >
          <img src={heroBiryani} alt="Biryani" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-500" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-saffron tracking-[0.4em] uppercase mb-4 text-[10px] md:text-sm"
          >
            Trichy's Culinary Landmark
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-8 leading-tight md:leading-[0.9]"
          >
            The Legend of <br /> <span className="text-gradient-gold">Traditional Dum</span>
          </motion.h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link to="/menu" className="w-full sm:w-auto group relative px-8 py-4 bg-spice-gradient rounded-full text-white font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2 text-sm">VIEW FULL MENU <ArrowRight size={18} /></span>
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 border border-white/40 dark:border-gold/50 rounded-full text-white dark:text-warm-cream font-bold text-sm hover:bg-white/10 transition-colors">
              VISIT US
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS - Responsive Padding & Staggered Entrance */}
      <section className="py-16 md:py-32 relative bg-white dark:bg-[#1b120e] transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { icon: Flame, title: "Pure Dum Style", desc: "Slow-cooked for 6 hours using traditional firewood for that smoky aroma." },
              { icon: ChefHat, title: "Secret Heritage", desc: "Recipes preserved for three generations, hand-ground spices only." },
              { icon: Star, title: "The Trichy Choice", desc: "Consistently voted the #1 Mutton Biryani in the KK Nagar region." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Animation triggers only once while scrolling down
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-3xl bg-gray-50 dark:bg-[#251a15] border border-gray-100 dark:border-gold/10 text-center group transition-all"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 bg-spice-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-warm-cream/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ZIG-ZAG STORY SECTION - Fixed Mobile Padding & Parallax Images */}
      <section className="py-16 md:py-32 bg-gray-50 dark:bg-[#1b120e] transition-colors duration-500 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">Our Story</h2>
            <div className="w-16 md:w-24 h-1 bg-saffron mx-auto" />
          </motion.div>

          <div className="space-y-20 md:space-y-40">
            {storyContent.map((item, i) => (
              <StoryBlock key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Full Dark Theme */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-[#120c09] text-white">
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[140%] h-[100%] bg-[radial-gradient(circle,rgba(255,80,0,0.1)_0%,transparent_70%)] blur-[80px]"
          />
        </div>
        
        {/* Steam Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 200, x: Math.random() * 800, opacity: 0 }}
              animate={{ y: -400, opacity: [0, 0.2, 0] }}
              transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, delay: i * 2 }}
              className="absolute bottom-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-8xl font-display font-bold mb-8 leading-tight">
              Experience the <br />
              <span className="text-gradient-gold">Legend of Dum</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
              <motion.a
                whileHover={{ y: -5 }}
                href="tel:+919003554341"
                className="w-full sm:w-auto group relative px-10 py-5 bg-[#8B4513] rounded-xl overflow-hidden shadow-2xl border-t border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5D2B06] to-[#A0522D]" />
                <div className="relative z-10 flex items-center justify-center gap-4">
                  <Phone size={20} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Call Now</p>
                    <p className="text-lg font-bold">+91 90035 54341</p>
                  </div>
                </div>
              </motion.a>

              <Link to="/menu" className="flex items-center gap-2 font-bold text-white hover:text-gold transition-colors">
                View Today's Specials <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

// Sub-component for Story Blocks to handle independent scroll parallax
const StoryBlock = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 relative"
      >
        <motion.div style={{ y: imgY }} className="relative group">
          <div className="absolute -inset-2 md:-inset-4 border border-gold/20 rounded-[1.5rem] md:rounded-[2rem] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />
          <div className="relative h-[250px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        style={{ y: textY }}
        className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left"
      >
        <span className="text-saffron font-sans font-bold tracking-widest uppercase text-xs">Step 0{index + 1}</span>
        <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-gold">{item.title}</h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-warm-cream/70 leading-relaxed font-body">{item.text}</p>
        <div className={`w-12 md:w-20 h-1 bg-gold/30 ${index % 2 !== 0 ? "lg:ml-auto" : ""}`} />
      </motion.div>
    </div>
  );
};

export default Index;