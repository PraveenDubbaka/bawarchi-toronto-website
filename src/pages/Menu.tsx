import { motion } from 'framer-motion';
import { ChefHat, Flame, Leaf } from 'lucide-react';

// Precise manual image mapping - Each menu item matched to exact image file
const getMenuItemImage = (itemName: string): string => {
  const imageMap: { [key: string]: string } = {
    // BIRYANIS & PULAVS
    'Hyderabadi Chicken Dum Biryani': '/images/menu pics/Hyderabadi_Chicken_Dum_Biryani.jpeg',
    'Hyderabadi Goat Dum Biryani': '/images/menu pics/Hyderbadi_Goat_Dum_Biryani_-_Single_Pack_-_24_oz.jpeg',
    'Boneless Chicken Biryani': '/images/menu pics/Boneless_Chicken_Biryani.jpeg',
    'Boneless Mutton Biryani': '/images/menu pics/Boneless_Mutton_Biryani.jpeg',
    'Gongura Chicken Dum Biryani': '/images/menu pics/Gongura_Chicken_Dum_Biryani.jpeg',
    'Gongura Mutton Dum Biryani': '/images/menu pics/Gongura_Chicken_Dum_Biryani.jpeg', // Use same as chicken
    'Chicken Ghee Roast Biryani': '/images/menu pics/Chicken_Tikka_Biryani.jpeg',
    'Mutton Ghee Roast Biryani': '/images/menu pics/Boneless_Mutton_Biryani.jpeg',
    'Nalli Gosht Biryani': '/images/menu pics/Aavakai_Goat_Dum_Biryani.jpeg',
    'Hyderabadi Veg Dum Biryani': '/images/menu pics/Hyderabadi_Veg_Dum_Biryani.jpeg',
    'Paneer Biryani': '/images/menu pics/Paneer_Biryani.jpeg',
    'Paneer Ghee Roast Biryani': '/images/menu pics/Paneer_Biryani.jpeg',
    'Egg Biryani': '/images/menu pics/Egg_Biryani.jpeg',
    'Vijaywada Spl. Bnls. Biryani': '/images/menu pics/Vijayawada_Special_Boneless_Chicken_Biryani.jpeg',
    'Ulavacharu Chicken Dum Biryani': '/images/menu pics/Avakai_Chicken_Dum_Biryani_-_Single_Pack_-_24_oz.jpeg',
    'Shirmp Biryani': '/images/menu pics/Shrimp_Biryani.jpeg',
    'Fish Biryani': '/images/menu pics/Fish_Biryani.jpeg',
    
    // APPETIZERS - VEG
    'Vegetable Samosa {2}': '/images/menu pics/Veg_Samosa.jpeg',
    'Mix Veg Pakoda': '/images/menu pics/Veg_Samosa.jpeg', // Use samosa as backup
    'Chilli Idli': '/images/menu pics/Chilli_Idli.jpeg',
    'Gobi Manchurian': '/images/menu pics/Gobi_Manchurian.jpeg',
    'Gobi 65 Dry / Wet': '/images/menu pics/Gobi_Manchurian.jpeg', // Use Gobi Manchurian
    'Chilli Paneer': '/images/menu pics/Paneer_555.jpeg',
    'Paneer 65 Dry / Wet': '/images/menu pics/Paneer_555.jpeg',
    'Paneer Tikka Kabab': '/images/menu pics/Paneer_Tikka_Kabab.jpeg',
    'Crispy Corn': '/images/menu pics/Corn_Manchurian.jpeg',
    'Karampodi Gobi': '/images/menu pics/Karampodi_Gobi.jpeg',
    
    // APPETIZERS - NON-VEG
    'Chicken 65 Dry / Wet': '/images/menu pics/Chicken_65_Dry.jpeg',
    'Chicken Lollipops (Dry) {4}': '/images/menu pics/Chicken_Lollipop_Dry.jpeg',
    'Chilli Chicken': '/images/menu pics/Chilli_Chicken.jpeg',
    'Chicken Manchurian': '/images/menu pics/Chicken_Manchurian_Wet.jpeg',
    'Chicken 555': '/images/menu pics/Chicken_555.jpeg',
    'Chicken Majestic': '/images/menu pics/Kothimeera_Kodi_Cilantro_chicken.jpg',
    'Chicken Ghee Roast': '/images/menu pics/Guntur_Chicken.jpeg',
    'Chicken Pepper Fry': '/images/menu pics/Guntur_Chicken.jpeg',
    'Karampodi Kodi (Chicken)': '/images/menu pics/Kaarampodi_Kodi.jpeg',
    'Kaju Kodi Fry': '/images/menu pics/Karivepaku_Chicken.jpeg',
    'Mutton Pepper Fry (Bone-In)': '/images/menu pics/Mutton_Pepper_Fry_Bone-In.jpeg',
    'Mutton Roast (Boneless)': '/images/menu pics/Mutton_Roast_Boneless.jpeg',
    'Mutton Ghee Roast (Boneless)': '/images/menu pics/Mutton_Roast_Boneless.jpeg',
    'Apollo Fish': '/images/menu pics/Apollo_Fish.jpeg',
    'Chilli Fish': '/images/menu pics/Chilli_Fish.jpeg',
    'Chilli Shrimp': '/images/menu pics/Chilli_Shrimp.jpeg',
    'Tandoori Chicken (Half)': '/images/menu pics/Half_Tandoori_Chicken.jpeg',
    'Tandoori Chicken (Full)': '/images/menu pics/Full_Tandoori_Chicken.jpeg',
    'Chicken Tikka Kabab': '/images/menu pics/Chicken_Tikka_Kabab.jpeg',
    
    // VEGETARIAN CURRIES
    'Dal Tadka': '/images/menu pics/Dal_Tadka.jpeg',
    'Dal Makhani': '/images/menu pics/Dal_Makhani.jpeg',
    'Chana Masala': '/images/menu pics/Channa_Masala.jpeg',
    'Paneer Butter Masala': '/images/menu pics/Channa_Palak.jpeg', // Use palak as substitute
    'Palak Paneer (Spinach)': '/images/menu pics/Channa_Palak.jpeg',
    'Paneer Tikka Masala': '/images/menu pics/Paneer_Tikka_Dosa.jpeg',
    'Kadai Paneer': '/images/menu pics/Kadai_Paneer.jpeg',
    'Shahi Paneer': '/images/menu pics/Kadai_Paneer.jpeg', // Use Kadai Paneer
    'Vegetable Korma': '/images/menu pics/Vegetable_Khorma.jpeg',
    'Kadai Vegetable': '/images/menu pics/Aavakai_Vegetable_Curry.jpg',
    'Malai Kofta': '/images/menu pics/Malai_Kofta.jpeg',
    'Gutti Vankay Curry': '/images/menu pics/Aavakai_Vegetable_Curry.jpg',
    'Aloo Gobi Masala': '/images/menu pics/Aloo_Gobi_Masala.jpeg',
    
    // CHICKEN CURRIES
    'Butter Chicken': '/images/menu pics/Butter_Chicken.jpeg',
    'Chicken Tikka Masala': '/images/menu pics/Chicken_Tikka_Masala.jpeg',
    'Kadai Chicken': '/images/menu pics/Kadai_Chicken.jpeg',
    'Hyderabad Chicken Curry': '/images/menu pics/Hyderabad_Chicken_Curry.jpeg',
    'Chicken Shahi Korma': '/images/menu pics/Chicken_Shahi_Khorma.jpeg',
    'Andhra Chicken Curry': '/images/menu pics/Amaravati_Chicken_Curry.jpeg',
    'Gongura Chicken Curry': '/images/menu pics/Gongura_Chicken.jpeg',
    'Amaravati Chicken Curry': '/images/menu pics/Amaravati_Chicken_Curry.jpeg',
    'Ulavacharu Chicken Curry': '/images/menu pics/Ulavacharu_Chicken_Curry.jpg',
    'Chicken Vindaloo': '/images/menu pics/Chicken_Vindaloo.jpeg',
    'Chicken Pepper Masala': '/images/menu pics/Chicken_Mughlai.jpeg',
    'Karaikudi Chicken': '/images/menu pics/Karaikudi_Chicken.jpeg',
    
    // MUTTON/GOAT CURRIES
    'Goat Korma': '/images/menu pics/Goat_Khorma.jpeg',
    'Mutton Masala': '/images/menu pics/Mutton_Masala.jpeg',
    'Hyderabad Goat Curry': '/images/menu pics/Karaikudi_Goat_Curry.jpeg',
    'Gongura Mutton Curry': '/images/menu pics/Gongura_Mutton_Curry.jpeg',
    'Amaravati Mutton Curry': '/images/menu pics/Amaravati_Mutton_Curry.jpeg',
    'Ulavacharu Goat Curry': '/images/menu pics/Ulavacharu_Goat_Curry.jpeg',
    'Mutton Pepper Masala': '/images/menu pics/Mutton_Mughlai.jpeg',
    'Mutton Vindaloo (Goat)': '/images/menu pics/Mutton_Vindaloo.jpeg',
    'Karaikudi Goat Curry': '/images/menu pics/Karaikudi_Goat_Curry.jpeg',
    'Lamb Rogan Gosh': '/images/menu pics/Lamb_Rogan_Josh.jpeg',
    'Lamb Korma': '/images/menu pics/Lamb_Khorma.jpeg',
    'Kadai Lamb': '/images/menu pics/Kadai_Lamb.jpeg',
    'Lamb Saag': '/images/menu pics/Lamb_Saag.jpeg',
    
    // DOSAS & SOUTH INDIAN
    'Plain Dosa': '/images/menu pics/Plain_Dosa.jpeg',
    'Masala Dosa': '/images/menu pics/Rava_Masala_Dosa.jpeg',
    'Mysore Masala Dosa': '/images/menu pics/Rava_Masala_Dosa.jpeg',
    'Paneer Tikka Dosa': '/images/menu pics/Paneer_Tikka_Dosa.jpeg',
    'Chicken Tikka Dosa': '/images/menu pics/Egg_Dosa.jpeg',
    '70 MM Dosa (Dine in Only)': '/images/menu pics/Onion_Dosa.jpeg',
    'Rava Masala Dosa': '/images/menu pics/Rava_Masala_Dosa.jpeg',
    'Idli {2}': '/images/menu pics/Idli_2.jpeg',
    'Medu Vada {2}': '/images/menu pics/Medu_Vada_2.jpeg',
    'Plain Uthappam': '/images/menu pics/Plain_Uthappam.jpeg',
    'Onion Uthappam': '/images/menu pics/Onion_Dosa.jpeg',
    'Mix Veg Uthappam': '/images/menu pics/Plain_Uthappam.jpeg',
    
    // INDO CHINESE
    'Veg Hakka Noodles': '/images/menu pics/Veg_Hakka_Noodles.jpeg',
    'Chicken Hakka Noodles': '/images/menu pics/Chicken_Hakka_Noodles.jpeg',
    'Shrimp Hakka Noodles': '/images/menu pics/Egg_Hakka_Noodles.jpeg',
    'Veg Fried Rice': '/images/menu pics/Veg_Fried_Rice.jpeg',
    'Chicken Fried Rice': '/images/menu pics/Chicken_Fried_Rice.jpeg',
    'Shrimp Fried Rice': '/images/menu pics/Egg_Fried_Rice.jpeg',
    'Chicken Schezwan Fried Rice': '/images/menu pics/Chicken_Schezwan_Fried_Rice.jpeg',
    'Veg Manchurian (Wet)': '/images/menu pics/Veg_Manchurian.jpeg',
    'Chicken Manchurian (Wet)': '/images/menu pics/Chicken_Manchurian_Wet.jpeg',
    
    // SEAFOOD
    'Fish Masala': '/images/menu pics/Fish_Masala.jpeg',
    'Fish Chettinadu Curry': '/images/menu pics/Fish_Masala.jpeg',
    'Fish Pulusu': '/images/menu pics/Fish_Pulusu.jpg',
    'Shrimp Iguru': '/images/menu pics/Guntur_Shrimp.png',
    'Amaravati Royyala Kura': '/images/menu pics/Guntur_Shrimp.png',
    'Tandoori Pomfret (Fish)': '/images/menu pics/Tandoori_Pomfret.jpg',
    
    // BREADS & SIDES
    'Plain Naan': '/images/menu pics/Plain_Naan.jpeg',
    'Butter Naan': '/images/menu pics/Butter_Naan.jpeg',
    'Garlic Naan': '/images/menu pics/Garlic_Naan.jpeg',
    'Tandoori Roti': '/images/menu pics/Tandoori_Roti.jpeg',
    'Onion Kulcha': '/images/menu pics/Onion_Kulcha.jpeg',
    'Bread Basket': '/images/menu pics/Chilli_Naan.jpeg',
    'Rice': '/images/menu pics/Rice.jpeg',
    'Masala Rice': '/images/menu pics/Masala_Rice.jpg',
    'Pulav Rice': '/images/menu pics/Rice.jpeg',
    'Raita / Salan': '/images/menu pics/Butter_Milk.jpeg',
    'Onion Salad': '/images/menu pics/Onion_Dosa.jpeg',
    
    // DESSERTS & BEVERAGES
    'Gulab Jamun': '/images/menu pics/Gulab_Jamu.jpeg',
    'Rasmalai': '/images/menu pics/Rasmalia.jpeg',
    'Mango Lassi': '/images/menu pics/Mango_Lassi.jpeg',
    'Sweet Lassi': '/images/menu pics/Salt_Lassi.jpeg',
    'Indian Masala Tea (Chai)': '/images/menu pics/Badam_Milk.jpeg',
    'Falooda Shake': '/images/menu pics/Mango_Lassi.jpeg',
    'Mango Shake': '/images/menu pics/Mango_Lassi.jpeg',
    'Ice Cream Double Scoop': '/images/menu pics/Gulab_Jamu.jpeg',
    'Matka Kulfi': '/images/menu pics/Rasmalia.jpeg',
    
    // WEEKEND SPECIALS
    'Natukodi Fry Biryani': '/images/menu pics/Natukodi_Fry_Biryani.jpeg',
    'Gongura Goat Fry Biryani': '/images/menu pics/Gongura_Chicken_Dum_Biryani.jpeg',
    'Rajugari Royyala Fry Biryani': '/images/menu pics/Shrimp_Biryani.jpeg',
    'Nalli Gosht Pulav': '/images/menu pics/Aavakai_Goat_Dum_Biryani.jpeg',
    'Dosa with Chicken Curry': '/images/menu pics/Egg_Dosa.jpeg',
    'Dosa with Goat Curry': '/images/menu pics/Podi_Dosa.jpeg',
    'Natukodi (Country Chicken) Fry': '/images/menu pics/Guntur_Chicken.jpeg',
    'Gongura Mutton Fry': '/images/menu pics/Gongura_Mutton_Curry.jpeg',
    'Royyala Vepudu (Shrimp Fry)': '/images/menu pics/Guntur_Shrimp.png',
    
    // LUNCH SPECIALS / COMBOS
    'Paneer Tikka Combo': '/images/menu pics/Paneer_Tikka_Kabab.jpeg',
    'Chole Masala Combo': '/images/menu pics/Chole_Bhatura.jpeg',
    'Dal Makhani Combo': '/images/menu pics/Dal_Makhani.jpeg',
    'Butter Chicken Combo': '/images/menu pics/Butter_Chicken.jpeg',
    'Chicken Tikka Combo': '/images/menu pics/Chicken_Tikka_Kabab.jpeg',
    'Hyderabadi Chicken Curry Combo': '/images/menu pics/Hyderabad_Chicken_Curry.jpeg',
    'Veg Biryani Combo': '/images/menu pics/Hyderabadi_Veg_Dum_Biryani.jpeg',
    'Chicken Biryani Combo': '/images/menu pics/Hyderabadi_Chicken_Dum_Biryani.jpeg',
    'Goat Biryani Combo': '/images/menu pics/Hyderbadi_Goat_Dum_Biryani_-_Single_Pack_-_24_oz.jpeg',
    'Veg Thali': '/images/menu pics/Chole_Bhatura.jpeg',
    'Non-Veg Thali': '/images/menu pics/Bawarchi_Tandoori_Mix_Grill.jpeg',
  };

  // Return mapped image or default fallback
  return imageMap[itemName] || '/images/hero-biryani.jpg';
};

