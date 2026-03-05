import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Assets
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import chickenBiryani from "@/assets/chicken-biryani.jpg";
import tandooriChicken from "@/assets/tandoori-chicken.jpg";
import parottaCurry from "@/assets/parotta-curry.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  availableIn?: string;
}

const menuCategories = [
  {
    title: "Biryani Specials",
    subtitle: "Our pride — slow-cooked dum biryani",
    items: [
      {
        name: "Mutton Biryani",
        description: "Our signature dish — tender mutton slow-cooked with aromatic seeragasamba rice and secret spices.",
        price: "₹280",
        image: muttonBiryani,
        tag: "Bestseller",
      },
      {
        name: "Chicken Biryani",
        description: "Juicy chicken pieces layered with fragrant Seeraga Samba rice, served with onions and flavorful thalicha for an authentic taste.",
        price: "₹190",
        image: chickenBiryani,
      },
      {
        name: "Plain Biryani (Seeraga Samba)",
        description: "Aromatic seeraga samba rice cooked with our biryani masala — perfect with any side gravy.",
        price: "₹160",
        image: chickenBiryani,
      },
    ] as MenuItem[],
  },
  {
    title: "Starters & Fry Items",
    subtitle: "Crispy, spicy, and irresistible",
    items: [
      {
        name: "Chicken 65",
        description: "Deep-fried and tossed with curry leaves, red chillies, and tangy spice mix. Crispy outside, juicy inside.",
        price: "₹150 – ₹180",
        image: tandooriChicken,
        tag: "Popular",
        availableIn: "Chicken, Mutton",
      },
      {
        name: "Chukka",
        description: "Dry roasted with freshly ground spices, onions, and curry leaves until perfectly caramelized.",
        price: "₹160 – ₹210",
        image: muttonBiryani,
        availableIn: "Chicken, Mutton",
      },
      {
        name: "Pepper Fry",
        description: "Coarsely ground black pepper and garlic tossed with tender meat — bold and aromatic.",
        price: "₹160 – ₹210",
        image: tandooriChicken,
        availableIn: "Chicken, Mutton",
      },
      {
        name: "Tandoori Chicken (4 Pcs)",
        description: "Smoky charcoal-grilled chicken marinated overnight in yogurt and spices.",
        price: "₹280",
        image: tandooriChicken,
      },
    ] as MenuItem[],
  },
  {
    title: "Gravy & Curry",
    subtitle: "Rich, slow-simmered curries",
    items: [
      {
        name: "Gravy / Curry",
        description: "Rich and aromatic curry slow-cooked with onion-tomato base and traditional spices.",
        price: "₹150 – ₹230",
        image: parottaCurry,
        availableIn: "Chicken, Mutton",
      },
      {
        name: "Kola Urundai Curry",
        description: "Hand-rolled spiced meatballs simmered in a luscious gravy — a true South Indian delicacy.",
        price: "₹170",
        image: muttonBiryani,
        tag: "Must Try",
        availableIn: "Mutton",
      },
    ] as MenuItem[],
  },
  {
    title: "Parotta & Breads",
    subtitle: "Flaky, layered, and made fresh",
    items: [
      {
        name: "Parotta",
        description: "Flaky, layered parotta — the perfect companion for any gravy or curry.",
        price: "₹20 – ₹90",
        image: parottaCurry,
        availableIn: "Plain, Coin, Kothu, Chilli",
      },
      {
        name: "Kothu Parotta",
        description: "Shredded parotta stir-fried on high flame with spiced meat, egg, and aromatic masala.",
        price: "₹110 – ₹170",
        image: parottaCurry,
        availableIn: "Chicken, Mutton, Egg",
      },
    ] as MenuItem[],
  },
  {
    title: "Noodles & Fried Rice",
    subtitle: "Indo-Chinese favourites",
    items: [
      {
        name: "Noodles",
        description: "Wok-tossed noodles with fresh veggies and our house special sauce.",
        price: "₹100 – ₹160",
        image: chickenBiryani,
        availableIn: "Chicken, Mutton, Egg, Veg",
      },
      {
        name: "Fried Rice",
        description: "Smoky fried rice loaded with flavour, cooked on high flame with fresh ingredients.",
        price: "₹100 – ₹160",
        image: chickenBiryani,
        availableIn: "Chicken, Mutton, Egg, Veg",
      },
    ] as MenuItem[],
  },
  {
    title: "Egg Specials",
    subtitle: "Simple, hearty, and delicious",
    items: [
      {
        name: "Egg Kola Urundai",
        description: "Boiled eggs coated in a spiced mince layer, fried until golden, and served with tangy sauce.",
        price: "₹50",
        image: tandooriChicken,
        tag: "Must Try",
      },
      {
        name: "Egg Podimas",
        description: "Fluffy scrambled eggs tempered with onions, green chillies, and curry leaves.",
        price: "₹30 – ₹50",
        image: chickenBiryani,
      },
    ] as MenuItem[],
  },
];

const MenuPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,     // Repeat animations
      mirror: true,    // Animate when scrolling up
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-[#1b120e] transition-colors duration-500"
    >
      <Navbar />

      {/* Header Section - Adaptive Colors */}
      <section className="pt-24 md:pt-32 pb-16 bg-gray-50 dark:bg-[#120c09] transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 text-center" data-aos="fade-down">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-saffron mb-3 font-bold">
            Taste the Tradition
          </p>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="font-body text-gray-600 dark:text-warm-cream/60 max-w-xl mx-auto text-sm md:text-base">
            Every dish is crafted with love, premium ingredients, and recipes 
            perfected over generations.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          {menuCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16 md:mb-24 last:mb-0">
              {/* Category Title */}
              <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h2>
                <p className="font-body text-muted-foreground text-sm md:text-base">
                  {category.subtitle}
                </p>
                <div className="w-16 h-1 bg-spice-gradient mx-auto mt-4 rounded-full" />
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    data-aos="fade-up"
                    data-aos-delay={itemIdx * 50}
                    className="group flex flex-col sm:flex-row gap-5 p-4 md:p-6 rounded-3xl bg-gray-50 dark:bg-[#251a15] border border-gray-100 dark:border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative w-full sm:w-32 md:w-40 h-40 shrink-0 rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {item.tag && (
                        <span className="absolute top-3 left-3 px-2 py-1 bg-spice-gradient text-white font-sans text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-saffron transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-lg md:text-xl font-bold text-saffron">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-body text-sm text-gray-600 dark:text-warm-cream/60 leading-relaxed">
                        {item.description}
                      </p>
                      {item.availableIn && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold px-2 py-1 bg-gold/5 rounded-md border border-gold/10">
                            Available in: {item.availableIn}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-gray-50 dark:bg-[#120c09] border-y border-gray-100 dark:border-gold/10 transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 text-center" data-aos="zoom-in">
          <p className="font-body text-sm text-gray-500 dark:text-warm-cream/40 italic max-w-2xl mx-auto">
            * Prices are subject to change. We also offer specialized catering services for weddings, corporate events, and parties. 
            Contact us for bulk orders and custom menu arrangements.
          </p>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default MenuPage;