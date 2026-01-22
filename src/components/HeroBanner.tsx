import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ChefHat } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroBanner = () => {
  const { scrollY } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    { url: `${import.meta.env.BASE_URL}images/spices-hero.jpg`, title: 'Authentic', subtitle: 'Spices & Flavors' },
    { url: `${import.meta.env.BASE_URL}images/hero-biryani.jpg`, title: 'Royal', subtitle: 'Hyderabadi Biryani' },
    { url: `${import.meta.env.BASE_URL}images/hero-thali.jpg`, title: 'Traditional', subtitle: 'Indian Thali' },
    { url: `${import.meta.env.BASE_URL}images/hero-curry.jpg`, title: 'Aromatic', subtitle: 'Butter Chicken' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Slider */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image Slider with Parallax */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ y }}
          >
            <motion.img 
              src={heroImages[currentSlide].url}
              alt={heroImages[currentSlide].title}
              className="w-full h-full object-cover"
              style={{ scale: useTransform(scrollY, [0, 500], [1, 1.2]) }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-12 bg-primary-500' : 'w-2 bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        
        {/* Interactive Floating Ingredients */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: `hsl(${Math.random() * 60 + 10}, 80%, 60%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
          style={{
            left: '20%',
            top: '30%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-accent-500/30 rounded-full blur-3xl"
          style={{
            right: '20%',
            bottom: '30%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <motion.div 
            className="inline-flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(251, 146, 60, 0.3)',
                '0 0 40px rgba(251, 146, 60, 0.5)',
                '0 0 20px rgba(251, 146, 60, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-primary-400" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">
              #1 Indian Restaurant Chain
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            {['Authentic', 'Indian', 'Biryanis'].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={index === 0 ? "text-white block" : index === 2 ? "text-gradient glow-text block" : "text-white block"}
                style={{ letterSpacing: '0.02em' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
        >
          Experience the rich flavors of India, now in Toronto. From traditional biryanis to contemporary Indian cuisine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.a
            href="https://order.online/store/bawarchi-indian-cuisine-toronto-875967/?hideModal=true&pickup=true"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(251, 146, 60, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <span>Order Online</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.a>

          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 glass-morphism rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
          >
            <ChefHat className="w-5 h-5" />
            <span>View Menu</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-primary-400 to-accent-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
