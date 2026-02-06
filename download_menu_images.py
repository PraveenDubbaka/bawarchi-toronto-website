#!/usr/bin/env python3
"""
Download food images for menu items from Pexels API
"""
import os
import requests
import time
import re

# Pexels API key (free tier - 200 requests/hour)
# Get your free API key from: https://www.pexels.com/api/
PEXELS_API_KEY = "YOUR_API_KEY_HERE"  # Replace with your actual key

MENU_ITEMS = [
    "Hyderabadi Chicken Dum Biryani",
    "Hyderabadi Goat Dum Biryani",
    "Boneless Chicken Biryani",
    "Boneless Mutton Biryani",
    "Paneer Butter Masala",
    "Butter Chicken",
    "Tandoori Chicken",
    "Chicken Tikka Kabab",
    "Vegetable Samosa",
    "Garlic Naan",
    "Masala Dosa",
    "Idli",
    "Chicken 65",
    "Paneer Tikka",
    "Gulab Jamun",
    "Dal Makhani",
    "Palak Paneer",
    "Chicken Curry",
    "Mutton Curry",
    "Fish Curry"
]

def sanitize_filename(name):
    """Convert menu item name to valid filename"""
    # Remove special characters and replace spaces with hyphens
    name = re.sub(r'[{}()/]', '', name)
    name = re.sub(r'\s+', '-', name.strip())
    name = name.lower()
    return f"{name}.jpg"

def search_image(query, api_key):
    """Search for image on Pexels"""
    headers = {
        'Authorization': api_key
    }
    
    # Clean up query for better results
    search_query = query.lower()
    search_query = re.sub(r'\{.*?\}', '', search_query)  # Remove {2} etc
    search_query = re.sub(r'\(.*?\)', '', search_query)  # Remove (Half) etc
    
    url = f"https://api.pexels.com/v1/search?query={search_query} indian food&per_page=1"
    
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            data = response.json()
            if data['photos']:
                return data['photos'][0]['src']['large']
        return None
    except Exception as e:
        print(f"Error searching for {query}: {e}")
        return None

def download_image(url, filepath):
    """Download image from URL"""
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return False

def main():
    output_dir = "public/images/Food Pic"
    os.makedirs(output_dir, exist_ok=True)
    
    print("Starting image download...")
    print(f"Total items: {len(MENU_ITEMS)}")
    print("-" * 50)
    
    for i, item in enumerate(MENU_ITEMS, 1):
        filename = sanitize_filename(item)
        filepath = os.path.join(output_dir, filename)
        
        # Skip if file already exists
        if os.path.exists(filepath):
            print(f"[{i}/{len(MENU_ITEMS)}] ✓ {item} - Already exists")
            continue
        
        print(f"[{i}/{len(MENU_ITEMS)}] Searching for: {item}")
        
        image_url = search_image(item, PEXELS_API_KEY)
        
        if image_url:
            if download_image(image_url, filepath):
                print(f"  ✓ Downloaded: {filename}")
            else:
                print(f"  ✗ Failed to download")
        else:
            print(f"  ✗ No image found")
        
        # Rate limiting - be nice to the API
        time.sleep(1)
    
    print("-" * 50)
    print("Download complete!")

if __name__ == "__main__":
    if PEXELS_API_KEY == "YOUR_API_KEY_HERE":
        print("ERROR: Please get a free API key from https://www.pexels.com/api/")
        print("and replace YOUR_API_KEY_HERE in the script")
    else:
        main()
