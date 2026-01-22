import { motion } from 'framer-motion';
import { Users, Utensils, Truck, CheckCircle } from 'lucide-react';

const Catering = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Events & Parties',
      description: 'Perfect for weddings, birthdays, and special celebrations'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Corporate Catering',
      description: 'Professional catering for business meetings and conferences'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Delivery & Setup',
      description: 'Full service delivery and professional setup at your venue'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Custom Menus',
      description: 'Tailored menu options to suit your preferences and dietary needs'
    }
  ];

  const packages = [
    {
      name: 'Silver Package',
      price: '$15/person',
      items: [
        '2 Appetizers',
        '1 Main Course',
        '1 Biryani',
        'Rice & Bread',
        'Dessert'
      ]
    },
    {
      name: 'Gold Package',
      price: '$22/person',
      items: [
        '3 Appetizers',
        '2 Main Courses',
        '2 Biryanis',
        'Rice & Bread',
        'Salad & Raita',
        'Dessert'
      ],
      featured: true
    },
    {
      name: 'Platinum Package',
      price: '$30/person',
      items: [
        '4 Appetizers',
        '3 Main Courses',
        '2 Biryanis',
        'Rice & Bread',
        'Salad & Raita',
        '2 Desserts',
        'Beverages'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Catering</span> Services
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Make your special events unforgettable with our authentic Indian cuisine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Catering <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose from our pre-designed packages or create a custom menu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-morphism p-8 rounded-2xl relative ${
                  pkg.featured ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary-400">{pkg.price}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300">
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Book Your Event?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contact us today to discuss your catering needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:647-352-6292"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              >
                Call: 647-352-6292
              </a>
              <a
                href="mailto:info@bawarchitoronto.com"
                className="px-8 py-4 glass-morphism rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Catering;