const Menu = () => {
  const categories = [
    {
      name: 'Biryanis & Pulavs',
      icon: <Flame className="w-6 h-6" />,
      featured: true,
      items: [
        { name: 'Hyderabadi Chicken Dum Biryani', price: '$16.49', description: 'Aromatic basmati rice with tender chicken', image: getMenuItemImage('Hyderabadi Chicken Dum Biryani') },
        { name: 'Hyderabadi Goat Dum Biryani', price: '$17.99', description: 'Slow-cooked goat meat with fragrant spices', image: getMenuItemImage('Hyderabadi Goat Dum Biryani') },
        { name: 'Boneless Chicken Biryani', price: '$17.99', description: 'Premium boneless chicken biryani', image: getMenuItemImage('Boneless Chicken Biryani') },
        { name: 'Boneless Mutton Biryani', price: '$18.99', description: 'Tender boneless mutton biryani', image: getMenuItemImage('Boneless Mutton Biryani') },
        { name: 'Gongura Chicken Dum Biryani', price: '$17.49', description: 'Chicken biryani with tangy sorrel leaves', image: getMenuItemImage('Gongura Chicken Dum Biryani') },
        { name: 'Gongura Mutton Dum Biryani', price: '$18.49', description: 'Mutton biryani with signature gongura', image: getMenuItemImage('Gongura Mutton Dum Biryani') },
        { name: 'Chicken Ghee Roast Biryani', price: '$18.99', description: 'Rich ghee-roasted chicken biryani', image: getMenuItemImage('Chicken Ghee Roast Biryani') },
        { name: 'Mutton Ghee Roast Biryani', price: '$19.49', description: 'Premium ghee-roasted mutton biryani', image: getMenuItemImage('Mutton Ghee Roast Biryani') },
        { name: 'Nalli Gosht Biryani', price: '$21.99', description: 'Tender bone marrow biryani specialty', image: getMenuItemImage('Nalli Gosht Biryani') },
        { name: 'Hyderabadi Veg Dum Biryani', price: '$13.99', description: 'Mixed vegetables with basmati rice', image: getMenuItemImage('Hyderabadi Veg Dum Biryani') },
        { name: 'Paneer Biryani', price: '$15.49', description: 'Cottage cheese biryani', image: getMenuItemImage('Paneer Biryani') },
        { name: 'Paneer Ghee Roast Biryani', price: '$16.99', description: 'Rich ghee-roasted paneer biryani', image: getMenuItemImage('Paneer Ghee Roast Biryani') },
        { name: 'Egg Biryani', price: '$13.99', description: 'Boiled eggs layered with aromatic rice', image: getMenuItemImage('Egg Biryani') },
        { name: 'Vijaywada Spl. Bnls. Biryani', price: '$17.99', description: 'Spicy Vijayawada style boneless chicken', image: getMenuItemImage('Vijaywada Spl. Bnls. Biryani') },
        { name: 'Ulavacharu Chicken Dum Biryani', price: '$17.99', description: 'Chicken with horse gram soup', image: getMenuItemImage('Ulavacharu Chicken Dum Biryani') },
        { name: 'Shirmp Biryani', price: '$18.49', description: 'Fresh shrimp biryani', image: getMenuItemImage('Shirmp Biryani') },
        { name: 'Fish Biryani', price: '$17.99', description: 'Fresh fish layered with rice', image: getMenuItemImage('Fish Biryani') },
      ]
    },
    {
      name: 'Appetizers (Vegetarian)',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Vegetable Samosa {2}', price: '$6.99', description: 'Minced potatoes & peas wrapped in pastry dough & fried', image: getMenuItemImage('Vegetable Samosa {2}') },
        { name: 'Mix Veg Pakoda', price: '$12.99', description: 'Veggies coated in spiced gram flour batter and deep-fried', image: getMenuItemImage('Mix Veg Pakoda') },
        { name: 'Chilli Idli', price: '$14.99', description: 'Fried idli covered in special sauce with garlic and hot chillies', image: getMenuItemImage('Chilli Idli') },
        { name: 'Gobi Manchurian', price: '$14.99', description: 'Stir fried cauliflower in Manchurian sauce', image: getMenuItemImage('Gobi Manchurian') },
        { name: 'Gobi 65 Dry / Wet', price: '$14.99', description: 'Spicy battered cauliflower tossed in sauce', image: getMenuItemImage('Gobi 65 Dry / Wet') },
        { name: 'Chilli Paneer', price: '$15.49', description: 'Wok tossed paneer with tangy chilli sauce', image: getMenuItemImage('Chilli Paneer') },
        { name: 'Paneer 65 Dry / Wet', price: '$15.49', description: 'Spicy battered paneer tossed in sauce', image: getMenuItemImage('Paneer 65 Dry / Wet') },
        { name: 'Paneer Tikka Kabab', price: '$16.49', description: 'Grilled cottage cheese with bell peppers', image: getMenuItemImage('Paneer Tikka Kabab') },
        { name: 'Crispy Corn', price: '$14.99', description: 'Golden-fried corn kernels tossed with onions and spices', image: getMenuItemImage('Crispy Corn') },
        { name: 'Karampodi Gobi', price: '$14.99', description: 'Gobi sautéed with karampodi and herbs', image: getMenuItemImage('Karampodi Gobi') },
      ]
    },
    {
      name: 'Appetizers (Non-Veg)',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Chicken 65 Dry / Wet', price: '$15.49', description: 'Marinated chicken deep fried and tossed in sauce', image: getMenuItemImage('Chicken 65 Dry / Wet') },
        { name: 'Chicken Lollipops (Dry) {4}', price: '$16.49', description: 'Chicken drumsticks marinated and deep fried', image: getMenuItemImage('Chicken Lollipops (Dry) {4}') },
        { name: 'Chilli Chicken', price: '$16.49', description: 'Wok tossed chicken coated with tangy chilli sauce', image: getMenuItemImage('Chilli Chicken') },
        { name: 'Chicken Manchurian', price: '$16.99', description: 'Battered fried chicken in Manchurian sauce', image: getMenuItemImage('Chicken Manchurian') },
        { name: 'Chicken 555', price: '$16.99', description: 'Deep fried chicken in special sauce with cashews', image: getMenuItemImage('Chicken 555') },
        { name: 'Chicken Majestic', price: '$16.99', description: 'Marinated chicken in rich and creamy sauce', image: getMenuItemImage('Chicken Majestic') },
        { name: 'Chicken Ghee Roast', price: '$16.99', description: 'Chicken with green chillies, ghee and special spices', image: getMenuItemImage('Chicken Ghee Roast') },
        { name: 'Chicken Pepper Fry', price: '$16.99', description: 'Chicken deep fried with pepper to perfection', image: getMenuItemImage('Chicken Pepper Fry') },
        { name: 'Karampodi Kodi (Chicken)', price: '$16.99', description: 'Chicken fried with karampodi and herbs', image: getMenuItemImage('Karampodi Kodi (Chicken)') },
        { name: 'Kaju Kodi Fry', price: '$16.99', description: 'Chicken with cashew, cinnamon and clove', image: getMenuItemImage('Kaju Kodi Fry') },
        { name: 'Mutton Pepper Fry (Bone-In)', price: '$16.99', description: 'Bone-in goat fried with chettinad masala', image: getMenuItemImage('Mutton Pepper Fry (Bone-In)') },
        { name: 'Mutton Roast (Boneless)', price: '$17.49', description: 'Boneless goat with chettinad masala', image: getMenuItemImage('Mutton Roast (Boneless)') },
        { name: 'Mutton Ghee Roast (Boneless)', price: '$18.99', description: 'Premium boneless goat ghee roast', image: getMenuItemImage('Mutton Ghee Roast (Boneless)') },
        { name: 'Apollo Fish', price: '$17.99', description: 'Spicy fried fish specialty', image: getMenuItemImage('Apollo Fish') },
        { name: 'Chilli Fish', price: '$17.99', description: 'Fish tossed in spicy chilli sauce', image: getMenuItemImage('Chilli Fish') },
        { name: 'Chilli Shrimp', price: '$18.49', description: 'Shrimp in tangy chilli sauce', image: getMenuItemImage('Chilli Shrimp') },
        { name: 'Tandoori Chicken (Half)', price: '$14.99', description: 'Clay oven roasted chicken', image: getMenuItemImage('Tandoori Chicken (Half)') },
        { name: 'Tandoori Chicken (Full)', price: '$24.99', description: 'Full clay oven roasted chicken', image: getMenuItemImage('Tandoori Chicken (Full)') },
        { name: 'Chicken Tikka Kabab', price: '$16.99', description: 'Grilled chicken tikka from tandoor', image: getMenuItemImage('Chicken Tikka Kabab') },
      ]
    },
    {
      name: 'Vegetarian Curries',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Dal Tadka', price: '$14.99', description: 'Yellow lentils tempered with spices', image: getMenuItemImage('Dal Tadka') },
        { name: 'Dal Makhani', price: '$15.99', description: 'Creamy black lentils with butter', image: getMenuItemImage('Dal Makhani') },
        { name: 'Chana Masala', price: '$14.99', description: 'Chickpeas in traditional North Indian style', image: getMenuItemImage('Chana Masala') },
        { name: 'Paneer Butter Masala', price: '$16.99', description: 'Cottage cheese in rich butter cream sauce', image: getMenuItemImage('Paneer Butter Masala') },
        { name: 'Palak Paneer (Spinach)', price: '$17.49', description: 'Cottage cheese in spinach puree', image: getMenuItemImage('Palak Paneer (Spinach)') },
        { name: 'Paneer Tikka Masala', price: '$16.99', description: 'Grilled paneer in tomato cream sauce', image: getMenuItemImage('Paneer Tikka Masala') },
        { name: 'Kadai Paneer', price: '$17.49', description: 'Paneer with bell peppers in creamy gravy', image: getMenuItemImage('Kadai Paneer') },
        { name: 'Shahi Paneer', price: '$17.49', description: 'Paneer in creamy cashew paste gravy', image: getMenuItemImage('Shahi Paneer') },
        { name: 'Vegetable Korma', price: '$15.99', description: 'Mixed vegetables in delicious creamy gravy', image: getMenuItemImage('Vegetable Korma') },
        { name: 'Kadai Vegetable', price: '$15.99', description: 'Mixed vegetables with bell pepper and onions', image: getMenuItemImage('Kadai Vegetable') },
        { name: 'Malai Kofta', price: '$16.99', description: 'Fried vegetable balls in mild creamy gravy', image: getMenuItemImage('Malai Kofta') },
        { name: 'Gutti Vankay Curry', price: '$15.99', description: 'Eggplant with sesame, peanut and yogurt', image: getMenuItemImage('Gutti Vankay Curry') },
        { name: 'Aloo Gobi Masala', price: '$15.99', description: 'Potatoes and cauliflower Punjabi style', image: getMenuItemImage('Aloo Gobi Masala') },
      ]
    },
    {
      name: 'Chicken Curries',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Butter Chicken', price: '$17.49', description: 'Chicken in tomato puree and cream', image: getMenuItemImage('Butter Chicken') },
        { name: 'Chicken Tikka Masala', price: '$17.49', description: 'Chicken tikka in fenugreek tomato gravy', image: getMenuItemImage('Chicken Tikka Masala') },
        { name: 'Kadai Chicken', price: '$17.49', description: 'Chicken with bell peppers in creamy gravy', image: getMenuItemImage('Kadai Chicken') },
        { name: 'Hyderabad Chicken Curry', price: '$17.49', description: 'Nizam special boneless chicken dish', image: getMenuItemImage('Hyderabad Chicken Curry') },
        { name: 'Chicken Shahi Korma', price: '$17.49', description: 'Mughlai delight with cardamom flavor', image: getMenuItemImage('Chicken Shahi Korma') },
        { name: 'Andhra Chicken Curry', price: '$17.49', description: 'Bone-in chicken with special Andhra spices', image: getMenuItemImage('Andhra Chicken Curry') },
        { name: 'Gongura Chicken Curry', price: '$17.99', description: 'Chicken with red sorrel leaves & spices', image: getMenuItemImage('Gongura Chicken Curry') },
        { name: 'Amaravati Chicken Curry', price: '$17.99', description: 'Spicy chicken with hint of coconut', image: getMenuItemImage('Amaravati Chicken Curry') },
        { name: 'Ulavacharu Chicken Curry', price: '$18.49', description: 'Chicken with horse gram soup', image: getMenuItemImage('Ulavacharu Chicken Curry') },
        { name: 'Chicken Vindaloo', price: '$17.49', description: 'Chicken with potatoes and spice herbs', image: getMenuItemImage('Chicken Vindaloo') },
        { name: 'Chicken Pepper Masala', price: '$17.49', description: 'Tender chicken with ground spices', image: getMenuItemImage('Chicken Pepper Masala') },
        { name: 'Karaikudi Chicken', price: '$17.49', description: 'Aromatic chicken with special spices', image: getMenuItemImage('Karaikudi Chicken') },
      ]
    },
    {
      name: 'Mutton/Goat Curries',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Goat Korma', price: '$18.49', description: 'Goat simmered in creamy sauce with cardamoms', image: getMenuItemImage('Goat Korma') },
        { name: 'Mutton Masala', price: '$19.49', description: 'Goat in fresh ground spices with onions & tomato', image: getMenuItemImage('Mutton Masala') },
        { name: 'Hyderabad Goat Curry', price: '$19.49', description: 'Goat with roasted dry spices paste', image: getMenuItemImage('Hyderabad Goat Curry') },
        { name: 'Gongura Mutton Curry', price: '$19.49', description: 'Traditional goat with gongura leaves', image: getMenuItemImage('Gongura Mutton Curry') },
        { name: 'Amaravati Mutton Curry', price: '$19.49', description: 'Tender goat with spicy sauce and coconut', image: getMenuItemImage('Amaravati Mutton Curry') },
        { name: 'Ulavacharu Goat Curry', price: '$19.99', description: 'Goat with horse gram soup and spices', image: getMenuItemImage('Ulavacharu Goat Curry') },
        { name: 'Mutton Pepper Masala', price: '$18.49', description: 'Tender mutton with ground spices', image: getMenuItemImage('Mutton Pepper Masala') },
        { name: 'Mutton Vindaloo (Goat)', price: '$18.49', description: 'Tangy spicy curry with goat and potato', image: getMenuItemImage('Mutton Vindaloo (Goat)') },
        { name: 'Karaikudi Goat Curry', price: '$19.49', description: 'Aromatic goat with special spices', image: getMenuItemImage('Karaikudi Goat Curry') },
        { name: 'Lamb Rogan Gosh', price: '$19.49', description: 'Tender lamb in tomato and onion gravy', image: getMenuItemImage('Lamb Rogan Gosh') },
        { name: 'Lamb Korma', price: '$19.49', description: 'Lamb in mild cashew sauce with herbs', image: getMenuItemImage('Lamb Korma') },
        { name: 'Kadai Lamb', price: '$19.49', description: 'Northwest frontier specialty with peppers', image: getMenuItemImage('Kadai Lamb') },
        { name: 'Lamb Saag', price: '$19.49', description: 'Spiced lamb with spinach and cilantro', image: getMenuItemImage('Lamb Saag') },
      ]
    },
    {
      name: 'Dosas & South Indian',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Plain Dosa', price: '$9.49', description: 'Traditional crispy rice and lentil crepe', image: getMenuItemImage('Plain Dosa') },
        { name: 'Masala Dosa', price: '$11.49', description: 'Dosa filled with spiced potato filling', image: getMenuItemImage('Masala Dosa') },
        { name: 'Mysore Masala Dosa', price: '$12.49', description: 'Spicy red chutney dosa with potato filling', image: getMenuItemImage('Mysore Masala Dosa') },
        { name: 'Paneer Tikka Dosa', price: '$13.99', description: 'Dosa with paneer tikka filling', image: getMenuItemImage('Paneer Tikka Dosa') },
        { name: 'Chicken Tikka Dosa', price: '$14.99', description: 'Dosa with chicken tikka filling', image: getMenuItemImage('Chicken Tikka Dosa') },
        { name: '70 MM Dosa (Dine in Only)', price: '$12.99', description: 'Giant 70mm crispy dosa', image: getMenuItemImage('70 MM Dosa (Dine in Only)') },
        { name: 'Rava Masala Dosa', price: '$14.49', description: 'Semolina dosa with potato filling (15 mins)', image: getMenuItemImage('Rava Masala Dosa') },
        { name: 'Idli {2}', price: '$6.99', description: 'Steamed rice cakes with sambar and chutney', image: getMenuItemImage('Idli {2}') },
        { name: 'Medu Vada {2}', price: '$6.99', description: 'Crispy lentil donuts with sambar', image: getMenuItemImage('Medu Vada {2}') },
        { name: 'Plain Uthappam', price: '$9.99', description: 'Thick rice pancake', image: getMenuItemImage('Plain Uthappam') },
        { name: 'Onion Uthappam', price: '$10.49', description: 'Uthappam topped with onions', image: getMenuItemImage('Onion Uthappam') },
        { name: 'Mix Veg Uthappam', price: '$11.49', description: 'Uthappam with mixed vegetables', image: getMenuItemImage('Mix Veg Uthappam') },
      ]
    },
    {
      name: 'Indo Chinese',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Veg Hakka Noodles', price: '$13.99', description: 'Noodles stir fried with veggies & spices', image: getMenuItemImage('Veg Hakka Noodles') },
        { name: 'Chicken Hakka Noodles', price: '$15.49', description: 'Noodles with chicken, egg, veggies', image: getMenuItemImage('Chicken Hakka Noodles') },
        { name: 'Shrimp Hakka Noodles', price: '$16.99', description: 'Noodles with shrimp, egg, veggies', image: getMenuItemImage('Shrimp Hakka Noodles') },
        { name: 'Veg Fried Rice', price: '$13.49', description: 'Aromatic rice with fine chopped vegetables', image: getMenuItemImage('Veg Fried Rice') },
        { name: 'Chicken Fried Rice', price: '$15.49', description: 'Rice with chicken and vegetables', image: getMenuItemImage('Chicken Fried Rice') },
        { name: 'Shrimp Fried Rice', price: '$16.99', description: 'Rice with shrimp and vegetables', image: getMenuItemImage('Shrimp Fried Rice') },
        { name: 'Chicken Schezwan Fried Rice', price: '$16.99', description: 'Spicy Schezwan rice with chicken', image: getMenuItemImage('Chicken Schezwan Fried Rice') },
        { name: 'Veg Manchurian (Wet)', price: '$14.99', description: 'Vegetable balls in Manchurian sauce', image: getMenuItemImage('Veg Manchurian (Wet)') },
        { name: 'Chicken Manchurian (Wet)', price: '$17.99', description: 'Chicken in Manchurian sauce', image: getMenuItemImage('Chicken Manchurian (Wet)') },
      ]
    },
    {
      name: 'Seafood',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Fish Masala', price: '$17.99', description: 'Marinated fish with fried onions and tomatoes', image: getMenuItemImage('Fish Masala') },
        { name: 'Fish Chettinadu Curry', price: '$17.99', description: 'Fish with special Chettinad masala', image: getMenuItemImage('Fish Chettinadu Curry') },
        { name: 'Fish Pulusu', price: '$17.99', description: 'Fish in hot Andhra spices', image: getMenuItemImage('Fish Pulusu') },
        { name: 'Shrimp Iguru', price: '$19.99', description: 'Shrimp in delicately ground spices', image: getMenuItemImage('Shrimp Iguru') },
        { name: 'Amaravati Royyala Kura', price: '$19.99', description: 'Tender shrimp with spicy Indian spices', image: getMenuItemImage('Amaravati Royyala Kura') },
        { name: 'Apollo Fish', price: '$17.99', description: 'Spicy fried fish specialty', image: getMenuItemImage('Apollo Fish') },
        { name: 'Chilli Fish', price: '$17.99', description: 'Fish tossed in spicy chilli sauce', image: getMenuItemImage('Chilli Fish') },
        { name: 'Chilli Shrimp', price: '$18.49', description: 'Shrimp in tangy chilli sauce', image: getMenuItemImage('Chilli Shrimp') },
        { name: 'Tandoori Pomfret (Fish)', price: '$18.49', description: 'Clay oven roasted pomfret', image: getMenuItemImage('Tandoori Pomfret (Fish)') },
      ]
    },
    {
      name: 'Breads & Sides',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Plain Naan', price: '$2.99', description: 'Soft white flour bread', image: getMenuItemImage('Plain Naan') },
        { name: 'Butter Naan', price: '$3.49', description: 'Naan brushed with butter', image: getMenuItemImage('Butter Naan') },
        { name: 'Garlic Naan', price: '$4.49', description: 'Naan with fresh garlic', image: getMenuItemImage('Garlic Naan') },
        { name: 'Tandoori Roti', price: '$3.49', description: 'Whole wheat bread from tandoor', image: getMenuItemImage('Tandoori Roti') },
        { name: 'Onion Kulcha', price: '$4.49', description: 'Naan stuffed with spiced onions', image: getMenuItemImage('Onion Kulcha') },
        { name: 'Bread Basket', price: '$14.99', description: 'Tandoori Roti, Garlic, Plain Naan, Onion Kulcha', image: getMenuItemImage('Bread Basket') },
        { name: 'Rice', price: '$3.99', description: 'Plain basmati rice', image: getMenuItemImage('Rice') },
        { name: 'Masala Rice', price: '$4.99', description: 'Spiced basmati rice', image: getMenuItemImage('Masala Rice') },
        { name: 'Pulav Rice', price: '$6.99', description: 'Aromatic rice with vegetables', image: getMenuItemImage('Pulav Rice') },
        { name: 'Raita / Salan', price: '$1.00', description: 'Yogurt side or curry sauce', image: getMenuItemImage('Raita / Salan') },
        { name: 'Onion Salad', price: '$3.99', description: 'Onion, chilli and lemon slices', image: getMenuItemImage('Onion Salad') },
      ]
    },
    {
      name: 'Desserts & Beverages',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Gulab Jamun', price: '$4.99', description: 'Deep fried milk pastry in rose honey syrup', image: getMenuItemImage('Gulab Jamun') },
        { name: 'Rasmalai', price: '$5.49', description: 'Cheese patties in cold sweetened milk', image: getMenuItemImage('Rasmalai') },
        { name: 'Mango Lassi', price: '$4.99', description: 'Refreshing mango yogurt drink', image: getMenuItemImage('Mango Lassi') },
        { name: 'Sweet Lassi', price: '$4.99', description: 'Sweet yogurt drink', image: getMenuItemImage('Sweet Lassi') },
        { name: 'Indian Masala Tea (Chai)', price: '$3.99', description: 'Spiced Indian tea with milk', image: getMenuItemImage('Indian Masala Tea (Chai)') },
        { name: 'Falooda Shake', price: '$5.99', description: 'Traditional falooda milkshake', image: getMenuItemImage('Falooda Shake') },
        { name: 'Mango Shake', price: '$5.99', description: 'Fresh mango shake', image: getMenuItemImage('Mango Shake') },
        { name: 'Ice Cream Double Scoop', price: '$6.99', description: 'Ask for available flavours', image: getMenuItemImage('Ice Cream Double Scoop') },
        { name: 'Matka Kulfi', price: '$4.49', description: 'Traditional Indian ice cream', image: getMenuItemImage('Matka Kulfi') },
      ]
    },
    {
      name: 'Weekend Specials',
      icon: <Flame className="w-6 h-6" />,
      featured: true,
      items: [
        { name: 'Natukodi Fry Biryani', price: '$17.99', description: 'Country chicken fry biryani', image: getMenuItemImage('Natukodi Fry Biryani') },
        { name: 'Gongura Goat Fry Biryani', price: '$18.99', description: 'Goat fry with gongura leaves', image: getMenuItemImage('Gongura Goat Fry Biryani') },
        { name: 'Rajugari Royyala Fry Biryani', price: '$18.49', description: 'Shrimp fry biryani special', image: getMenuItemImage('Rajugari Royyala Fry Biryani') },
        { name: 'Nalli Gosht Pulav', price: '$21.99', description: 'Bone marrow pulav', image: getMenuItemImage('Nalli Gosht Pulav') },
        { name: 'Dosa with Chicken Curry', price: '$14.99', description: 'Crispy dosa served with chicken curry', image: getMenuItemImage('Dosa with Chicken Curry') },
        { name: 'Dosa with Goat Curry', price: '$15.99', description: 'Crispy dosa served with goat curry', image: getMenuItemImage('Dosa with Goat Curry') },
        { name: 'Natukodi (Country Chicken) Fry', price: '$16.49', description: 'Traditional country chicken fry', image: getMenuItemImage('Natukodi (Country Chicken) Fry') },
        { name: 'Gongura Mutton Fry', price: '$17.49', description: 'Mutton with bone fried in gongura', image: getMenuItemImage('Gongura Mutton Fry') },
        { name: 'Royyala Vepudu (Shrimp Fry)', price: '$18.49', description: 'Spicy Andhra style shrimp fry', image: getMenuItemImage('Royyala Vepudu (Shrimp Fry)') },
      ]
    },
    {
      name: 'Lunch Specials',
      icon: <ChefHat className="w-6 h-6" />,
      items: [
        { name: 'Paneer Tikka Combo', price: '$14.99', description: 'Served with Masala Rice or Plain Naan', image: getMenuItemImage('Paneer Tikka Combo') },
        { name: 'Chole Masala Combo', price: '$14.99', description: 'Served with Masala Rice or Plain Naan', image: getMenuItemImage('Chole Masala Combo') },
        { name: 'Dal Makhani Combo', price: '$14.99', description: 'Served with Masala Rice or Plain Naan', image: getMenuItemImage('Dal Makhani Combo') },
        { name: 'Butter Chicken Combo', price: '$15.99', description: 'Served with Masala Rice or Plain Naan', image: getMenuItemImage('Butter Chicken Combo') },
        { name: 'Chicken Tikka Combo', price: '$15.99', description: 'Served with Masala Rice or Plain Naan', image: getMenuItemImage('Chicken Tikka Combo') },
        { name: 'Hyderabadi Chicken Curry Combo', price: '$15.99', description: 'Served with Masala Rice or Plain Naan', image: getMenuItemImage('Hyderabadi Chicken Curry Combo') },
        { name: 'Veg Biryani Combo', price: '$13.99', description: 'With veg appetizer, curry, naan, raita, dessert', image: getMenuItemImage('Veg Biryani Combo') },
        { name: 'Chicken Biryani Combo', price: '$14.99', description: 'With chicken appetizer, curry, naan, raita, dessert', image: getMenuItemImage('Chicken Biryani Combo') },
        { name: 'Goat Biryani Combo', price: '$16.99', description: 'With appetizer, curry, naan, raita, dessert', image: getMenuItemImage('Goat Biryani Combo') },
        { name: 'Veg Thali', price: '$14.99', description: 'Complete vegetarian meal platter', image: getMenuItemImage('Veg Thali') },
        { name: 'Non-Veg Thali', price: '$15.99', description: 'Complete non-vegetarian meal platter', image: getMenuItemImage('Non-Veg Thali') },
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
                    className="glass-morphism p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
                  >
                    <div className="flex gap-4">
                      {/* Menu Item Image */}
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Menu Item Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold group-hover:text-primary-400 transition-colors line-clamp-1">
                            {item.name}
                          </h3>
                          <span className="text-primary-400 font-bold text-lg ml-2 flex-shrink-0">{item.price}</span>
                        </div>
                        <p className="text-white/60 text-sm line-clamp-2">{item.description}</p>
                      </div>
                    </div>
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
