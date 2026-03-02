import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import momentCelebration from "@/assets/moment-celebration.jpg";
import heroBiryani from "@/assets/hero-biryani.jpg";
import originStory from "@/assets/origin-story.jpg";
import chickenBiryani from "@/assets/chicken-biryani.jpg";
import tandooriChicken from "@/assets/tandoori-chicken.jpg";

const moments = [
  { title: "1000th Biryani Order", desc: "A proud moment for our small kitchen that started as a family dream.", image: momentCelebration, date: "March 2024" },
  { title: "Local Food Festival", desc: "Our Mutton Biryani was the star attraction at the Trichy Food Festival.", image: heroBiryani, date: "Jan 2025" },
  { title: "Celebrity Chef Visit", desc: "A renowned chef praised our traditional dum cooking method.", image: originStory, date: "Aug 2025" },
  { title: "Grand Renovation", desc: "Modern equipment while keeping our traditional clay oven soul.", image: chickenBiryani, date: "Nov 2025" },
];

const MomentsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-[#1b120e] transition-colors duration-500"
    >
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16 bg-gray-50 dark:bg-[#120c09] transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 text-center" data-aos="fade-down">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-saffron mb-3 font-bold">
            Our Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Memorable <span className="text-gradient-gold">Moments</span>
          </h1>
          <p className="font-body text-gray-600 dark:text-warm-cream/60 max-w-xl mx-auto text-sm md:text-base">
            Every milestone and celebration that defines Kathir Tasty Biryani.
          </p>
        </div>
      </section>

      {/* Moments Grid - Alternating Side Reveal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24 md:space-y-32">
            {moments.map((moment, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <motion.div 
                  className="w-full lg:w-1/2"
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 border-2 border-gold/10 rounded-[2rem] translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                    <div className="relative h-[250px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <div 
                  className="w-full lg:w-1/2 space-y-4 text-center lg:text-left"
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <span className="inline-block px-4 py-1 bg-saffron/10 text-saffron font-sans text-xs font-bold uppercase tracking-widest rounded-full">
                    {moment.date}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-gold">
                    {moment.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-warm-cream/70 leading-relaxed font-body">
                    {moment.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default MomentsPage;