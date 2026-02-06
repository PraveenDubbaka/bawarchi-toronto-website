import { motion } from 'framer-motion';
import { ChefHat, Flame, Leaf } from 'lucide-react';

// Auto-generated image mapping from scraped portal images
const getMenuItemImage = (itemName: string): string => {
  // Exact matches for all menu items
  const imageMap: { [key: string]: string } = {
    '70 MM Dosa (Dine in Only)': '/images/Food Pic/noodles.jpg',
    'Aloo Gobi Masala': '/images/Food Pic/e2aa5f68-849e-489a-ad86-30968e395cf6-retina-large.jpeg.png',
    'Amaravati Chicken Curry': '/images/Food Pic/73d24945-7d5d-41f9-b56d-6db8cd29d2fa-retina-large.jpeg',
    'Amaravati Mutton Curry': '/images/Food Pic/gulab-jamun.jpg',
    'Amaravati Royyala Kura': '/images/Food Pic/c1d343bd-0363-469d-90bc-7ecbe6aa9435-retina-large.jpeg',
    'Andhra Chicken Curry': '/images/Food Pic/b9139238-15c1-4830-90d2-f1b9c67a229f-retina-large.jpeg',
    'Apollo Fish': '/images/Food Pic/c006c150-493c-4d26-b7d4-5345f00b16fa-retina-large.jpeg',
    'Boneless Chicken Biryani': '/images/Food Pic/0ff5149d-9f0f-4d50-a218-f2189994e0ac-retina-large.jpeg',
    'Boneless Mutton Biryani': '/images/Food Pic/317d402a-681a-448f-b885-6d707a8f6fff-retina-large.jpeg',
    'Bread Basket': '/images/Food Pic/95f1ba16-69fc-431b-8ef8-a12d353a9a5e-retina-large.jpeg',
    'Butter Chicken': '/images/Food Pic/2fe6a448-b825-4d77-8446-945bb2d8b0e9-retina-large.jpeg',
    'Butter Chicken Combo': '/images/Food Pic/vada.jpg',
    'Butter Naan': '/images/Food Pic/81e736be-1e89-4909-8315-4c9a57503ecf-retina-large.jpeg',
    'Chana Masala': '/images/Food Pic/320c9d6a-aa9c-4767-816f-848221fcbd6c-retina-large.jpeg.png',
    'Chicken 555': '/images/Food Pic/c8439b10-799c-4528-a047-bd0c9a13b5b8-retina-large.jpeg',
    'Chicken 65 Dry / Wet': '/images/Food Pic/c93fec5f-3431-4066-bcc7-7cb678f45c28-retina-large.jpeg',
    'Chicken Biryani Combo': '/images/Food Pic/526c6e59-0e73-4c3c-8168-bedbc0ddf9b3-retina-large.jpeg',
    'Chicken Fried Rice': '/images/Food Pic/Veg Fried Rice.png',
    'Chicken Ghee Roast': '/images/Food Pic/a06435a4-f52b-4b5e-9e42-d68a8af204e2-retina-large_1.jpeg',
    'Chicken Ghee Roast Biryani': '/images/Food Pic/7be68a8e-b118-46bb-a762-057a9f765a2b-retina-large_1.jpeg',
    'Chicken Hakka Noodles': '/images/Food Pic/84ddb455-f571-4bce-abb2-03cd3cae7044-retina-large.jpeg',
    'Chicken Lollipops (Dry) {4}': '/images/Food Pic/8be19af1-558e-4c8a-a343-ae0ff5b73150-retina-large.jpeg',
    'Chicken Majestic': '/images/Food Pic/0dc7debf-126c-4a16-a2ce-50ce146c46dd-retina-large.jpeg',
    'Chicken Manchurian': '/images/Food Pic/Guthi Vankaya Biryani.png',
    'Chicken Manchurian (Wet)': '/images/Food Pic/baab15e4-c4aa-4316-926e-3c80d26305b2-retina-large.jpeg',
    'Chicken Pepper Fry': '/images/Food Pic/cd0b9e90-9b7c-4c07-b10c-879ad27bbf3c-retina-large.jpeg',
    'Chicken Pepper Masala': '/images/Food Pic/lassi.jpg',
    'Chicken Schezwan Fried Rice': '/images/Food Pic/curry.jpg',
    'Chicken Shahi Korma': '/images/Food Pic/fb388b38-b856-4692-8b70-000b1cceaa8d-retina-large.jpeg',
    'Chicken Tikka Combo': '/images/Food Pic/a76037ed-e65a-4aaa-b7de-eb49b0930e0f-retina-large_1.jpeg',
    'Chicken Tikka Dosa': '/images/Food Pic/28261cf3-b4dc-49bd-aebe-2b45304db317.jpg_1.jpeg',
    'Chicken Tikka Kabab': '/images/Food Pic/9b5e4da3-47d5-4f04-8756-4c303c030d32-retina-large_1.jpeg',
    'Chicken Tikka Masala': '/images/Food Pic/0ff5149d-9f0f-4d50-a218-f2189994e0ac-retina-large_1.jpeg',
    'Chicken Vindaloo': '/images/Food Pic/2778d2e7-6fae-479c-86da-08c6141cd776-retina-large.jpg.jpeg',
    'Chilli Chicken': '/images/Food Pic/Gobi 65.png',
    'Chilli Fish': '/images/Food Pic/8c6d6e09-ab28-44a8-898d-e7e54c699dd4-retina-large_1.jpeg',
    'Chilli Idli': '/images/Food Pic/a07c0e87-2854-4709-9678-9eea7ba37e08-retina-large_1.jpeg',
    'Chilli Paneer': '/images/Food Pic/8be19af1-558e-4c8a-a343-ae0ff5b73150-retina-large_1.jpeg',
    'Chilli Shrimp': '/images/Food Pic/1db88100-0018-45c6-8616-943991187919-retina-large.jpeg',
    'Chole Masala Combo': '/images/Food Pic/rasmalai.jpg',
    'Crispy Corn': '/images/Food Pic/b65fc459-be00-4d83-8bbe-88cfb1bb74c5-retina-large_1.jpeg',
    'Dal Makhani': '/images/Food Pic/dosa.jpg',
    'Dal Makhani Combo': '/images/Food Pic/28261cf3-b4dc-49bd-aebe-2b45304db317.jpg_2.jpeg',
    'Dal Tadka': '/images/Food Pic/125c519e-ae0e-41c5-a971-e5aeead04d22-retina-large.jpeg',
    'Dosa with Chicken Curry': '/images/Food Pic/baab15e4-c4aa-4316-926e-3c80d26305b2-retina-large_1.jpeg',
    'Dosa with Goat Curry': '/images/Food Pic/ddf26454-cdb3-4198-a768-d553c94fddd5-retina-large.jpeg',
    'Egg Biryani': '/images/Food Pic/9f44ba9d-d3b3-4e36-8f28-5a162c06e410-retina-large.jpeg',
    'Falooda Shake': '/images/Food Pic/2edf7944-1d4b-4f33-8aad-9339beaff1b0-retina-large.jpeg',
    'Fish Biryani': '/images/Food Pic/908e4a1e-807c-4603-afdf-4d401338edfe-retina-large.jpeg',
    'Fish Chettinadu Curry': '/images/Food Pic/dc528721-1ea9-40d3-b16e-d60bf7c6c7d0-retina-large.jpeg',
    'Fish Masala': '/images/Food Pic/9f44ba9d-d3b3-4e36-8f28-5a162c06e410-retina-large_1.jpeg',
    'Fish Pulusu': '/images/Food Pic/2c09df52-b9f6-4b0d-ac9b-348503af9354-retina-large.jpeg',
    'Garlic Naan': '/images/Food Pic/f96a7605-e66c-4f55-91a6-795dee7f31e3-retina-large.jpeg',
    'Goat Biryani Combo': '/images/Food Pic/fbbfb9b1-f634-4a6c-864f-56df864c46a8-retina-large_1.jpeg',
    'Goat Korma': '/images/Food Pic/ffb44562-adc8-4250-969c-aa98df541382-retina-large.jpeg',
    'Gobi 65 Dry / Wet': '/images/Food Pic/02a9fb22-59e0-4fdb-9734-8e559b685ca7-retina-large.jpeg',
    'Gobi Manchurian': '/images/Food Pic/9c840cf9-1d46-49c9-adac-2439bdf2a832-retina-large_1.jpeg',
    'Gongura Chicken Curry': '/images/Food Pic/masala-dosa.jpg',
    'Gongura Chicken Dum Biryani': '/images/Food Pic/3c1f6986-b3ee-44b6-9c16-08a69ef14318-retina-large.jpeg',
    'Gongura Goat Fry Biryani': '/images/Food Pic/e0996307-9144-491b-a32c-2174e29f617e-retina-large.jpeg',
    'Gongura Mutton Curry': '/images/Food Pic/2712b2d5-5b70-48aa-8914-114887dd4614-retina-large_1.jpeg',
    'Gongura Mutton Dum Biryani': '/images/Food Pic/ba42a31a-51bc-42aa-ada2-7e5695747a0e-retina-large.jpeg',
    'Gongura Mutton Fry': '/images/Food Pic/c4002254-4db3-49b9-815c-eadf15cdc704-retina-large.jpeg',
    'Gulab Jamun': '/images/Food Pic/chicken-fry.jpg',
    'Gutti Vankay Curry': '/images/Food Pic/22371b68-5021-4121-aed1-99d929192bd1-retina-large.jpeg',
    'Hyderabad Chicken Curry': '/images/Food Pic/da2d4da6-de92-4548-9acf-2b2ddad272ec-retina-large.jpeg',
    'Hyderabad Goat Curry': '/images/Food Pic/fried-rice.jpg',
    'Hyderabadi Chicken Curry Combo': '/images/Food Pic/6f09a9b4-2dc9-43a0-aa22-7859644f87aa-retina-large.jpeg',
    'Hyderabadi Chicken Dum Biryani': '/images/Food Pic/00d31d6f-d73a-4663-9681-f285419c7d7c-92c35b16-17ae-462a-a36f-96daee3cda54-retina-large.jpg.jpeg',
    'Hyderabadi Goat Dum Biryani': '/images/Food Pic/5351b025-9959-452c-adb7-b2446f6ff4ff-retina-large.jpeg',
    'Hyderabadi Veg Dum Biryani': '/images/Food Pic/e2d3019a-86a2-4a5b-8d46-eb31df8c6449-retina-large.jpeg',
    'Ice Cream Double Scoop': '/images/Food Pic/61953395-e873-48b2-97b5-18e1d63abaf4-retina-large.jpeg',
    'Idli {2}': '/images/Food Pic/62366ecf-2e12-404f-a226-8fc05ae4d1a1-retina-large.jpeg',
    'Indian Masala Tea (Chai)': '/images/Food Pic/54acc9e5-c25e-4e97-893a-41fab99cffaf-retina-large.jpeg',
    'Kadai Chicken': '/images/Food Pic/fa875aaa-8444-4c44-a695-d349b0b37dca-retina-large.jpeg',
    'Kadai Lamb': '/images/Food Pic/659d4a4d-9c43-41d6-80c0-035eabf5cc8b-retina-large.jpeg',
    'Kadai Paneer': '/images/Food Pic/cd0b9e90-9b7c-4c07-b10c-879ad27bbf3c-retina-large_1.jpeg',
    'Kadai Vegetable': '/images/Food Pic/biryani.jpg',
    'Kaju Kodi Fry': '/images/Food Pic/b888a79f-89a4-4562-979e-696d6903549f-retina-large.jpeg',
    'Karaikudi Chicken': '/images/Food Pic/chicken-tikka-real.jpg',
    'Karaikudi Goat Curry': '/images/Food Pic/shrimp-curry.jpg',
    'Karampodi Gobi': '/images/Food Pic/393658aa-eec6-449a-906f-e8bdab23165c-retina-large_1.jpeg',
    'Karampodi Kodi (Chicken)': '/images/Food Pic/965d89ac-6b87-48a4-87b2-7df05a327de4-retina-large.jpeg',
    'Lamb Korma': '/images/Food Pic/paneer-tikka.jpg',
    'Lamb Rogan Gosh': '/images/Food Pic/7c8bf958-2137-4cff-9acf-fabb1cdd5d78-retina-large.jpeg',
    'Lamb Saag': '/images/Food Pic/8c6d6e09-ab28-44a8-898d-e7e54c699dd4-retina-large.jpeg',
    'Malai Kofta': '/images/Food Pic/603727af-884f-45a2-986a-a32b9100d95f-retina-large.jpeg',
    'Mango Lassi': '/images/Food Pic/cc566428-2688-48bd-ba10-fc917753f375-retina-large.jpeg',
    'Mango Shake': '/images/Food Pic/dal-makhani.jpg',
    'Masala Dosa': '/images/Food Pic/fbaaad35-244f-4bb3-b512-af9f03706616-retina-large.jpeg',
    'Masala Rice': '/images/Food Pic/5ecf77e2-92a6-4ca3-a4dd-6b63c375c6fb-retina-large.jpeg',
    'Matka Kulfi': '/images/Food Pic/chicken-65.jpg',
    'Medu Vada {2}': '/images/Food Pic/9c2fb47a-cbc8-4844-b1d7-c50bf50153e2-retina-large.jpeg',
    'Mix Veg Pakoda': '/images/Food Pic/de36532f-3e54-4404-b24b-b4fe697ea459-retina-large.jpeg',
    'Mix Veg Uthappam': '/images/Food Pic/61953395-e873-48b2-97b5-18e1d63abaf4-retina-large_1.jpeg',
    'Mutton Ghee Roast (Boneless)': '/images/Food Pic/tandoori-chicken-real.jpg',
    'Mutton Ghee Roast Biryani': '/images/Food Pic/2086c26a-44f6-46d4-aedf-3440dfb8152b-retina-large_1.jpeg',
    'Mutton Masala': '/images/Food Pic/b93db4c2-a2e2-4de8-87e3-2b33955e07ba-retina-large_1.jpeg',
    'Mutton Pepper Fry (Bone-In)': '/images/Food Pic/chai.jpg',
    'Mutton Pepper Masala': '/images/Food Pic/6d5ef8d4-45fd-4c6e-a0ca-9a920baf9f24-retina-large.jpeg',
    'Mutton Roast (Boneless)': '/images/Food Pic/egg-curry.jpg',
    'Mutton Vindaloo (Goat)': '/images/Food Pic/butter-chicken.jpg',
    'Mysore Masala Dosa': '/images/Food Pic/a26fd586-be3f-4449-934d-4330b21f0339-retina-large_1.jpeg',
    'Nalli Gosht Biryani': '/images/Food Pic/63ae2542-522e-41ee-bc14-c438416e3e50-retina-large.jpeg',
    'Nalli Gosht Pulav': '/images/Food Pic/a1cdc67d-b349-47b5-93df-e921612e1d3e-npp.jpg.jpeg',
    'Natukodi (Country Chicken) Fry': '/images/Food Pic/320c9d6a-aa9c-4767-816f-848221fcbd6c-retina-large.jpeg',
    'Natukodi Fry Biryani': '/images/Food Pic/fe1f24e2-8aa2-4066-b8db-df2bfb97d72e-retina-large_1.jpeg',
    'Non-Veg Thali': '/images/Food Pic/bddc93b4-fb81-4ff0-856b-9257ddc9ac4c-retina-large.jpeg',
    'Onion Kulcha': '/images/Food Pic/2562bc58-bd55-4ec7-b343-82a162c43c25-retina-large_1.jpeg',
    'Onion Salad': '/images/Food Pic/5c56fa44-789e-4d25-a38e-13f0f268fe58-retina-large.jpeg',
    'Onion Uthappam': '/images/Food Pic/a84ec0a8-a6f7-4fae-b3e1-d84ec635fd7e-retina-large.jpeg',
    'Palak Paneer (Spinach)': '/images/Food Pic/2562bc58-bd55-4ec7-b343-82a162c43c25-retina-large.jpeg',
    'Paneer 65 Dry / Wet': '/images/Food Pic/hyderabadi-chicken-dum-biryani.jpg',
    'Paneer Biryani': '/images/Food Pic/f3fd9261-a7ba-4561-b045-80ef37ad08e3-retina-large_1.jpeg',
    'Paneer Butter Masala': '/images/Food Pic/a1a164f1-f9b6-41fd-889e-691e40934c09-retina-large_1.jpeg',
    'Paneer Ghee Roast Biryani': '/images/Food Pic/tandoori-kebab.jpg',
    'Paneer Tikka Combo': '/images/Food Pic/9b2120d8-a083-40bf-aeec-d114af7ea1ad-retina-large.jpeg',
    'Paneer Tikka Dosa': '/images/Food Pic/4f04578b-ea7e-48b6-bb39-d0b9fa33ae34-retina-large.jpeg',
    'Paneer Tikka Kabab': '/images/Food Pic/butter-chicken-real.jpg',
    'Paneer Tikka Masala': '/images/Food Pic/kulfi.jpg',
    'Plain Dosa': '/images/Food Pic/965d89ac-6b87-48a4-87b2-7df05a327de4-retina-large_1.jpeg',
    'Plain Naan': '/images/Food Pic/540e6ca6-ff76-41df-b7ec-866a74583df0-retina-large.jpeg',
    'Plain Uthappam': '/images/Food Pic/c57c9caa-3473-449d-9333-cac9f5fccb69-retina-large.jpeg',
    'Pulav Rice': '/images/Food Pic/3bae8f59-b63e-402b-a00d-6a6031453f57-retina-large_1.jpeg',
    'Raita / Salan': '/images/Food Pic/d39ad6da-3476-49a2-8057-b258aaf7bc00-retina-large_1.jpeg',
    'Rajugari Royyala Fry Biryani': '/images/Food Pic/2712b2d5-5b70-48aa-8914-114887dd4614-retina-large.jpeg',
    'Rasmalai': '/images/Food Pic/a07c0e87-2854-4709-9678-9eea7ba37e08-retina-large.jpeg',
    'Rava Masala Dosa': '/images/Food Pic/7be68a8e-b118-46bb-a762-057a9f765a2b-retina-large.jpeg',
    'Rice': '/images/Food Pic/52ef7367-730e-4470-b87b-443e72431eac-retina-large.jpeg',
    'Royyala Vepudu (Shrimp Fry)': '/images/Food Pic/aa2aca44-eb61-46f3-b970-cf8a9628c632-retina-large.jpeg',
    'Shahi Paneer': '/images/Food Pic/0c0249a9-0d1d-440d-b3bd-4ae8ffa48613-retina-large.jpeg',
    'Shirmp Biryani': '/images/Food Pic/19f675be-3605-4ab5-ae3c-ae401f9be224-retina-large.jpeg',
    'Shrimp Fried Rice': '/images/Food Pic/2ed5d1a0-9d98-4c8c-949e-2d676bb6a943-retina-large.jpeg',
    'Shrimp Hakka Noodles': '/images/Food Pic/6d5ef8d4-45fd-4c6e-a0ca-9a920baf9f24-retina-large_1.jpeg',
    'Shrimp Iguru': '/images/Food Pic/pakoda.jpg',
    'Sweet Lassi': '/images/Food Pic/chicken-korma.jpg',
    'Tandoori Chicken (Full)': '/images/Food Pic/b7b638af-405f-4890-8402-15b79e78f5c1-retina-large.jpeg',
    'Tandoori Chicken (Half)': '/images/Food Pic/mutton-biryani.jpg',
    'Tandoori Pomfret (Fish)': '/images/Food Pic/chicken-tikka.jpg',
    'Tandoori Roti': '/images/Food Pic/a26fd586-be3f-4449-934d-4330b21f0339-retina-large.jpeg',
    'Ulavacharu Chicken Curry': '/images/Food Pic/0e1f77f7-73e5-4ebb-8066-e8a8ebfba28e-retina-large_1.jpeg',
    'Ulavacharu Chicken Dum Biryani': '/images/Food Pic/1d31a16a-ea7a-4191-970c-063314067c4f-retina-large.jpeg',
    'Ulavacharu Goat Curry': '/images/Food Pic/d7add416-e447-44ca-b11e-b036a755be03-retina-large_1.jpeg',
    'Veg Biryani Combo': '/images/Food Pic/uthappam.jpg',
    'Veg Fried Rice': '/images/Food Pic/28261cf3-b4dc-49bd-aebe-2b45304db317.jpg.jpeg',
    'Veg Hakka Noodles': '/images/Food Pic/cf4e64fc-291a-42e5-b511-60af9f8640b7-retina-large_1.jpeg',
    'Veg Manchurian (Wet)': '/images/Food Pic/bb18cb03-19d4-4816-bf06-45b989fba8ff-retina-large.jpeg',
    'Veg Thali': '/images/Food Pic/a7d6a792-1763-497d-92ef-13990f260ee1-retina-large.jpeg',
    'Vegetable Korma': '/images/Food Pic/03761e3c-e096-449c-b8b0-23971c92862b-retina-large.jpeg',
    'Vegetable Samosa {2}': '/images/Food Pic/c94515c9-7fe6-402c-b5f3-d54a1e0a1cad-retina-large.jpeg',
    'Vijaywada Spl. Bnls. Biryani': '/images/Food Pic/4f448e6d-0dca-4de0-be3d-e8a9f1b2a9da-retina-large.jpeg',
  };

  // Return mapped image or default
  return imageMap[itemName] || '/images/Food Pic/Hero Shot.png';
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
