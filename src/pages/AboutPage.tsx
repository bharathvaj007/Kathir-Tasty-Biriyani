import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import serviceDinein from "@/assets/service-dinein.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";
import serviceCatering from "@/assets/service-catering.jpg";

const services = [
  {
    image: serviceDinein,
    title: "Dine-In",
    desc: "Enjoy our biryani fresh from the kitchen in our warm, welcoming restaurant.",
  },
  {
    image: serviceDelivery,
    title: "Takeaway & Delivery",
    desc: "Can't visit? We'll bring the biryani to your doorstep — hot and fresh.",
  },
  {
    image: serviceCatering,
    title: "Catering & Events",
    desc: "Weddings, parties, or corporate events — we cater in bulk with the same quality.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Repeat animations on scroll
      mirror: true, // Animate while scrolling up
      easing: "ease-in-out",
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-[#1b120e] transition-colors duration-500"
    >
      <Navbar />

      {/* Header - Adaptive Background */}
      <section className="pt-28 pb-16 bg-gray-50 dark:bg-[#120c09] transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 text-center" data-aos="fade-down">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-saffron mb-3 font-bold">
            Know More
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="font-body text-gray-600 dark:text-warm-cream/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We're more than a restaurant — we're a family that loves feeding people
            the best biryani in Trichy.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-spice-gradient mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="rounded-3xl overflow-hidden bg-gray-50 dark:bg-[#251a15] border border-gray-100 dark:border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-saffron transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 dark:text-warm-cream/60 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#120c09] transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div data-aos="fade-right">
                <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-saffron mb-3">
                  Get in Touch
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">
                  Visit Us Today
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", content: "KK Nagar Main Road, Near Bus Stop, Trichy, Tamil Nadu 620021" },
                  { icon: Phone, title: "Phone", content: "+91 98765 43210", isLink: true },
                  { icon: Clock, title: "Hours", content: "Mon – Sun: 11:00 AM – 11:00 PM" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="w-12 h-12 rounded-2xl bg-spice-gradient flex items-center justify-center shrink-0 shadow-lg">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      {item.isLink ? (
                        <a href="tel:+919876543210" className="font-body text-sm text-gray-600 dark:text-warm-cream/60 hover:text-saffron transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-gray-600 dark:text-warm-cream/60">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Embed - High-End Container */}
            <div className="relative p-2 bg-white dark:bg-[#251a15] rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gold/20 overflow-hidden" data-aos="zoom-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d78.68!3d10.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzEyLjAiTiA3OMKwNDAnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="450"
                className="rounded-[2rem] grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Restaurant Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default AboutPage;