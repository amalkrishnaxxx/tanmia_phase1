export interface Product {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  { id: "palak-murukku", name: "Palak Murukku", description: "Spinach-infused crispy spirals with a healthy twist.", featured: true },
  { id: "karasev", name: "Karasev", description: "Traditional crunchy gram flour strands seasoned to perfection.", featured: true },
  { id: "gingelly-candy", name: "Gingelly Candy", description: "Sweet sesame brittle made with pure gingelly.", featured: true },
  { id: "jackfruit-chips", name: "Jackfruit Chips", description: "Thin-sliced jackfruit chips fried in premium oil.", featured: true },
  { id: "kajoori", name: "Kajoori", description: "Classic date-flavored sweet snack, rich and chewy.", featured: true },
  { id: "tapioca-stick", name: "Tapioca Stick", description: "Crunchy tapioca sticks lightly salted for a satisfying crunch.", featured: true },
  { id: "tapioca-chips", name: "Tapioca Chips", description: "Thin, crispy tapioca chips with a clean, light flavor." },
  { id: "malabar-murukku-red", name: "Malabar Murukku – Red Apsara", description: "Spiced Malabar-style murukku with a vibrant red hue.", featured: true },
  { id: "malabar-murukku-chilly", name: "Malabar Murukku – Chilly", description: "Fiery chili-flavored murukku for the spice lover.", featured: true },
  { id: "ring-murukku", name: "Ring Murukku", description: "Classic ring-shaped murukku, crispy and aromatic." },
  { id: "payyoli-mixture", name: "Payyoli Mixture", description: "A savory Kerala-style mixture with peanuts and lentils." },
  { id: "tomato-murukku", name: "Tomato Murukku", description: "Tangy tomato-seasoned crispy murukku spirals." },
  { id: "butter-murukku", name: "Butter Murukku", description: "Rich buttery murukku, melt-in-mouth delicious." },
  { id: "biscuit-masala-cashew", name: "Biscuit Masala – Cashew Type", description: "Masala-spiced biscuit snack loaded with cashew flavor." },
  { id: "egg-biscuit", name: "Egg Biscuit", description: "Light, fluffy egg biscuits with a golden crisp." },
  { id: "potato-sticks", name: "Potato Sticks", description: "Slender, crunchy potato sticks seasoned just right." },
  { id: "fruit-banana-chips", name: "Fruit Banana Chips", description: "Sweet banana chips made from ripe plantains." },
  { id: "banana-chips", name: "Banana Chips", description: "Classic salted banana chips fried in coconut oil." },
];

export const featuredProducts = products.filter((p) => p.featured);
