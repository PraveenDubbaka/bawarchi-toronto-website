import { motion } from 'framer-motion';
import { Gift, Tag, Clock, Star, Sparkles, ArrowRight } from 'lucide-react';

const Promotions = () => {
  const currentPromotions = [
    {
      title: 'Buy One Get One Free',
      subtitle: 'On Select Biryanis',
      description: 'Order any biryani and get another one of equal or lesser value absolutely free! Valid for dine-in and takeout.',
      validUntil: 'Valid until March 31, 2026',
      code: 'BOGO2026',
      image: `${import.meta.env.BASE_URL}images/biryani.jpg`,
      badge: 'Most Popular',
      discount: '50% OFF'
    },
    {
      title: 'Weekend Special',
      subtitle: '20% Off Family Meals',
      description: 'Enjoy 20% off on all family meal combos every Saturday and Sunday. Perfect for family gatherings!',
      validUntil: 'Every Weekend',
      code: 'WEEKEND20',
      image: `${import.meta.env.BASE_URL}images/hero-thali.jpg`,
      badge: 'Weekend Only',
      discount: '20% OFF'
    },
    {
      title: 'Lunch Combo Deal',
      subtitle: 'Special Weekday Offer',
      description: 'Get a complete lunch combo with rice, curry, naan, and drink for just $12.99. Available Monday to Friday.',
      validUntil: 'Mon-Fri, 11AM-3PM',
      code: 'LUNCH99',
      image: `${import.meta.env.BASE_URL}images/butter-chicken.jpg`,
      badge: 'Limited Time',
      discount: '$12.99'
    },
    {
      title: 'Student Discount',
      subtitle: '15% Off with Valid ID',
      description: 'Students get 15% off on all menu items. Just show your valid student ID at checkout.',
      validUntil: 'Year Round',
      code: 'STUDENT15',
      image: `${import.meta.env.BASE_URL}images/paneer-tikka.jpg`,
      badge: 'Student Special',
      discount: '15% OFF'
    }
  ];

  const upcomingOffers = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Birthday Special',
      description: 'Free dessert on your birthday with any main course order'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Loyalty Rewards',
      description: 'Earn points with every order and redeem for free meals'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Happy Hours',
      description: 'Special discounts during off-peak hours, coming soon'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-black to-accent-500/20"></div>
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full mb-6"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(251, 146, 60, 0.3)',
                  '0 0 40px rgba(251, 146, 60, 0.5)',
                  '0 0 20px rgba(251, 146, 60, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-white/80">
                Special Offers & Deals
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Amazing <span className="text-gradient">Promotions</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Discover our latest deals and exclusive offers. Save big on your favorite Indian dishes!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Current <span className="text-gradient">Offers</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Take advantage of these limited-time deals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPromotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="glass-morphism rounded-3xl overflow-hidden group cursor-pointer relative"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    className="px-4 py-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full text-sm font-bold"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {promo.badge}
                  </motion.div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-2xl font-bold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {promo.discount}
                  </motion.div>
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-primary-400 mb-2">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm font-medium">{promo.subtitle}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                  <p className="text-white/70 mb-4">{promo.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50 mb-1">{promo.validUntil}</p>
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full">
                        <span className="text-xs text-white/50">Code:</span>
                        <span className="text-sm font-mono font-bold text-primary-400">{promo.code}</span>
                      </div>
                    </div>
                    
                    <motion.a
                      href="https://order.online/store/bawarchi-indian-cuisine-toronto-875967/?hideModal=true&pickup=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Offers */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Coming <span className="text-gradient">Soon</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Stay tuned for more exciting offers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-morphism p-8 rounded-2xl text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-primary-400">{offer.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/60">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-12 rounded-3xl"
          >
            <Gift className="w-16 h-16 text-primary-400 mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold mb-4">
              Don't Miss Out on <span className="text-gradient">Exclusive Deals!</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Order now and use the promo codes to get amazing discounts on your favorite dishes.
            </p>

            <motion.a
              href="https://order.online/store/bawarchi-indian-cuisine-toronto-875967/?hideModal=true&pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(251, 146, 60, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
