import HeroBanner from '../components/HeroBanner';
import CookingAnimation from '../components/CookingAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, Clock, Award, Heart } from 'lucide-react';
import { useRef } from 'react';

const Home = () => {
  const featuresRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  });
  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Authentic Recipes',
      description: 'Traditional Indian recipes passed down through generations'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Service',
      description: 'Fast and efficient service without compromising quality'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '#1 Chain in USA',
      description: 'Trusted by thousands across the United States'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and care'
    }
  ];

  const menuHighlights = [
    {
      name: 'Hyderabadi Biryani',
      description: 'Aromatic basmati rice with tender meat and exotic spices',
      category: 'Signature',
      image: `${import.meta.env.BASE_URL}images/biryani.jpg`
    },
    {
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese with bell peppers and onions',
      category: 'Vegetarian',
      image: `${import.meta.env.BASE_URL}images/paneer-tikka.jpg`
    },
    {
      name: 'Butter Chicken',
      description: 'Creamy tomato-based curry with tender chicken pieces',
      category: 'Chef Special',
      image: `${import.meta.env.BASE_URL}images/butter-chicken.jpg`
    },
    {
      name: 'Tandoori Platter',
      description: 'Assorted grilled specialties from our clay oven',
      category: 'Popular',
      image: `${import.meta.env.BASE_URL}images/tandoori.jpg`
    }
  ];

  const everydaySpecials = [
    {
      name: 'Kamju Pitta',
      subtitle: 'Quail (Biryani & Tandoori)',
      icon: '🐦'
    },
    {
      name: 'Nalli Ghost Biryani',
      subtitle: 'Tender Bone Marrow Biryani',
      icon: '🍖'
    },
    {
      name: 'Pomfret (Fish)',
      subtitle: 'Tandoori or Panfry',
      icon: '🐟'
    },
    {
      name: 'Chicken/Mutton Chukka',
      subtitle: 'Spicy Dry Roast',
      icon: '🌶️'
    },
    {
      name: 'Mutton/Chicken Ghee Roast Biryani',
      subtitle: 'Rich Ghee Flavored',
      icon: '🍛'
    },
    {
      name: 'Paneer Ghee Roast Biryani',
      subtitle: 'Vegetarian Special',
      icon: '🧈'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* Everyday Specials Section */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, #f97316 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="text-4xl"
                >
                  ⭐
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  <span className="text-gradient">Everyday Specials</span>
                </h2>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="text-4xl"
                >
                  ⭐
                </motion.div>
              </div>
              <p className="text-primary-400 text-lg font-semibold">Fresh Daily • Limited Availability</p>
            </motion.div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discover our handcrafted specialties, prepared fresh every day with authentic recipes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {everydaySpecials.map((special, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="relative group h-full"
              >
                <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                  {/* Animated Gradient Background on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl"
                      >
                        {special.icon}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                      >
                        TODAY
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
                      {special.name}
                    </h3>
                    <p className="text-white/60 text-sm flex-grow">
                      {special.subtitle}
                    </p>
                    
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      className="h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://order.toasttab.com/online/bawarchi-biryani-scarborough-1949-kennedy-road"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Order Today's Specials Now</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cooking Animation on Scroll */}
      <CookingAnimation />

      {/* Features Section with Advanced Scroll Animations */}
      <section ref={featuresRef} id="features" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient">Bawarchi</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of tradition and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-morphism p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group relative"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transform: "translateZ(-10px)" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="text-primary-400 mb-4"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights with Stagger Animation */}
      <section id="menu" className="py-20 bg-black relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Menu <span className="text-gradient">Highlights</span>
            </motion.h2>
            <motion.p 
              className="text-white/60 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our most popular dishes
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.4 }
                }}
                className="glass-morphism rounded-2xl relative overflow-hidden group cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.span 
                      className="bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.category}
                    </motion.span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/60">{item.description}</p>
                </div>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(251, 146, 60, 0.1), transparent 70%)',
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              View Full Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-12 rounded-3xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Ready to Experience <span className="text-gradient">Authentic Indian Cuisine?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Visit us today or order online for pickup and delivery
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://order.toasttab.com/online/bawarchi-biryani-scarborough-1949-kennedy-road"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              >
                Order Online
              </a>
              <a
                href="tel:647-352-6292"
                className="px-8 py-4 glass-morphism rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Call: 647-352-6292
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
