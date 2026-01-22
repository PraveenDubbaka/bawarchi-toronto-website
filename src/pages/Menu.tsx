import { motion } from 'framer-motion';
import { ChefHat, Flame, Leaf } from 'lucide-react';

const Menu = () => {
  const categories = [
    {
      name: 'Biryanis',
      icon: <Flame className="w-6 h-6" />,
      items: [
        { name: 'Hyderabadi Chicken Biryani', price: '$14.99', description: 'Aromatic basmati rice with tender chicken' },
        { name: 'Mutton Biryani', price: '$16.99', description: 'Slow-cooked mutton with fragrant spices' },
        { name: 'Vegetable Biryani', price: '$12.99', description: 'Mixed vegetables with basmati rice' },
        { name: 'Paneer Biryani', price: '$13.99', description: 'Cottage cheese with aromatic rice' },
      ]
    },
    {
      name: 'Appetizers',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Chicken 65', price: '$10.99', description: 'Spicy fried chicken with curry leaves' },
        { name: 'Paneer Tikka', price: '$9.99', description: 'Grilled cottage cheese with peppers' },
        { name: 'Samosa', price: '$5.99', description: 'Crispy pastry filled with potatoes' },
        { name: 'Chicken Wings', price: '$11.99', description: 'Spicy tandoori chicken wings' },
      ]
    },
    {
      name: 'Vegetarian',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Dal Makhani', price: '$10.99', description: 'Creamy black lentils with butter' },
        { name: 'Paneer Butter Masala', price: '$12.99', description: 'Cottage cheese in rich tomato gravy' },
        { name: 'Chana Masala', price: '$9.99', description: 'Chickpeas in spiced tomato sauce' },
        { name: 'Palak Paneer', price: '$11.99', description: 'Cottage cheese in spinach curry' },
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
              Our <span className="text-gradient">Menu</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Explore our authentic Indian dishes crafted with traditional recipes and fresh ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-primary-400">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-display font-bold">{category.name}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-morphism p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-primary-400 font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-white/60">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Craving Something Delicious?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Order now and enjoy authentic Indian cuisine at home
            </p>
            <a
              href="https://order.online/store/bawarchi-indian-cuisine-toronto-875967/?hideModal=true&pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              Order Online Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
