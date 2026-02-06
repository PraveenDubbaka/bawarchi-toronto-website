import { motion } from 'framer-motion';
import { ChefHat, Flame, Leaf } from 'lucide-react';

const Menu = () => {
  const categories = [
    {
      name: 'Biryanis & Pulavs',
      icon: <Flame className="w-6 h-6" />,
      featured: true,
      items: [
        { name: 'Hyderabadi Chicken Dum Biryani', price: '$16.49', description: 'Aromatic basmati rice with tender chicken' },
        { name: 'Hyderabadi Goat Dum Biryani', price: '$17.99', description: 'Slow-cooked goat meat with fragrant spices' },
        { name: 'Boneless Chicken Biryani', price: '$17.99', description: 'Premium boneless chicken biryani' },
        { name: 'Boneless Mutton Biryani', price: '$18.99', description: 'Tender boneless mutton biryani' },
        { name: 'Gongura Chicken Dum Biryani', price: '$17.49', description: 'Chicken biryani with tangy sorrel leaves' },
        { name: 'Gongura Mutton Dum Biryani', price: '$18.49', description: 'Mutton biryani with signature gongura' },
        { name: 'Chicken Ghee Roast Biryani', price: '$18.99', description: 'Rich ghee-roasted chicken biryani' },
        { name: 'Mutton Ghee Roast Biryani', price: '$19.49', description: 'Premium ghee-roasted mutton biryani' },
        { name: 'Nalli Gosht Biryani', price: '$21.99', description: 'Tender bone marrow biryani specialty' },
        { name: 'Hyderabadi Veg Dum Biryani', price: '$13.99', description: 'Mixed vegetables with basmati rice' },
        { name: 'Paneer Biryani', price: '$15.49', description: 'Cottage cheese biryani' },
        { name: 'Paneer Ghee Roast Biryani', price: '$16.99', description: 'Rich ghee-roasted paneer biryani' },
        { name: 'Egg Biryani', price: '$13.99', description: 'Boiled eggs layered with aromatic rice' },
        { name: 'Vijaywada Spl. Bnls. Biryani', price: '$17.99', description: 'Spicy Vijayawada style boneless chicken' },
        { name: 'Ulavacharu Chicken Dum Biryani', price: '$17.99', description: 'Chicken with horse gram soup' },
        { name: 'Shirmp Biryani', price: '$18.49', description: 'Fresh shrimp biryani' },
        { name: 'Fish Biryani', price: '$17.99', description: 'Fresh fish layered with rice' },
      ]
    },
    {
      name: 'Appetizers (Vegetarian)',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Vegetable Samosa {2}', price: '$6.99', description: 'Minced potatoes & peas wrapped in pastry dough & fried' },
        { name: 'Mix Veg Pakoda', price: '$12.99', description: 'Veggies coated in spiced gram flour batter and deep-fried' },
        { name: 'Chilli Idli', price: '$14.99', description: 'Fried idli covered in special sauce with garlic and hot chillies' },
        { name: 'Gobi Manchurian', price: '$14.99', description: 'Stir fried cauliflower in Manchurian sauce' },
        { name: 'Gobi 65 Dry / Wet', price: '$14.99', description: 'Spicy battered cauliflower tossed in sauce' },
        { name: 'Chilli Paneer', price: '$15.49', description: 'Wok tossed paneer with tangy chilli sauce' },
        { name: 'Paneer 65 Dry / Wet', price: '$15.49', description: 'Spicy battered paneer tossed in sauce' },
        { name: 'Paneer Tikka Kabab', price: '$16.49', description: 'Grilled cottage cheese with bell peppers' },
        { name: 'Crispy Corn', price: '$14.99', description: 'Golden-fried corn kernels tossed with onions and spices' },
        { name: 'Karampodi Gobi', price: '$14.99', description: 'Gobi sautéed with karampodi and herbs' },
      ]
    },
    {
      name: 'Appetizers (Non-Veg)',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Chicken 65 Dry / Wet', price: '$15.49', description: 'Marinated chicken deep fried and tossed in sauce' },
        { name: 'Chicken Lollipops (Dry) {4}', price: '$16.49', description: 'Chicken drumsticks marinated and deep fried' },
        { name: 'Chilli Chicken', price: '$16.49', description: 'Wok tossed chicken coated with tangy chilli sauce' },
        { name: 'Chicken Manchurian', price: '$16.99', description: 'Battered fried chicken in Manchurian sauce' },
        { name: 'Chicken 555', price: '$16.99', description: 'Deep fried chicken in special sauce with cashews' },
        { name: 'Chicken Majestic', price: '$16.99', description: 'Marinated chicken in rich and creamy sauce' },
        { name: 'Chicken Ghee Roast', price: '$16.99', description: 'Chicken with green chillies, ghee and special spices' },
        { name: 'Chicken Pepper Fry', price: '$16.99', description: 'Chicken deep fried with pepper to perfection' },
        { name: 'Karampodi Kodi (Chicken)', price: '$16.99', description: 'Chicken fried with karampodi and herbs' },
        { name: 'Kaju Kodi Fry', price: '$16.99', description: 'Chicken with cashew, cinnamon and clove' },
        { name: 'Mutton Pepper Fry (Bone-In)', price: '$16.99', description: 'Bone-in goat fried with chettinad masala' },
        { name: 'Mutton Roast (Boneless)', price: '$17.49', description: 'Boneless goat with chettinad masala' },
        { name: 'Mutton Ghee Roast (Boneless)', price: '$18.99', description: 'Premium boneless goat ghee roast' },
        { name: 'Apollo Fish', price: '$17.99', description: 'Spicy fried fish specialty' },
        { name: 'Chilli Fish', price: '$17.99', description: 'Fish tossed in spicy chilli sauce' },
        { name: 'Chilli Shrimp', price: '$18.49', description: 'Shrimp in tangy chilli sauce' },
        { name: 'Tandoori Chicken (Half)', price: '$14.99', description: 'Clay oven roasted chicken' },
        { name: 'Tandoori Chicken (Full)', price: '$24.99', description: 'Full clay oven roasted chicken' },
        { name: 'Chicken Tikka Kabab', price: '$16.99', description: 'Grilled chicken tikka from tandoor' },
      ]
    },
    {
      name: 'Vegetarian Curries',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Dal Tadka', price: '$14.99', description: 'Yellow lentils tempered with spices' },
        { name: 'Dal Makhani', price: '$15.99', description: 'Creamy black lentils with butter' },
        { name: 'Chana Masala', price: '$14.99', description: 'Chickpeas in traditional North Indian style' },
        { name: 'Paneer Butter Masala', price: '$16.99', description: 'Cottage cheese in rich butter cream sauce' },
        { name: 'Palak Paneer (Spinach)', price: '$17.49', description: 'Cottage cheese in spinach puree' },
        { name: 'Paneer Tikka Masala', price: '$16.99', description: 'Grilled paneer in tomato cream sauce' },
        { name: 'Kadai Paneer', price: '$17.49', description: 'Paneer with bell peppers in creamy gravy' },
        { name: 'Shahi Paneer', price: '$17.49', description: 'Paneer in creamy cashew paste gravy' },
        { name: 'Vegetable Korma', price: '$15.99', description: 'Mixed vegetables in delicious creamy gravy' },
        { name: 'Kadai Vegetable', price: '$15.99', description: 'Mixed vegetables with bell pepper and onions' },
        { name: 'Malai Kofta', price: '$16.99', description: 'Fried vegetable balls in mild creamy gravy' },
        { name: 'Gutti Vankay Curry', price: '$15.99', description: 'Eggplant with sesame, peanut and yogurt' },
        { name: 'Aloo Gobi Masala', price: '$15.99', description: 'Potatoes and cauliflower Punjabi style' },
      ]
    },
    {
      name: 'Chicken Curries',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Butter Chicken', price: '$17.49', description: 'Chicken in tomato puree and cream' },
        { name: 'Chicken Tikka Masala', price: '$17.49', description: 'Chicken tikka in fenugreek tomato gravy' },
        { name: 'Kadai Chicken', price: '$17.49', description: 'Chicken with bell peppers in creamy gravy' },
        { name: 'Hyderabad Chicken Curry', price: '$17.49', description: 'Nizam special boneless chicken dish' },
        { name: 'Chicken Shahi Korma', price: '$17.49', description: 'Mughlai delight with cardamom flavor' },
        { name: 'Andhra Chicken Curry', price: '$17.49', description: 'Bone-in chicken with special Andhra spices' },
        { name: 'Gongura Chicken Curry', price: '$17.99', description: 'Chicken with red sorrel leaves & spices' },
        { name: 'Amaravati Chicken Curry', price: '$17.99', description: 'Spicy chicken with hint of coconut' },
        { name: 'Ulavacharu Chicken Curry', price: '$18.49', description: 'Chicken with horse gram soup' },
        { name: 'Chicken Vindaloo', price: '$17.49', description: 'Chicken with potatoes and spice herbs' },
        { name: 'Chicken Pepper Masala', price: '$17.49', description: 'Tender chicken with ground spices' },
        { name: 'Karaikudi Chicken', price: '$17.49', description: 'Aromatic chicken with special spices' },
      ]
    },
    {
      name: 'Mutton/Goat Curries',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Goat Korma', price: '$18.49', description: 'Goat simmered in creamy sauce with cardamoms' },
        { name: 'Mutton Masala', price: '$19.49', description: 'Goat in fresh ground spices with onions & tomato' },
        { name: 'Hyderabad Goat Curry', price: '$19.49', description: 'Goat with roasted dry spices paste' },
        { name: 'Gongura Mutton Curry', price: '$19.49', description: 'Traditional goat with gongura leaves' },
        { name: 'Amaravati Mutton Curry', price: '$19.49', description: 'Tender goat with spicy sauce and coconut' },
        { name: 'Ulavacharu Goat Curry', price: '$19.99', description: 'Goat with horse gram soup and spices' },
        { name: 'Mutton Pepper Masala', price: '$18.49', description: 'Tender mutton with ground spices' },
        { name: 'Mutton Vindaloo (Goat)', price: '$18.49', description: 'Tangy spicy curry with goat and potato' },
        { name: 'Karaikudi Goat Curry', price: '$19.49', description: 'Aromatic goat with special spices' },
        { name: 'Lamb Rogan Gosh', price: '$19.49', description: 'Tender lamb in tomato and onion gravy' },
        { name: 'Lamb Korma', price: '$19.49', description: 'Lamb in mild cashew sauce with herbs' },
        { name: 'Kadai Lamb', price: '$19.49', description: 'Northwest frontier specialty with peppers' },
        { name: 'Lamb Saag', price: '$19.49', description: 'Spiced lamb with spinach and cilantro' },
      ]
    },
    {
      name: 'Dosas & South Indian',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Plain Dosa', price: '$9.49', description: 'Traditional crispy rice and lentil crepe' },
        { name: 'Masala Dosa', price: '$11.49', description: 'Dosa filled with spiced potato filling' },
        { name: 'Mysore Masala Dosa', price: '$12.49', description: 'Spicy red chutney dosa with potato filling' },
        { name: 'Paneer Tikka Dosa', price: '$13.99', description: 'Dosa with paneer tikka filling' },
        { name: 'Chicken Tikka Dosa', price: '$14.99', description: 'Dosa with chicken tikka filling' },
        { name: '70 MM Dosa (Dine in Only)', price: '$12.99', description: 'Giant 70mm crispy dosa' },
        { name: 'Rava Masala Dosa', price: '$14.49', description: 'Semolina dosa with potato filling (15 mins)' },
        { name: 'Idli {2}', price: '$6.99', description: 'Steamed rice cakes with sambar and chutney' },
        { name: 'Medu Vada {2}', price: '$6.99', description: 'Crispy lentil donuts with sambar' },
        { name: 'Plain Uthappam', price: '$9.99', description: 'Thick rice pancake' },
        { name: 'Onion Uthappam', price: '$10.49', description: 'Uthappam topped with onions' },
        { name: 'Mix Veg Uthappam', price: '$11.49', description: 'Uthappam with mixed vegetables' },
      ]
    },
    {
      name: 'Indo Chinese',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Veg Hakka Noodles', price: '$13.99', description: 'Noodles stir fried with veggies & spices' },
        { name: 'Chicken Hakka Noodles', price: '$15.49', description: 'Noodles with chicken, egg, veggies' },
        { name: 'Shrimp Hakka Noodles', price: '$16.99', description: 'Noodles with shrimp, egg, veggies' },
        { name: 'Veg Fried Rice', price: '$13.49', description: 'Aromatic rice with fine chopped vegetables' },
        { name: 'Chicken Fried Rice', price: '$15.49', description: 'Rice with chicken and vegetables' },
        { name: 'Shrimp Fried Rice', price: '$16.99', description: 'Rice with shrimp and vegetables' },
        { name: 'Chicken Schezwan Fried Rice', price: '$16.99', description: 'Spicy Schezwan rice with chicken' },
        { name: 'Veg Manchurian (Wet)', price: '$14.99', description: 'Vegetable balls in Manchurian sauce' },
        { name: 'Chicken Manchurian (Wet)', price: '$17.99', description: 'Chicken in Manchurian sauce' },
      ]
    },
    {
      name: 'Seafood',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Fish Masala', price: '$17.99', description: 'Marinated fish with fried onions and tomatoes' },
        { name: 'Fish Chettinadu Curry', price: '$17.99', description: 'Fish with special Chettinad masala' },
        { name: 'Fish Pulusu', price: '$17.99', description: 'Fish in hot Andhra spices' },
        { name: 'Shrimp Iguru', price: '$19.99', description: 'Shrimp in delicately ground spices' },
        { name: 'Amaravati Royyala Kura', price: '$19.99', description: 'Tender shrimp with spicy Indian spices' },
        { name: 'Apollo Fish', price: '$17.99', description: 'Spicy fried fish specialty' },
        { name: 'Chilli Fish', price: '$17.99', description: 'Fish tossed in spicy chilli sauce' },
        { name: 'Chilli Shrimp', price: '$18.49', description: 'Shrimp in tangy chilli sauce' },
        { name: 'Tandoori Pomfret (Fish)', price: '$18.49', description: 'Clay oven roasted pomfret' },
      ]
    },
    {
      name: 'Breads & Sides',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Plain Naan', price: '$2.99', description: 'Soft white flour bread' },
        { name: 'Butter Naan', price: '$3.49', description: 'Naan brushed with butter' },
        { name: 'Garlic Naan', price: '$4.49', description: 'Naan with fresh garlic' },
        { name: 'Tandoori Roti', price: '$3.49', description: 'Whole wheat bread from tandoor' },
        { name: 'Onion Kulcha', price: '$4.49', description: 'Naan stuffed with spiced onions' },
        { name: 'Bread Basket', price: '$14.99', description: 'Tandoori Roti, Garlic, Plain Naan, Onion Kulcha' },
        { name: 'Rice', price: '$3.99', description: 'Plain basmati rice' },
        { name: 'Masala Rice', price: '$4.99', description: 'Spiced basmati rice' },
        { name: 'Pulav Rice', price: '$6.99', description: 'Aromatic rice with vegetables' },
        { name: 'Raita / Salan', price: '$1.00', description: 'Yogurt side or curry sauce' },
        { name: 'Onion Salad', price: '$3.99', description: 'Onion, chilli and lemon slices' },
      ]
    },
    {
      name: 'Desserts & Beverages',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Gulab Jamun', price: '$4.99', description: 'Deep fried milk pastry in rose honey syrup' },
        { name: 'Rasmalai', price: '$5.49', description: 'Cheese patties in cold sweetened milk' },
        { name: 'Mango Lassi', price: '$4.99', description: 'Refreshing mango yogurt drink' },
        { name: 'Sweet Lassi', price: '$4.99', description: 'Sweet yogurt drink' },
        { name: 'Indian Masala Tea (Chai)', price: '$3.99', description: 'Spiced Indian tea with milk' },
        { name: 'Falooda Shake', price: '$5.99', description: 'Traditional falooda milkshake' },
        { name: 'Mango Shake', price: '$5.99', description: 'Fresh mango shake' },
        { name: 'Ice Cream Double Scoop', price: '$6.99', description: 'Ask for available flavours' },
        { name: 'Matka Kulfi', price: '$4.49', description: 'Traditional Indian ice cream' },
      ]
    },
    {
      name: 'Weekend Specials',
      icon: <Flame className="w-6 h-6" />,
      featured: true,
      items: [
        { name: 'Natukodi Fry Biryani', price: '$17.99', description: 'Country chicken fry biryani' },
        { name: 'Gongura Goat Fry Biryani', price: '$18.99', description: 'Goat fry with gongura leaves' },
        { name: 'Rajugari Royyala Fry Biryani', price: '$18.49', description: 'Shrimp fry biryani special' },
        { name: 'Nalli Gosht Pulav', price: '$21.99', description: 'Bone marrow pulav' },
        { name: 'Dosa with Chicken Curry', price: '$14.99', description: 'Crispy dosa served with chicken curry' },
        { name: 'Dosa with Goat Curry', price: '$15.99', description: 'Crispy dosa served with goat curry' },
        { name: 'Natukodi (Country Chicken) Fry', price: '$16.49', description: 'Traditional country chicken fry' },
        { name: 'Gongura Mutton Fry', price: '$17.49', description: 'Mutton with bone fried in gongura' },
        { name: 'Royyala Vepudu (Shrimp Fry)', price: '$18.49', description: 'Spicy Andhra style shrimp fry' },
      ]
    },
    {
      name: 'Lunch Specials',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Paneer Tikka Combo', price: '$14.99', description: 'Served with Masala Rice or Plain Naan' },
        { name: 'Chole Masala Combo', price: '$14.99', description: 'Served with Masala Rice or Plain Naan' },
        { name: 'Dal Makhani Combo', price: '$14.99', description: 'Served with Masala Rice or Plain Naan' },
        { name: 'Butter Chicken Combo', price: '$15.99', description: 'Served with Masala Rice or Plain Naan' },
        { name: 'Chicken Tikka Combo', price: '$15.99', description: 'Served with Masala Rice or Plain Naan' },
        { name: 'Hyderabadi Chicken Curry Combo', price: '$15.99', description: 'Served with Masala Rice or Plain Naan' },
        { name: 'Veg Biryani Combo', price: '$13.99', description: 'With veg appetizer, curry, naan, raita, dessert' },
        { name: 'Chicken Biryani Combo', price: '$14.99', description: 'With chicken appetizer, curry, naan, raita, dessert' },
        { name: 'Goat Biryani Combo', price: '$16.99', description: 'With appetizer, curry, naan, raita, dessert' },
        { name: 'Veg Thali', price: '$14.99', description: 'Complete vegetarian meal platter' },
        { name: 'Non-Veg Thali', price: '$15.99', description: 'Complete non-vegetarian meal platter' },
      ]
    },
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
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-8">
              Explore our authentic Indian dishes crafted with traditional recipes and fresh ingredients
            </p>
            <div className="inline-block glass-morphism px-6 py-3 rounded-lg border border-primary-500/30">
              <p className="text-primary-400 font-semibold">
                💡 Dine-in prices shown | Takeout: Add $1.00 per item
              </p>
            </div>
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
              href="https://order.toasttab.com/online/bawarchi-biryani-scarborough-1949-kennedy-road"
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
