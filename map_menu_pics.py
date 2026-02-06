#!/usr/bin/env python3
"""
Smart Image Mapper for Bawarchi Menu
Maps actual menu item names to properly named image files
"""

import os
import json
from pathlib import Path

# Menu items from the Excel file
MENU_ITEMS = [
    # Biryanis & Pulavs
    'Hyderabadi Chicken Dum Biryani',
    'Hyderabadi Goat Dum Biryani',
    'Boneless Chicken Biryani',
    'Boneless Mutton Biryani',
    'Gongura Chicken Dum Biryani',
    'Gongura Mutton Dum Biryani',
    'Chicken Ghee Roast Biryani',
    'Mutton Ghee Roast Biryani',
    'Nalli Gosht Biryani',
    'Hyderabadi Veg Dum Biryani',
    'Paneer Biryani',
    'Paneer Ghee Roast Biryani',
    'Ulavacharu Chicken Dum Biryani',
    'Ulavacharu Goat Curry',
    'Gongura Goat Fry Biryani',
    'Natukodi Fry Biryani',
    'Vijaywada Spl. Bnls. Biryani',
    'Rajugari Royyala Fry Biryani',
    'Shirmp Biryani',
    'Fish Biryani',
    'Egg Biryani',
    'Nalli Gosht Pulav',
    'Pulav Rice',
    'Masala Rice',
    'Rice',
    
    # Appetizers
    'Vegetable Samosa {2}',
    'Chicken Lollipops (Dry) {4}',
    'Chilli Chicken',
    'Chicken 65 Dry / Wet',
    'Chicken 555',
    'Chicken Majestic',
    'Apollo Fish',
    'Chilli Fish',
    'Gobi 65 Dry / Wet',
    'Paneer 65 Dry / Wet',
    'Gobi Manchurian',
    'Chicken Manchurian',
    'Chicken Manchurian (Wet)',
    'Veg Manchurian (Wet)',
    'Chilli Paneer',
    'Chilli Shrimp',
    'Crispy Corn',
    'Mix Veg Pakoda',
    'Chilli Idli',
    
    # Tandoori/Kababs
    'Chicken Tikka Kabab',
    'Paneer Tikka Kabab',
    'Tandoori Chicken (Half)',
    'Tandoori Chicken (Full)',
    'Tandoori Pomfret (Fish)',
    
    # Chicken Curries
    'Butter Chicken',
    'Chicken Tikka Masala',
    'Kadai Chicken',
    'Chicken Shahi Korma',
    'Hyderabad Chicken Curry',
    'Andhra Chicken Curry',
    'Amaravati Chicken Curry',
    'Gongura Chicken Curry',
    'Ulavacharu Chicken Curry',
    'Karaikudi Chicken',
    'Chicken Vindaloo',
    'Chicken Pepper Masala',
    'Chicken Pepper Fry',
    'Chicken Ghee Roast',
    'Karampodi Kodi (Chicken)',
    'Kaju Kodi Fry',
    'Natukodi (Country Chicken) Fry',
    
    # Goat/Mutton/Lamb Curries
    'Goat Korma',
    'Hyderabad Goat Curry',
    'Karaikudi Goat Curry',
    'Gongura Mutton Curry',
    'Gongura Mutton Fry',
    'Amaravati Mutton Curry',
    'Mutton Masala',
    'Mutton Pepper Masala',
    'Mutton Pepper Fry (Bone-In)',
    'Mutton Roast (Boneless)',
    'Mutton Ghee Roast (Boneless)',
    'Mutton Vindaloo (Goat)',
    'Lamb Korma',
    'Lamb Rogan Gosh',
    'Lamb Saag',
    
    # Seafood Curries
    'Fish Masala',
    'Fish Pulusu',
    'Fish Chettinadu Curry',
    'Shrimp Iguru',
    'Royyala Vepudu (Shrimp Fry)',
    'Amaravati Royyala Kura',
    
    # Vegetarian Curries
    'Paneer Butter Masala',
    'Paneer Tikka Masala',
    'Kadai Paneer',
    'Shahi Paneer',
    'Palak Paneer (Spinach)',
    'Malai Kofta',
    'Chana Masala',
    'Aloo Gobi Masala',
    'Dal Makhani',
    'Dal Tadka',
    'Vegetable Korma',
    'Kadai Vegetable',
    'Gutti Vankay Curry',
    
    # Dosas & South Indian
    'Plain Dosa',
    'Masala Dosa',
    'Mysore Masala Dosa',
    'Rava Masala Dosa',
    '70 MM Dosa (Dine in Only)',
    'Chicken Tikka Dosa',
    'Paneer Tikka Dosa',
    'Dosa with Chicken Curry',
    'Dosa with Goat Curry',
    'Idli {2}',
    'Medu Vada {2}',
    'Plain Uthappam',
    'Onion Uthappam',
    'Mix Veg Uthappam',
    
    # Breads
    'Plain Naan',
    'Butter Naan',
    'Garlic Naan',
    'Onion Kulcha',
    'Tandoori Roti',
    'Bread Basket',
    
    # Rice & Noodles
    'Veg Fried Rice',
    'Chicken Fried Rice',
    'Shrimp Fried Rice',
    'Chicken Schezwan Fried Rice',
    'Veg Hakka Noodles',
    'Chicken Hakka Noodles',
    'Shrimp Hakka Noodles',
    
    # Combos
    'Chicken Biryani Combo',
    'Goat Biryani Combo',
    'Veg Biryani Combo',
    'Butter Chicken Combo',
    'Chicken Tikka Combo',
    'Paneer Tikka Combo',
    'Dal Makhani Combo',
    'Chole Masala Combo',
    'Hyderabadi Chicken Curry Combo',
    
    # Thalis
    'Veg Thali',
    'Non-Veg Thali',
    
    # Desserts
    'Gulab Jamun',
    'Rasmalai',
    'Ice Cream Double Scoop',
    'Matka Kulfi',
    
    # Beverages
    'Mango Lassi',
    'Sweet Lassi',
    'Falooda Shake',
    'Mango Shake',
    'Indian Masala Tea (Chai)',
    
    # Sides
    'Raita / Salan',
    'Onion Salad',
]

