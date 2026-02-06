#!/usr/bin/env python3
"""
Auto-map random images to menu items intelligently
Distributes 242 unique images across 170 menu items
"""
import os
import random
import json

# All menu items from the restaurant
MENU_ITEMS = [
    # Biryanis & Pulavs
    "Hyderabadi Chicken Dum Biryani",
    "Hyderabadi Goat Dum Biryani",
    "Boneless Chicken Biryani",
    "Boneless Mutton Biryani",
    "Gongura Chicken Dum Biryani",
    "Gongura Mutton Dum Biryani",
    "Chicken Ghee Roast Biryani",
    "Mutton Ghee Roast Biryani",
    "Nalli Gosht Biryani",
    "Hyderabadi Veg Dum Biryani",
    "Paneer Biryani",
    "Paneer Ghee Roast Biryani",
    "Egg Biryani",
    "Vijaywada Spl. Bnls. Biryani",
    "Ulavacharu Chicken Dum Biryani",
    "Shirmp Biryani",
    "Fish Biryani",
    "Gongura Goat Fry Biryani",
    "Natukodi Fry Biryani",
    "Rajugari Royyala Fry Biryani",
    "Nalli Gosht Pulav",
    # Appetizers Veg
    "Vegetable Samosa {2}",
    "Mix Veg Pakoda",
    "Gobi 65 Dry / Wet",
    "Gobi Manchurian",
    "Chilli Paneer",
    "Paneer 65 Dry / Wet",
    "Paneer Tikka Kabab",
    "Crispy Corn",
    "Karampodi Gobi",
    "Chilli Idli",
    # Appetizers Non-Veg
    "Chicken 65 Dry / Wet",
    "Chicken Lollipops (Dry) {4}",
    "Chilli Chicken",
    "Chicken Manchurian",
    "Chicken 555",
    "Chicken Majestic",
    "Chicken Ghee Roast",
    "Chicken Pepper Fry",
    "Karampodi Kodi (Chicken)",
    "Kaju Kodi Fry",
    "Mutton Pepper Fry (Bone-In)",
    "Mutton Roast (Boneless)",
    "Mutton Ghee Roast (Boneless)",
    "Apollo Fish",
    "Chilli Fish",
    "Chilli Shrimp",
    "Tandoori Chicken (Half)",
    "Tandoori Chicken (Full)",
    "Chicken Tikka Kabab",
    "Tandoori Pomfret (Fish)",
    "Royyala Vepudu (Shrimp Fry)",
    "Natukodi (Country Chicken) Fry",
    "Gongura Mutton Fry",
    # Vegetarian Curries
    "Dal Tadka",
    "Dal Makhani",
    "Chana Masala",
    "Paneer Butter Masala",
    "Palak Paneer (Spinach)",
    "Paneer Tikka Masala",
    "Kadai Paneer",
    "Shahi Paneer",
    "Vegetable Korma",
    "Kadai Vegetable",
    "Malai Kofta",
    "Gutti Vankay Curry",
    "Aloo Gobi Masala",
    # Chicken Curries
    "Butter Chicken",
    "Chicken Tikka Masala",
    "Kadai Chicken",
    "Hyderabad Chicken Curry",
    "Chicken Shahi Korma",
    "Andhra Chicken Curry",
    "Gongura Chicken Curry",
    "Amaravati Chicken Curry",
    "Ulavacharu Chicken Curry",
    "Chicken Vindaloo",
    "Chicken Pepper Masala",
    "Karaikudi Chicken",
    # Mutton/Goat Curries
    "Goat Korma",
    "Mutton Masala",
    "Hyderabad Goat Curry",
    "Gongura Mutton Curry",
    "Amaravati Mutton Curry",
    "Ulavacharu Goat Curry",
    "Mutton Pepper Masala",
    "Mutton Vindaloo (Goat)",
    "Karaikudi Goat Curry",
    "Lamb Rogan Gosh",
    "Lamb Korma",
    "Kadai Lamb",
    "Lamb Saag",
    # Dosas & South Indian
    "Plain Dosa",
    "Masala Dosa",
    "Mysore Masala Dosa",
    "Paneer Tikka Dosa",
    "Chicken Tikka Dosa",
    "70 MM Dosa (Dine in Only)",
    "Rava Masala Dosa",
    "Idli {2}",
    "Medu Vada {2}",
    "Plain Uthappam",
    "Onion Uthappam",
    "Mix Veg Uthappam",
    # Indo Chinese
    "Veg Fried Rice",
    "Veg Hakka Noodles",
    "Veg Manchurian (Wet)",
    "Chicken Fried Rice",
    "Chicken Hakka Noodles",
    "Chicken Manchurian (Wet)",
    "Chicken Schezwan Fried Rice",
    "Shrimp Fried Rice",
    "Shrimp Hakka Noodles",
    # Seafood
    "Fish Masala",
    "Fish Chettinadu Curry",
    "Fish Pulusu",
    "Shrimp Iguru",
    "Amaravati Royyala Kura",
    # Breads & Sides
    "Plain Naan",
    "Butter Naan",
    "Garlic Naan",
    "Tandoori Roti",
    "Onion Kulcha",
    "Bread Basket",
    "Rice",
    "Pulav Rice",
    "Masala Rice",
    "Raita / Salan",
    "Onion Salad",
    # Desserts & Beverages
    "Gulab Jamun",
    "Rasmalai",
    "Ice Cream Double Scoop",
    "Matka Kulfi",
    "Mango Lassi",
    "Sweet Lassi",
    "Mango Shake",
    "Falooda Shake",
    "Indian Masala Tea (Chai)",
    # Combos & Specials
    "Veg Thali",
    "Non-Veg Thali",
    "Butter Chicken Combo",
    "Chicken Biryani Combo",
    "Goat Biryani Combo",
    "Veg Biryani Combo",
    "Chicken Tikka Combo",
    "Paneer Tikka Combo",
    "Hyderabadi Chicken Curry Combo",
    "Dal Makhani Combo",
    "Chole Masala Combo",
    "Dosa with Chicken Curry",
    "Dosa with Goat Curry",
]