def normalize_name(name):
    """Normalize names for comparison - remove special chars, lowercase, etc."""
    # Remove special characters and extra spaces
    normalized = name.lower()
    normalized = normalized.replace('(', '').replace(')', '').replace('{', '').replace('}', '')
    normalized = normalized.replace('-', ' ').replace('_', ' ')
    normalized = ' '.join(normalized.split())  # Remove extra spaces
    return normalized

def find_best_match(menu_item, image_files):
    """Find the best matching image file for a menu item"""
    menu_normalized = normalize_name(menu_item)
    
    # Try exact match first (after normalization)
    for img_file in image_files:
        img_name = os.path.splitext(img_file)[0]  # Remove extension
        img_normalized = normalize_name(img_name)
        
        if menu_normalized == img_normalized:
            return img_file
    
    # Try to find best partial match
    best_match = None
    best_score = 0
    
    for img_file in image_files:
        img_name = os.path.splitext(img_file)[0]
        img_normalized = normalize_name(img_name)
        
        # Calculate word overlap score
        menu_words = set(menu_normalized.split())
        img_words = set(img_normalized.split())
        
        # Common words
        common = menu_words & img_words
        score = len(common)
        
        # Bonus for key words
        key_words = ['biryani', 'chicken', 'mutton', 'goat', 'paneer', 'fish', 'shrimp', 
                     'dosa', 'naan', 'tikka', 'tandoori', 'butter', 'masala', 'curry']
        for word in key_words:
            if word in menu_normalized and word in img_normalized:
                score += 2
        
        if score > best_score:
            best_score = score
            best_match = img_file
    
    return best_match if best_score > 0 else None

def generate_mapping():
    """Generate image mapping for all menu items"""
    
    # Get all image files
    image_dir = Path("public/images/menu pics")
    if not image_dir.exists():
        print(f"❌ Error: {image_dir} does not exist!")
        return
    
    image_files = [f.name for f in image_dir.iterdir() if f.is_file() and not f.name.startswith('.')]
    image_files = [f for f in image_files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.avif'))]
    
    print(f"🔍 Found {len(image_files)} image files")
    print(f"📋 Mapping {len(MENU_ITEMS)} menu items\n")
    
    # Generate mapping
    mapping = {}
    used_images = set()
    unmapped_items = []
    
    for item in MENU_ITEMS:
        match = find_best_match(item, image_files)
        if match and match not in used_images:
            mapping[item] = f'/images/menu pics/{match}'
            used_images.add(match)
            print(f"✓ {item:50s} → {match}")
        else:
            unmapped_items.append(item)
            print(f"✗ {item:50s} → NO MATCH")
    
    # Add default fallback
    print(f"\n📊 Results:")
    print(f"   Mapped: {len(mapping)}/{len(MENU_ITEMS)}")
    print(f"   Unmapped: {len(unmapped_items)}")
    
    # Generate TypeScript code
    ts_code = '''// Auto-generated image mapping from menu pics folder
const getMenuItemImage = (itemName: string): string => {
  const imageMap: { [key: string]: string } = {
'''
    
    for item, img_path in sorted(mapping.items()):
        ts_code += f"    '{item}': '{img_path}',\n"
    
    ts_code += '''  };

  // Return mapped image or default
  return imageMap[itemName] || '/images/Food Pic/Hero Shot.png';
};

export default getMenuItemImage;
'''
    
    # Save TypeScript file
    with open('menu_pics_mapping.ts', 'w') as f:
        f.write(ts_code)
    
    # Save JSON for reference
    with open('menu_pics_mapping.json', 'w') as f:
        json.dump(mapping, f, indent=2)
    
    print(f"\n✅ Done!")
    print(f"   TypeScript: menu_pics_mapping.ts")
    print(f"   JSON Reference: menu_pics_mapping.json")
    
    if unmapped_items:
        print(f"\n⚠️  Unmapped items:")
        for item in unmapped_items:
            print(f"   - {item}")

if __name__ == '__main__':
    generate_mapping()