def get_all_images(directory):
    """Get all image files from directory"""
    images = []
    for file in os.listdir(directory):
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')) and not file.startswith('.'):
            images.append(file)
    return images

def generate_mapping(images, menu_items):
    """Generate a mapping of menu items to images"""
    # Shuffle images for random distribution
    shuffled_images = images.copy()
    random.shuffle(shuffled_images)
    
    mapping = {}
    image_index = 0
    
    for item in menu_items:
        if image_index < len(shuffled_images):
            mapping[item] = shuffled_images[image_index]
            image_index += 1
        else:
            # If we run out of images, reuse from the start
            mapping[item] = shuffled_images[image_index % len(shuffled_images)]
            image_index += 1
    
    return mapping

def generate_typescript_function(mapping):
    """Generate TypeScript function with exact image mappings"""
    lines = []
    lines.append("// Auto-generated image mapping from scraped portal images")
    lines.append("const getMenuItemImage = (itemName: string): string => {")
    lines.append("  // Exact matches for all menu items")
    lines.append("  const imageMap: { [key: string]: string } = {")
    
    for item, image in sorted(mapping.items()):
        # Escape single quotes in item name
        escaped_item = item.replace("'", "\\'")
        lines.append(f"    '{escaped_item}': '/images/Food Pic/{image}',")
    
    lines.append("  };")
    lines.append("")
    lines.append("  // Return mapped image or default")
    lines.append("  return imageMap[itemName] || '/images/Food Pic/Hero Shot.png';")
    lines.append("};")
    
    return "\n".join(lines)

def main():
    images_dir = "public/images/Food Pic"
    
    print("🔍 Scanning images...")
    images = get_all_images(images_dir)
    print(f"   Found {len(images)} images")
    
    print(f"📋 Menu items to map: {len(MENU_ITEMS)}")
    
    print("🎲 Generating random mapping...")
    mapping = generate_mapping(images, MENU_ITEMS)
    
    print("📝 Generating TypeScript code...")
    ts_code = generate_typescript_function(mapping)
    
    # Save to file
    output_file = "menu_image_mapping.ts"
    with open(output_file, 'w') as f:
        f.write(ts_code)
    
    print(f"✅ Done! Mapping saved to {output_file}")
    print(f"\n📊 Statistics:")
    print(f"   - Menu items mapped: {len(mapping)}")
    print(f"   - Unique images used: {len(set(mapping.values()))}")
    
    # Also save JSON for reference
    json_file = "menu_image_mapping.json"
    with open(json_file, 'w') as f:
        json.dump(mapping, f, indent=2)
    print(f"   - JSON mapping saved: {json_file}")

if __name__ == "__main__":
    main()
